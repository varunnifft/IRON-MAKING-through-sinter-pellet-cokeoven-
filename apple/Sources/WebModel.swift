import SwiftUI
import WebKit

enum IM {
    /// Pages are served from imapp://im/… out of the app bundle (like app://im/… in the Windows / Mac Electron build).
    static let scheme = "imapp"
    static let host = "im"
    static let version = (Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String) ?? ""
    static let background = Color(red: 7 / 255, green: 20 / 255, blue: 38 / 255)

    /// App Store rule 4.8: an app that offers Google sign-in must also offer Sign in with Apple (or a similar
    /// private login). The Apple build therefore hides "Continue with Google"; users sign in with
    /// login ID / password or the e-mail code, which are the app's own accounts.
    static let hideGoogleSignIn = true

    static func url(_ path: String) -> URL { URL(string: "\(scheme)://\(host)/\(path)")! }
    static let home = url("www/index.html")
    static var assetRoot: URL { Bundle.main.resourceURL!.appendingPathComponent("app", isDirectory: true) }

    /// ironmaking://sinter and ironmakingapk://coke (Android app links) → the matching page in this app
    static func mapAppLink(_ url: URL) -> URL? {
        guard let s = url.scheme?.lowercased(), s == "ironmaking" || s == "ironmakingapk" else { return nil }
        switch (url.host ?? "").lowercased() {
        case "sinter": return IM.url("index.html")
        case "coke": return IM.url("xco/index.html")
        default: return IM.home
        }
    }
}

struct Popup: Identifiable {
    let id = UUID()
    let webView: WKWebView
}

@MainActor
final class WebModel: NSObject, ObservableObject {
    let webView: WKWebView
    @Published var popup: Popup?

    override init() {
        let cfg = WKWebViewConfiguration()
        cfg.setURLSchemeHandler(AssetSchemeHandler(root: IM.assetRoot), forURLScheme: IM.scheme)
        cfg.websiteDataStore = .default()          // logins and saved inputs stay on the device between launches
        cfg.applicationNameForUserAgent = "Version/17.0 Safari/605.1.15 IronMakingApple/\(IM.version)"
        cfg.preferences.javaScriptCanOpenWindowsAutomatically = true
        #if os(iOS)
        cfg.allowsInlineMediaPlayback = true
        cfg.mediaTypesRequiringUserActionForPlayback = []
        cfg.dataDetectorTypes = []
        #endif
        if #available(iOS 15.4, macOS 12.3, *) { cfg.preferences.isElementFullscreenEnabled = true }
        cfg.userContentController.addUserScript(WKUserScript(source: Bridge.startScript(hideGoogle: IM.hideGoogleSignIn),
                                                             injectionTime: .atDocumentStart, forMainFrameOnly: false))
        webView = WKWebView(frame: .zero, configuration: cfg)
        super.init()

        let ucc = webView.configuration.userContentController
        ucc.add(MessageRelay(self), name: "im")
        ucc.addScriptMessageHandler(ReplyRelay(self), contentWorld: .page, name: "imnet")
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.allowsBackForwardNavigationGestures = true   // swipe from the left edge = back (like Android back)
        #if os(iOS)
        webView.isOpaque = false
        webView.backgroundColor = UIColor(IM.background)
        webView.scrollView.backgroundColor = UIColor(IM.background)
        #endif
        #if DEBUG
        if #available(iOS 16.4, macOS 13.3, *) { webView.isInspectable = true }
        #endif
        webView.load(URLRequest(url: IM.home))
    }

    // MARK: navigation helpers
    func load(_ url: URL) {
        popup = nil
        webView.load(URLRequest(url: url))
    }

    func go(_ path: String) { load(IM.url(path)) }

    func forward() { if webView.canGoForward { webView.goForward() } }

