import Foundation
import WebKit

#if os(iOS)
import UIKit

/// iPhone / iPad: alerts, print (with Save as PDF), Save to Files / Share, open links in Safari.
@MainActor
enum Platform {
    static func topViewController() -> UIViewController? {
        let scenes = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }
        let window = scenes.flatMap { $0.windows }.first { $0.isKeyWindow } ?? scenes.first?.windows.first
        var vc = window?.rootViewController
        while let p = vc?.presentedViewController, !p.isBeingDismissed { vc = p }
        return vc
    }

    static func openExternal(_ url: URL) {
        UIApplication.shared.open(url, options: [:], completionHandler: nil)
    }

    static func alert(_ message: String, completion: @escaping () -> Void) {
        guard let vc = topViewController() else { completion(); return }
        let a = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        a.addAction(UIAlertAction(title: "OK", style: .default) { _ in completion() })
        vc.present(a, animated: true)
    }

    static func confirm(_ message: String, completion: @escaping (Bool) -> Void) {
        guard let vc = topViewController() else { completion(false); return }
        let a = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        a.addAction(UIAlertAction(title: "Cancel", style: .cancel) { _ in completion(false) })
        a.addAction(UIAlertAction(title: "OK", style: .default) { _ in completion(true) })
        vc.present(a, animated: true)
    }

    static func prompt(_ message: String, defaultText: String?, completion: @escaping (String?) -> Void) {
        guard let vc = topViewController() else { completion(nil); return }
        let a = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        a.addTextField { tf in
            tf.text = defaultText
            tf.isSecureTextEntry = message.lowercased().contains("password")
        }
        a.addAction(UIAlertAction(title: "Cancel", style: .cancel) { _ in completion(nil) })
        a.addAction(UIAlertAction(title: "OK", style: .default) { _ in completion(a.textFields?.first?.text ?? "") })
        vc.present(a, animated: true)
    }

    /// iOS print sheet: printer, or share icon → Save to Files as PDF.
    static func print(_ webView: WKWebView, jobName: String) {
        let info = UIPrintInfo(dictionary: nil)
        info.jobName = jobName
        info.outputType = .general
        let pc = UIPrintInteractionController.shared
        pc.printInfo = info
        pc.printFormatter = webView.viewPrintFormatter()
        if UIDevice.current.userInterfaceIdiom == .pad {
            let r = CGRect(x: webView.bounds.midX, y: webView.bounds.minY + 40, width: 1, height: 1)
            pc.present(from: r, in: webView, animated: true, completionHandler: nil)
        } else {
            pc.present(animated: true, completionHandler: nil)
        }
    }

    /// Excel / CSV / PDF made by a page → share sheet ("Save to Files", Mail, WhatsApp…).
    static func save(data: Data, name: String, from view: UIView) {
        let dir = FileManager.default.temporaryDirectory.appendingPathComponent("IronMaking-\(UUID().uuidString)", isDirectory: true)
        let file = dir.appendingPathComponent(name)
        do {
            try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
            try data.write(to: file)
        } catch {
            alert("Could not save \(name): \(error.localizedDescription)") {}
            return
        }
        share([file], from: view)
    }

    static func shareText(_ text: String, from view: UIView) {
        share([text], from: view)
    }

    static func share(_ items: [Any], from view: UIView) {
        guard let vc = topViewController() else { return }
        let av = UIActivityViewController(activityItems: items, applicationActivities: nil)
        if let pop = av.popoverPresentationController {          // iPad
            pop.sourceView = view
            pop.sourceRect = CGRect(x: view.bounds.midX, y: view.bounds.midY, width: 1, height: 1)
            pop.permittedArrowDirections = []
        }
        vc.present(av, animated: true)
    }
}

#elseif os(macOS)
import AppKit

/// Mac: alerts, print dialog (with PDF ▸ Save as PDF), Save panel, open links in the default browser.
@MainActor
enum Platform {
    static func openExternal(_ url: URL) {
        NSWorkspace.shared.open(url)
    }

    static func alert(_ message: String, completion: @escaping () -> Void) {
        let a = NSAlert()
        a.messageText = "Iron Making"
        a.informativeText = message
        a.addButton(withTitle: "OK")
        a.runModal()
        completion()
    }

    static func confirm(_ message: String, completion: @escaping (Bool) -> Void) {
        let a = NSAlert()
        a.messageText = "Iron Making"
        a.informativeText = message
        a.addButton(withTitle: "OK")
        a.addButton(withTitle: "Cancel")
        completion(a.runModal() == .alertFirstButtonReturn)
    }

    static func prompt(_ message: String, defaultText: String?, completion: @escaping (String?) -> Void) {
        let a = NSAlert()
        a.messageText = "Iron Making"
        a.informativeText = message
        a.addButton(withTitle: "OK")
        a.addButton(withTitle: "Cancel")
        let secret = message.lowercased().contains("password")
        let field: NSTextField = secret ? NSSecureTextField(frame: NSRect(x: 0, y: 0, width: 280, height: 24))
                                        : NSTextField(frame: NSRect(x: 0, y: 0, width: 280, height: 24))
        field.stringValue = defaultText ?? ""
        a.accessoryView = field
        a.window.initialFirstResponder = field
        completion(a.runModal() == .alertFirstButtonReturn ? field.stringValue : nil)
    }

    static func print(_ webView: WKWebView, jobName: String) {
        guard let info = NSPrintInfo.shared.copy() as? NSPrintInfo else { return }
        info.horizontalPagination = .fit
        info.verticalPagination = .automatic
        info.isHorizontallyCentered = true
        info.isVerticallyCentered = false
        let op = webView.printOperation(with: info)
        op.jobTitle = jobName
        op.showsPrintPanel = true
        op.showsProgressPanel = true
        op.view?.frame = webView.bounds
        if let w = webView.window {
            op.runModal(for: w, delegate: nil, didRun: nil, contextInfo: nil)
        } else {
            op.run()
        }
    }

    static func save(data: Data, name: String, from view: NSView) {
        let p = NSSavePanel()
        p.nameFieldStringValue = name
        p.canCreateDirectories = true
        p.directoryURL = FileManager.default.urls(for: .downloadsDirectory, in: .userDomainMask).first
        let done: (NSApplication.ModalResponse) -> Void = { r in
            guard r == .OK, let url = p.url else { return }
            do {
                try data.write(to: url)
                NSWorkspace.shared.activateFileViewerSelecting([url])
            } catch {
                alert("Could not save \(name): \(error.localizedDescription)") {}
            }
        }
        if let w = view.window { p.beginSheetModal(for: w, completionHandler: done) } else { p.begin(completionHandler: done) }
    }

    static func shareText(_ text: String, from view: NSView) {
        let picker = NSSharingServicePicker(items: [text])
        picker.show(relativeTo: NSRect(x: view.bounds.midX, y: view.bounds.midY, width: 1, height: 1), of: view, preferredEdge: .minY)
    }
}
#endif
