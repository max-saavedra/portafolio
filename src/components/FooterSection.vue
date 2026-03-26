<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-mono">{{ personal.name }}</span>
        <span class="footer-sep">/</span>
        <span class="footer-tagline">{{ personal.tagline }}</span>
      </div>

      <div class="footer-right">
        <span class="footer-copy">
          Built with Vue 3 &amp; Vite &mdash; Hosted on GitHub Pages
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { personal } from "../assets/data/portfolio.js";
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.footer-mono {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-weight: 500;
}
.footer-sep {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.82rem;
}
.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-style: italic;
}

.footer-right {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .footer-inner { flex-direction: column; text-align: center; }
  .footer-tagline { display: none; }
}
</style>
