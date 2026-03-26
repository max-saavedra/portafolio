import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/portafolio/", // ← ESTE ES EL FIX CLAVE
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});