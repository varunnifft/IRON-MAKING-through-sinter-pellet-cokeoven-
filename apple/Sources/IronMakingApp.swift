// Iron Making for iPhone, iPad and Mac.
// Designed & developed by Niteen Kumar.
// Shows the same pages as the Android app (bundled from ../app), offline, in a native web view.
import SwiftUI
import WebKit

@main
struct IronMakingApp: App {
    #if os(macOS)
    @NSApplicationDelegateAdaptor(MacAppDelegate.self) var appDelegate
    #endif
    @StateObject private var web = WebModel()

    var body: some Scene {
        #if os(macOS)
        Window("Iron Making", id: "main") {
            ContentView(web: web)
                .frame(minWidth: 380, minHeight: 560)
        }
        .defaultSize(width: 1280, height: 860)
        .commands { IMCommands(web: web) }
        #else
        WindowGroup {
            ContentView(web: web)
        }
        #endif
    }
}

#if os(macOS)
final class MacAppDelegate: NSObject, NSApplicationDelegate {
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }
}
#endif

struct ContentView: View {
    @ObservedObject var web: WebModel

    var body: some View {
        ZStack {
            IM.background.ignoresSafeArea()
            WebViewHost(webView: web.webView)
        }
        .sheet(item: $web.popup) { p in
            PopupSheet(popup: p, web: web)
        }
        .onOpenURL { url in
            if let to = IM.mapAppLink(url) { web.load(to) }
        }
    }
}

/// Pages opened with window.open() for a report preview (blob / about:blank): shown in a sheet with Close and Print.
struct PopupSheet: View {
    let popup: Popup
    @ObservedObject var web: WebModel

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Button("Close") { web.popup = nil }
                Spacer()
                Button {
                    Platform.print(popup.webView, jobName: popup.webView.title ?? "Iron Making")
                } label: {
                    Label("Print / PDF", systemImage: "printer")
                }
            }
            .padding(10)
            Divider()
            WebViewHost(webView: popup.webView)
        }
        #if os(macOS)
        .frame(minWidth: 820, minHeight: 620)
        #endif
    }
}

#if os(iOS)
struct WebViewHost: UIViewRepresentable {
    let webView: WKWebView
    func makeUIView(context: Context) -> WKWebView { webView }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}
#else
struct WebViewHost: NSViewRepresentable {
    let webView: WKWebView
    func makeNSView(context: Context) -> WKWebView { webView }
    func updateNSView(_ nsView: WKWebView, context: Context) {}
}

/// Mac menu bar, same as the Windows / Mac Electron build.
struct IMCommands: Commands {
    let web: WebModel

    var body: some Commands {
        CommandGroup(replacing: .newItem) {}
        CommandGroup(replacing: .printItem) {
            Button("Print… (Save as PDF from the print dialog)") { web.printPage() }
                .keyboardShortcut("p")
        }
        CommandMenu("Go") {
            Button("Iron Making home") { web.go("www/index.html") }
                .keyboardShortcut("h", modifiers: [.command, .shift])
            Button("BF Model") { web.go("www/bf-home.html") }.keyboardShortcut("1")
            Button("Sinter Predict") { web.go("index.html") }.keyboardShortcut("2")
            Button("Coke Making") { web.go("xco/index.html") }.keyboardShortcut("3")
            Button("Sinter critical decisions (3D)") { web.go("sinter-critical.html") }
            Button("Coke oven critical decisions (3D)") { web.go("xco/coke-critical.html") }
            Button("Carbon footprint (CBAM)") { web.go("www/carbon.html") }.keyboardShortcut("4")
            Button("BF cost optimiser") { web.go("www/cost-optimiser.html") }.keyboardShortcut("5")
            Button("Critical situation plan") { web.go("www/critical-situations.html") }.keyboardShortcut("6")
            Button("Check your taphole (3D)") { web.go("www/taphole.html") }.keyboardShortcut("7")
            Button("Tuyere watch") { web.go("www/tuyere-watch.html") }.keyboardShortcut("8")
            Button("Water cooling requirement") { web.go("www/cooling-water.html") }.keyboardShortcut("9")
            Divider()
            Button("Back") { web.back() }.keyboardShortcut("[")
            Button("Forward") { web.forward() }.keyboardShortcut("]")
            Button("Reload") { web.webView.reload() }.keyboardShortcut("r")
        }
        CommandGroup(after: .toolbar) {
            Button("Actual size") { web.webView.pageZoom = 1 }.keyboardShortcut("0")
            Button("Zoom in") { web.webView.pageZoom = min(3, web.webView.pageZoom + 0.1) }.keyboardShortcut("=")
            Button("Zoom out") { web.webView.pageZoom = max(0.5, web.webView.pageZoom - 0.1) }.keyboardShortcut("-")
        }
    }
}
#endif
