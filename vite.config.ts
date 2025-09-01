import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    minify: false,
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-dom/client",
        "react-rnd",
        "pdfjs-dist",
        "pdfjs-dist/web/pdf_viewer.mjs",
        "pdfjs-dist/legacy/web/pdf_viewer.mjs",
        "pdfjs-dist/types/web/pdf_viewer",
        "ts-debounce",
      ],
    },
  },
});
