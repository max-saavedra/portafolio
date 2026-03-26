<template>
  <section id="hero" class="hero-section section">
    <!-- Radial hero glow -->
    <div class="hero-glow" aria-hidden="true"></div>

    <div class="container hero-container">
      <!-- Text side -->
      <div class="hero-text">
        <span class="hero-eyebrow animate-fade-up delay-1">
          <span class="dot"></span>
          Available for opportunities
        </span>

        <h1 class="hero-name animate-fade-up delay-1">
          {{ personal.name }}
        </h1>

        <div class="hero-title animate-fade-up delay-2">
          <span class="title-main">{{ personal.title }}</span>
          <span class="title-sep"> / </span>
          <span class="title-spec">{{ personal.specialization }}</span>
        </div>

        <p class="hero-bio animate-fade-up delay-3">
          {{ personal.tagline }}
        </p>

        <p class="hero-university animate-fade-up delay-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          {{ personal.university }} — {{ personal.degree }}, {{ personal.graduationYear }}
        </p>

        <!-- CTA buttons -->
        <div class="hero-cta animate-fade-up delay-4">
          <a :href="personal.cvFile" target="_blank" rel="noopener" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <!-- Social links row -->
        <div class="hero-socials animate-fade-up delay-4">
          <a :href="social.github" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a :href="social.linkedin" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="social.facebook" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a :href="social.instagram" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a :href="social.orcid" target="_blank" rel="noopener" class="social-link" aria-label="ORCID">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Profile photo side -->
      <div class="hero-visual animate-fade-up delay-2">
        <div class="profile-frame">
          <div class="profile-ring"></div>
          <img
            :src="profilePhotoUrl"
            :alt="`${personal.name} profile photo`"
            class="profile-img"
            loading="eager"
            @error="onImgError"
          />
        </div>
        <!-- Decorative status badge -->
        <div class="status-badge">
          <span class="status-dot pulse"></span>
          <span>Open to work</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint animate-fade-up delay-4" aria-hidden="true">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { personal, social } from "../assets/data/portfolio.js";

// Build asset URL for profile photo
const profilePhotoUrl = computed(() => {
  try {
    // Vite dynamic import for assets in /src/assets/profile/
    return new URL(`../assets/profile/${personal.profilePhoto}`, import.meta.url).href;
  } catch {
    return "https://placehold.co/320x320/0d1117/58a6ff?text=SE";
  }
});

function onImgError(e) {
  e.target.src = "https://placehold.co/320x320/0d1117/58a6ff?text=SE";
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}
</script>

<style scoped>
.hero-section {
  padding-top: calc(var(--nav-h) + clamp(3rem, 6vw, 6rem));
  padding-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  overflow: hidden;
}

/* Hero background glow */
.hero-glow {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 500px;
  background: var(--gradient-hero);
  pointer-events: none;
  z-index: 0;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Text */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--accent-green);
  margin-bottom: 1.5rem;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 1.5rem;
}
.title-main { color: var(--text-secondary); font-weight: 500; }
.title-sep  { color: var(--text-muted); padding: 0 0.4rem; }
.title-spec { color: var(--accent-cyan); font-weight: 500; }

.hero-bio {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 1rem;
}

.hero-university {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

/* Social links */
.hero-socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-normal);
}
.social-link:hover {
  background: var(--bg-card);
  border-color: var(--accent-blue);
  color: var(--accent-blue);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Profile visual */
.hero-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-frame {
  position: relative;
  width: clamp(200px, 20vw, 280px);
  height: clamp(200px, 20vw, 280px);
}

.profile-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(from 180deg, var(--accent-blue), var(--accent-cyan), var(--accent-blue));
  animation: spin 8s linear infinite;
  opacity: 0.6;
}
@keyframes spin { to { transform: rotate(360deg); } }

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid var(--bg-base);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--accent-green);
  background: rgba(63, 185, 80, 0.08);
  border: 1px solid rgba(63, 185, 80, 0.2);
  padding: 0.35em 0.85em;
  border-radius: 20px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-green);
}
.status-dot.pulse {
  animation: pulse-green 2s ease infinite;
}
@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(63, 185, 80, 0.6); }
  50%       { box-shadow: 0 0 0 5px rgba(63, 185, 80, 0); }
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--accent-blue), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(1.2); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-visual { order: -1; margin: 0 auto; }
  .hero-bio, .hero-university, .hero-cta, .hero-socials { justify-content: center; }
  .profile-frame { width: 160px; height: 160px; }
  .scroll-hint { display: none; }
}
</style>
