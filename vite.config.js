import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Set the base to your GitHub repository name for GitHub Pages.
// Example: if your repo is github.com/username/portfolio, set base to "/portfolio/"
// For a user/org page (username.github.io), set base to "/"
export default defineConfig({
  plugins: [vue()],
  base: "/", // Change this to match your GitHub repo name
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
