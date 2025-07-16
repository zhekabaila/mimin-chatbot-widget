export function injectStyle(): void {
  // Inject Tailwind CSS jika belum ada
  if (!document.getElementById("mimin-chatbot-widget-css")) {
    const tw = document.createElement("link");
    tw.rel = "stylesheet";
    tw.href =
      "https://unpkg.com/mimin-chatbot-widget-react@latest/dist/chat-widget.css";
    tw.id = "mimin-chatbot-widget-css";
    document.head.appendChild(tw);
  }
}
