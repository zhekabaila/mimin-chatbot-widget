export function injectStyle(): void {
  // Inject Tailwind CSS jika belum ada
  if (!document.getElementById("tailwind-cdn")) {
    const tw = document.createElement("script");
    tw.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
    tw.id = "tailwind-cdn";
    document.head.appendChild(tw);
  }

  // Inject FontAwesome jika belum ada
  if (!document.getElementById("fa-cdn")) {
    const fa = document.createElement("link");
    fa.rel = "stylesheet";
    fa.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fa.id = "fa-cdn";
    document.head.appendChild(fa);
  }
}
