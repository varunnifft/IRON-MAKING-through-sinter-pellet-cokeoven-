import Foundation
import WebKit
import UniformTypeIdentifiers

/// Serves imapp://im/<path> from the bundled "app" folder (offline). Supports byte ranges for audio / video.
@MainActor
final class AssetSchemeHandler: NSObject, WKURLSchemeHandler {
    let root: URL
    init(root: URL) { self.root = root }

    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let url = urlSchemeTask.request.url else {
            urlSchemeTask.didFailWithError(URLError(.badURL)); return
        }
        guard let file = Self.fileURL(for: url, root: root),
              let data = try? Data(contentsOf: file, options: .mappedIfSafe) else {
            respond(urlSchemeTask, url: url, status: 404,
                    headers: ["Content-Type": "text/plain; charset=utf-8"], body: Data("Not found: \(url.path)".utf8))
            return
        }
        var headers = ["Content-Type": Self.mime(file.pathExtension),
                       "Access-Control-Allow-Origin": "*",
                       "Cache-Control": "no-cache",
                       "Accept-Ranges": "bytes"]
        if let h = urlSchemeTask.request.value(forHTTPHeaderField: "Range"), let r = Self.range(h, size: data.count) {
            headers["Content-Range"] = "bytes \(r.lowerBound)-\(r.upperBound - 1)/\(data.count)"
            headers["Content-Length"] = "\(r.count)"
            respond(urlSchemeTask, url: url, status: 206, headers: headers, body: data.subdata(in: r))
        } else {
            headers["Content-Length"] = "\(data.count)"
            respond(urlSchemeTask, url: url, status: 200, headers: headers, body: data)
        }
    }

    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {}

    private func respond(_ task: WKURLSchemeTask, url: URL, status: Int, headers: [String: String], body: Data) {
        guard let r = HTTPURLResponse(url: url, statusCode: status, httpVersion: "HTTP/1.1", headerFields: headers) else {
            task.didFailWithError(URLError(.cannotParseResponse)); return
        }
        task.didReceive(r)
        task.didReceive(body)
        task.didFinish()
    }

    /// Bundle file for an imapp:// URL; nil if missing or outside the app folder.
    nonisolated static func fileURL(for url: URL, root: URL) -> URL? {
        var path = url.path                              // already percent-decoded
        if path.isEmpty || path == "/" { path = "/www/index.html" }
        let rel = String(path.drop(while: { $0 == "/" }))
        let base = root.standardizedFileURL
        let file = base.appendingPathComponent(rel).standardizedFileURL
        guard file.path.hasPrefix(base.path + "/") else { return nil }
        var isDir: ObjCBool = false
        guard FileManager.default.fileExists(atPath: file.path, isDirectory: &isDir) else { return nil }
        if isDir.boolValue {
            let index = file.appendingPathComponent("index.html")
            return FileManager.default.fileExists(atPath: index.path) ? index : nil
        }
        return file
    }

    nonisolated static func range(_ header: String, size: Int) -> Range<Int>? {
        guard size > 0, header.lowercased().hasPrefix("bytes=") else { return nil }
        let spec = header.dropFirst(6).split(separator: ",").first.map(String.init) ?? ""
        let parts = spec.split(separator: "-", omittingEmptySubsequences: false)
            .map { String($0).trimmingCharacters(in: .whitespaces) }
        guard parts.count == 2 else { return nil }
        var start: Int
        var end: Int
        if parts[0].isEmpty {
            guard let n = Int(parts[1]), n > 0 else { return nil }
            start = max(0, size - n); end = size - 1
        } else {
            guard let s = Int(parts[0]) else { return nil }
            start = s; end = Int(parts[1]) ?? (size - 1)
        }
        end = min(end, size - 1)
        guard start <= end else { return nil }
        return start..<(end + 1)
    }

    nonisolated static func mime(_ ext: String) -> String {
        switch ext.lowercased() {
        case "html", "htm": return "text/html; charset=utf-8"
        case "js", "mjs", "cjs": return "text/javascript; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "json", "map": return "application/json; charset=utf-8"
        case "webmanifest": return "application/manifest+json"
        case "txt", "csv", "py", "md": return "text/plain; charset=utf-8"
        case "svg": return "image/svg+xml"
        case "wasm": return "application/wasm"
        case "woff2": return "font/woff2"
        case "woff": return "font/woff"
        case "ttf": return "font/ttf"
        case "otf": return "font/otf"
        case "webp": return "image/webp"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "gif": return "image/gif"
        case "mp3": return "audio/mpeg"
        case "m4a": return "audio/mp4"
        case "ogg": return "audio/ogg"
        case "wav": return "audio/wav"
        case "mp4": return "video/mp4"
        case "pdf": return "application/pdf"
        case "xlsx": return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        case "whl", "zip", "tar", "gz", "data": return "application/octet-stream"
        default:
            return UTType(filenameExtension: ext)?.preferredMIMEType ?? "application/octet-stream"
        }
    }
}
