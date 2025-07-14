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
      // Bundle SEMUA dependencies ke dalam satu file
      external: [], // Tidak ada external dependencies sama sekali
      output: {
        // Memastikan semua exports tersedia
        exports: "named",
        // Memastikan format ES module bekerja dengan baik
        format: "es",
        // Memastikan nama global untuk UMD
        globals: {},
        // Bundle semua dependencies ke dalam satu file
        inlineDynamicImports: true,
      },
    },
    // Memastikan source maps tersedia untuk debugging
    sourcemap: true,
    // Memastikan minification tidak menghilangkan exports
    minify: "terser",
    // Memastikan semua dependencies di-bundle
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
