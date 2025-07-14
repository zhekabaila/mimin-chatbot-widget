export function injectStyle(): void {
  // Inject Tailwind CSS jika belum ada
  if (!document.getElementById("tailwind-cdn")) {
    const tw = document.createElement("script");
    tw.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
    tw.id = "tailwind-cdn";
    document.head.appendChild(tw);
  }
}