    /// Same as the Android back key: the page's own handler first (window.appBack), then history, then home.
    func back() {
        let js = "(function(){try{if(typeof window.appBack==='function'){var r=window.appBack();return r!==false;}}catch(e){}return false;})()"
        webView.evaluateJavaScript(js) { [weak self] result, _ in
            guard let self = self else { return }
            if (result as? Bool) == true { return }
            if self.webView.canGoBack { self.webView.goBack() }
            else if self.webView.url != IM.home { self.webView.load(URLRequest(url: IM.home)) }
        }
    }

    func printPage() { Platform.print(webView, jobName: webView.title ?? "Iron Making") }

    // MARK: messages from the pages (window.webkit.messageHandlers.im)
    func handle(_ message: WKScriptMessage) {
        guard let d = message.body as? [String: Any], let t = d["t"] as? String else { return }
        let wv = message.webView ?? webView
        switch t {
        case "print":
            Platform.print(wv, jobName: (d["name"] as? String) ?? "Iron Making")
        case "save":
            guard let b64 = d["data"] as? String, let data = Data(base64Encoded: b64) else { return }
            Platform.save(data: data, name: Self.safeName(d["name"] as? String), from: wv)
        case "share":
            Platform.shareText((d["text"] as? String) ?? "", from: wv)
        case "open":
            if let s = d["url"] as? String, let u = URL(string: s) { openOutside(u) }
        default:
            break
        }
    }

    /// window.bfNet.post / fetchUrl: network calls made natively (the same path the Windows / Mac build uses),
    /// so login, cloud backup and Drive links work without browser CORS limits.
    func handleNet(_ message: WKScriptMessage, reply: @escaping (Any?, String?) -> Void) {
        guard let d = message.body as? [String: Any], let op = d["op"] as? String,
              let s = d["url"] as? String, let url = URL(string: s),
              let sc = url.scheme?.lowercased(), sc == "https" || sc == "http" else {
            reply(["ok": false, "error": "Only web links can be fetched"], nil)
            return
        }
        var req = URLRequest(url: url, cachePolicy: .reloadIgnoringLocalCacheData, timeoutInterval: 90)
        if op == "post" {
            req.httpMethod = "POST"
            req.httpBody = Data(((d["body"] as? String) ?? "").utf8)
            req.setValue("text/plain;charset=utf-8", forHTTPHeaderField: "Content-Type")
        }
        Task {
            do {
                let (data, resp) = try await URLSession.shared.data(for: req)
                let code = (resp as? HTTPURLResponse)?.statusCode ?? 0
                let ok = (200..<300).contains(code)
                var out: [String: Any] = ["ok": ok, "status": code, "error": ok ? "" : "HTTP \(code)"]
                if op == "post" {
                    out["text"] = String(decoding: data, as: UTF8.self)
                } else {
                    out["data"] = data.base64EncodedString()
                    out["type"] = resp.mimeType ?? ""
                    out["name"] = resp.suggestedFilename ?? ""
                }
                reply(out, nil)
            } catch {
                reply(["ok": false, "error": error.localizedDescription], nil)
            }
        }
    }

    func openOutside(_ url: URL) {
        if let to = IM.mapAppLink(url) { load(to); return }
        guard let s = url.scheme?.lowercased(), s != "intent", s != "javascript" else { return }
        Platform.openExternal(url)
    }

    static func safeName(_ n: String?) -> String {
        let bad = CharacterSet(charactersIn: "/\\:*?\"<>|\n\r\t")
        let s = (n ?? "").components(separatedBy: bad).joined(separator: " ").trimmingCharacters(in: .whitespaces)
        return s.isEmpty ? "Iron Making file" : s
    }
}

