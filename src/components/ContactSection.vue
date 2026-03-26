<template>
  <section id="contact" class="section">
    <div class="container">
      <span class="section-label">08 / Contact & Personality</span>
      <h2 class="section-title">Let's Connect</h2>
      <p class="section-subtitle">
        Open to full-time roles, research collaborations, and interesting technical conversations.
      </p>

      <div class="contact-layout">
        <!-- Left: Email, phone, interests -->
        <div class="contact-info-col">

          <!-- Email block -->
          <div class="card contact-card animate-fade-up delay-1">
            <div class="contact-card-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Email</span>
            </div>
            <p class="contact-value">{{ personal.email }}</p>
            <button class="btn btn-ghost copy-btn" @click="copyEmail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              {{ copied ? "Copied!" : "Copy to clipboard" }}
            </button>
          </div>

          <!-- Phone numbers -->
          <div class="card contact-card animate-fade-up delay-2">
            <div class="contact-card-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
              </svg>
              <span>Phone</span>
            </div>
            <div class="phone-list">
              <div v-for="p in personal.phone" :key="p.label" class="phone-row">
                <span class="phone-label">{{ p.label }}</span>
                <span class="contact-value">{{ p.number }}</span>
              </div>
            </div>
          </div>

          <!-- Personal interests -->
          <div class="card contact-card interests-card animate-fade-up delay-3">
            <div class="contact-card-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Outside the Code</span>
            </div>
            <p class="interests-text">{{ personal.interests }}</p>
          </div>
        </div>

        <!-- Right: Profile + pet photos -->
        <div class="photos-col animate-fade-up delay-2">
          <div class="photos-grid">
            <!-- Profile photo -->
            <div class="photo-frame main-photo">
              <img
                :src="profilePhotoUrl"
                :alt="`${personal.name}`"
                class="about-photo"
                loading="lazy"
                @error="onProfileError"
              />
              <span class="photo-caption">Me</span>
            </div>
            <!-- Pet photo -->
            <div class="photo-frame pet-photo">
              <img
                :src="petPhotoUrl"
                :alt="`${personal.name}'s dog`"
                class="about-photo"
                loading="lazy"
                @error="onPetError"
              />
              <span class="photo-caption">My companion</span>
            </div>
          </div>

          <!-- Location badge -->
          <div class="location-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {{ personal.location }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { personal } from "../assets/data/portfolio.js";

const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText(personal.email).then(() => {
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2500);
  });
}

const profilePhotoUrl = computed(() => {
  try {
    return new URL(`../assets/profile/${personal.profilePhoto}`, import.meta.url).href;
  } catch {
    return "https://placehold.co/360x420/0d1117/58a6ff?text=Me";
  }
});

const petPhotoUrl = computed(() => {
  try {
    return new URL(`../assets/profile/${personal.petPhoto}`, import.meta.url).href;
  } catch {
    return "https://placehold.co/360x420/0d1117/3fb950?text=Pet";
  }
});

function onProfileError(e) {
  e.target.src = "https://placehold.co/360x420/0d1117/58a6ff?text=Me";
}
function onPetError(e) {
  e.target.src = "https://placehold.co/360x420/0d1117/3fb950?text=Pet";
}
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Info column */
.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-card {
  padding: 1.5rem;
}

.contact-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.contact-value {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.85rem;
  word-break: break-all;
}

.copy-btn {
  font-size: 0.8rem;
  padding: 0.4rem 0.85rem;
  width: fit-content;
  transition: all var(--transition-normal);
}

.phone-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.phone-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.phone-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  min-width: 72px;
}
.phone-row .contact-value {
  margin-bottom: 0;
  font-size: 0.9rem;
}

.interests-card {}
.interests-text {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.7;
  font-style: italic;
}

/* Photos column */
.photos-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.photos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
}

.photo-frame {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-default);
  aspect-ratio: 3/4;
  background: var(--bg-elevated);
}
.photo-frame:first-child {
  aspect-ratio: 3/4;
}

.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.photo-frame:hover .about-photo {
  transform: scale(1.04);
}

.photo-caption {
  position: absolute;
  bottom: 0.6rem;
  left: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .photos-col { order: -1; }
  .photos-grid { max-width: 380px; margin: 0 auto; }
}
</style>
