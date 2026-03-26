<template>
  <section id="social-proof" class="section social-bg">
    <div class="container">
      <span class="section-label">07 / Social Proof</span>
      <h2 class="section-title">References & Endorsements</h2>
      <p class="section-subtitle">
        Words from the people I have worked alongside.
      </p>

      <!-- Testimonials -->
      <div class="testimonials-grid">
        <figure
          v-for="(t, idx) in testimonials"
          :key="t.id"
          class="card testimonial-card animate-fade-up"
          :class="`delay-${Math.min(idx + 1, 4)}`"
        >
          <svg class="quote-mark" viewBox="0 0 40 40" fill="none" width="36" height="36" aria-hidden="true">
            <path d="M10 28c0-4.4 3.6-8 8-8h2l-3 8h-7zm14 0c0-4.4 3.6-8 8-8h2l-3 8h-7z" fill="currentColor" opacity="0.15"/>
          </svg>

          <blockquote class="testimonial-quote">
            "{{ t.quote }}"
          </blockquote>

          <figcaption class="testimonial-author">
            <!-- Avatar -->
            <div class="author-avatar">
              <img
                v-if="t.avatar"
                :src="getAvatarUrl(t.avatar)"
                :alt="t.name"
                loading="lazy"
                @error="onAvatarError"
              />
              <div v-else class="avatar-initials">{{ getInitials(t.name) }}</div>
            </div>
            <div class="author-info">
              <span class="author-name">{{ t.name }}</span>
              <span class="author-title">{{ t.title }}</span>
            </div>
          </figcaption>
        </figure>
      </div>

      <!-- Endorsements / Company logos -->
      <div class="endorsements-section animate-fade-up delay-3">
        <p class="endorsements-label">Collaborated with & contributed to</p>

        <!-- Infinite scroll marquee -->
        <div class="marquee-wrapper" aria-label="Organizations">
          <div class="marquee-track">
            <!-- Doubled for seamless loop -->
            <div class="marquee-row">
              <a
                v-for="(org, idx) in [...endorsements, ...endorsements]"
                :key="`org-${idx}`"
                :href="org.url"
                target="_blank"
                rel="noopener"
                class="org-logo-wrap"
                :aria-label="org.name"
              >
                <img
                  :src="org.logo"
                  :alt="org.name"
                  class="org-logo"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials, endorsements } from "../assets/data/portfolio.js";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getAvatarUrl(path) {
  try {
    return new URL(`../assets/profile/${path}`, import.meta.url).href;
  } catch {
    return "";
  }
}

function onAvatarError(e) {
  e.target.style.display = "none";
}
</script>

<style scoped>
.social-bg {
  background: linear-gradient(to bottom, transparent, var(--bg-surface), transparent);
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 420px), 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  padding: 2rem;
  position: relative;
}

.quote-mark {
  color: var(--accent-blue);
  margin-bottom: 0.75rem;
}

.testimonial-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
}
.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-initials {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-blue);
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.author-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}
.author-title {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Endorsements marquee */
.endorsements-section {
  border-top: 1px solid var(--border-subtle);
  padding-top: 2.5rem;
}

.endorsements-label {
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.marquee-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee-track {
  overflow: hidden;
}

.marquee-row {
  display: flex;
  gap: 3rem;
  align-items: center;
  animation: marquee 20s linear infinite;
  width: max-content;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.marquee-row:hover {
  animation-play-state: paused;
}

.org-logo-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.55;
  transition: opacity var(--transition-normal);
  text-decoration: none;
}
.org-logo-wrap:hover { opacity: 1; }

.org-logo {
  max-height: 30px;
  max-width: 100px;
  object-fit: contain;
  filter: grayscale(1);
  transition: filter var(--transition-normal);
}
.org-logo-wrap:hover .org-logo {
  filter: grayscale(0);
}

/* Responsive */
@media (max-width: 640px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}
</style>
