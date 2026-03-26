<template>
  <section id="events" class="section">
    <div class="container">
      <span class="section-label">06 / Community & Speaking</span>
      <h2 class="section-title">Events & Speaking</h2>
      <p class="section-subtitle">
        Staying connected with the global engineering community — as a participant,
        speaker, and organizer.
      </p>

      <div class="events-grid">
        <div
          v-for="(event, idx) in events"
          :key="event.id"
          class="event-card card animate-fade-up"
          :class="`delay-${Math.min(idx + 1, 4)}`"
        >
          <!-- Event photo -->
          <div class="event-photo-wrap">
            <img
              :src="getEventPhoto(event.photo)"
              :alt="`${event.name} photo`"
              class="event-photo"
              loading="lazy"
              @error="onImgError"
            />
            <!-- Role badge overlaid on photo -->
            <span class="event-role-badge" :class="event.role.toLowerCase()">
              {{ event.role }}
            </span>
          </div>

          <div class="event-body">
            <div class="event-meta">
              <span class="event-date">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {{ event.date }}
              </span>
              <span class="event-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ event.location }}
              </span>
            </div>

            <h3 class="event-name">{{ event.name }}</h3>
            <p class="event-desc">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { events } from "../assets/data/portfolio.js";

function getEventPhoto(filename) {
  if (!filename) return "https://placehold.co/600x340/0d1117/334155?text=Event";
  try {
    return new URL(`../assets/events/${filename}`, import.meta.url).href;
  } catch {
    return "https://placehold.co/600x340/0d1117/334155?text=Event";
  }
}

function onImgError(e) {
  e.target.src = "https://placehold.co/600x340/0d1117/334155?text=Event";
}
</script>

<style scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 1.5rem;
}

.event-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Photo */
.event-photo-wrap {
  position: relative;
  width: 100%;
  /* Preserve aspect ratio, fill available width */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-elevated);
}

.event-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  display: block;
}
.event-card:hover .event-photo {
  transform: scale(1.04);
}

/* Overlay gradient on photo */
.event-photo-wrap::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, var(--bg-card), transparent);
  pointer-events: none;
}

.event-role-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25em 0.7em;
  border-radius: 20px;
  font-weight: 500;
}
.event-role-badge.attendee {
  background: rgba(88, 166, 255, 0.85);
  color: #fff;
}
.event-role-badge.speaker {
  background: rgba(57, 197, 207, 0.90);
  color: #0d1117;
}
.event-role-badge.organizer,
.event-role-badge.organizer\ \&\ speaker {
  background: rgba(210, 153, 34, 0.90);
  color: #0d1117;
}

.event-role-badge.volunteer {
  background: rgba(46, 160, 67, 0.90); /* green */
  color: #fff;
}

.event-role-badge.participant {
  background: rgba(139, 92, 246, 0.90); /* purple */
  color: #fff;
}

.event-role-badge.organizer-speaker {
  background: rgba(210, 153, 34, 0.90);
  color: #0d1117;
}

/* Body */
.event-body {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.event-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.event-date,
.event-location {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.event-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.event-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* Responsive */
@media (max-width: 640px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
