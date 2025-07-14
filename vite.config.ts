import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "ChatWidget",
      formats: ["es", "umd"],
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      // Bundle semua dependencies termasuk React
      external: [], // Tidak ada external dependencies
      output: {
        // Memastikan semua exports tersedia
        exports: "named",
        // Memastikan format ES module bekerja dengan baik
        format: "es",
        // Memastikan nama global untuk UMD
        globals: {},
      },
    },
    // Memastikan source maps tersedia untuk debugging
    sourcemap: true,
    // Memastikan minification tidak menghilangkan exports
    minify: "terser",
  },
});
