import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.OPENAI_SECRET_KEY": JSON.stringify("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"),
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}", // Untuk mencegah error process.env lain
    process: "{}", // Untuk mencegah error process
  },
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "ChatWidget",
      formats: ["es"],
      // fileName: (format) => `chat-widget.${format}.js`,
      fileName: `chat-widget`,
    },
    rollupOptions: {
      // Bundle SEMUA dependencies ke dalam satu file
      external: [], // Tidak ada external dependencies sama sekali
      output: {
        // Memastikan semua exports tersedia
        exports: "named",
        // Memastikan format ES module bekerja dengan baik

        globals: {},
        // Bundle semua dependencies ke dalam satu file
        inlineDynamicImports: true,
      },
    },
    // Memastikan source maps tersedia untuk debugging
    sourcemap: true,

    // Memastikan semua dependencies di-bundle
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
