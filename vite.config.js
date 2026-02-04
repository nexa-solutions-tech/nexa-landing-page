import react from "@vitejs/plugin-react";
import path from "path";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: { postcss: { plugins: [tailwind()] } },
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
