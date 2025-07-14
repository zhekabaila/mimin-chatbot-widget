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
      // Hapus external untuk React dan ReactDOM agar di-bundle
      // external: ["react", "react-dom"],
      output: {
        // Hapus globals karena React akan di-bundle
        // globals: {
        //   react: "React",
        //   "react-dom": "ReactDOM",
        // },
        // Memastikan external modules di-resolve dengan benar
        exports: "named",
      },
    },
    // Memastikan source maps tersedia untuk debugging
    sourcemap: true,
  },
});