// MARK: - Navigation: in-app pages stay inside, web links open in Safari / the default browser
extension WebModel: WKNavigationDelegate {
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        guard let url = navigationAction.request.url, let scheme = url.scheme?.lowercased() else {
            decisionHandler(.allow); return
        }
        if let to = IM.mapAppLink(url) {
            decisionHandler(.cancel); load(to); return
        }
        switch scheme {
        case IM.scheme, "about", "blob", "data", "javascript":
            decisionHandler(.allow)
        case "http", "https":
            if navigationAction.targetFrame?.isMainFrame ?? true {
                decisionHandler(.cancel); openOutside(url)
            } else {
                decisionHandler(.allow)        // embedded frames (e.g. a video) may load
            }
        default:                               // mailto:, tel:, whatsapp:, …
            decisionHandler(.cancel); openOutside(url)
        }
    }

    /// A link to a file the web view cannot show (xlsx template, zip…) → Save / Share it.
    func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse,
                 decisionHandler: @escaping (WKNavigationResponsePolicy) -> Void) {
        if !navigationResponse.canShowMIMEType, let url = navigationResponse.response.url, url.scheme == IM.scheme {
            decisionHandler(.cancel)
            if let file = AssetSchemeHandler.fileURL(for: url, root: IM.assetRoot),
               let data = try? Data(contentsOf: file) {
                Platform.save(data: data, name: file.lastPathComponent, from: webView)
            }
            return
        }
        decisionHandler(.allow)
    }

    /// Sinter and Coke pages are separate screens on Android: add the small "⌂ Iron Making" button (as on Windows / Mac).
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        guard webView === self.webView, let u = webView.url, u.scheme == IM.scheme, !u.path.hasPrefix("/www/") else { return }
        webView.evaluateJavaScript(Bridge.homePill(IM.home.absoluteString), completionHandler: nil)
    }

    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) { webView.reload() }
}

// MARK: - window.open, alert / confirm / prompt, file picker
extension WebModel: WKUIDelegate {
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = navigationAction.request.url, let s = url.scheme?.lowercased(), !url.absoluteString.isEmpty {
            if IM.mapAppLink(url) != nil || ["http", "https", "mailto", "tel", "whatsapp", "intent"].contains(s) {
                openOutside(url); return nil
            }
            if s == IM.scheme { load(url); return nil }
        }
        // window.open() for a report preview / print window (about:blank, blob:, data:)
        let pop = WKWebView(frame: .zero, configuration: configuration)
        pop.navigationDelegate = self
        pop.uiDelegate = self
        #if os(iOS)
        pop.backgroundColor = .white
        #endif
        popup = Popup(webView: pop)
        return pop
    }

    func webViewDidClose(_ webView: WKWebView) {
        if popup?.webView === webView { popup = nil }
    }

    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        Platform.alert(message, completion: completionHandler)
    }

    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        Platform.confirm(message, completion: completionHandler)
    }

    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Void) {
        Platform.prompt(prompt, defaultText: defaultText, completion: completionHandler)
    }

    #if os(macOS)
    /// <input type="file"> on the Mac (iPhone / iPad shows its own Files / Photos picker automatically).
    func webView(_ webView: WKWebView, runOpenPanelWith parameters: WKOpenPanelParameters,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping ([URL]?) -> Void) {
        let p = NSOpenPanel()
        p.allowsMultipleSelection = parameters.allowsMultipleSelection
        p.canChooseDirectories = parameters.allowsDirectories
        p.canChooseFiles = true
        p.begin { r in completionHandler(r == .OK ? p.urls : nil) }
    }
    #endif
}

// The user content controller keeps its handlers alive; these small relays avoid a retain cycle.
@MainActor
final class MessageRelay: NSObject, WKScriptMessageHandler {
    weak var model: WebModel?
    init(_ model: WebModel) { self.model = model }
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        model?.handle(message)
    }
}

@MainActor
final class ReplyRelay: NSObject, WKScriptMessageHandlerWithReply {
    weak var model: WebModel?
    init(_ model: WebModel) { self.model = model }
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage,
                               replyHandler: @escaping (Any?, String?) -> Void) {
        guard let model = model else { replyHandler(["ok": false, "error": "closed"], nil); return }
        model.handleNet(message, reply: replyHandler)
    }
}
