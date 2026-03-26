<template>
  <!-- Theme wrapper: data-theme attribute drives CSS custom properties -->
  <div :data-theme="theme" id="app-root">
    <!-- Background decorative elements -->
    <div class="bg-grid" aria-hidden="true"></div>

    <NavBar :theme="theme" @toggle-theme="toggleTheme" />

    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <EventsSection />
      <SocialProofSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import BlogSection from "./components/BlogSection.vue";
import EventsSection from "./components/EventsSection.vue";
import SocialProofSection from "./components/SocialProofSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

// Persist theme preference in localStorage
const THEME_KEY = "portfolio-theme";

const theme = ref("dark");

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

// Apply theme to document root so global.css tokens activate
watch(theme, (val) => {
  document.documentElement.setAttribute("data-theme", val);
  localStorage.setItem(THEME_KEY, val);
});

onMounted(() => {
  // Load saved preference or detect system preference
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    theme.value = saved;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    theme.value = "light";
  }
  document.documentElement.setAttribute("data-theme", theme.value);
});
</script>

<style>
/* Scoped to app-root — the main layout container */
#app-root {
  min-height: 100vh;
  position: relative;
  background-color: var(--bg-base);
  transition: background-color var(--transition-slow);
}

/* Subtle dot-grid background pattern */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, var(--border-subtle) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

main {
  position: relative;
  z-index: 1;
}
</style>
