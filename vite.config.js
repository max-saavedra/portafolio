import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [vue()],

  // Base path must match your GitHub repository name
  // Local: "/"
  // Production: "/portafolio/"
  base: process.env.NODE_ENV === "production" ? "/portafolio/" : "/",

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});