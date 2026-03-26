<template>
  <section id="experience" class="section">
    <div class="container">
      <!-- Section header -->
      <span class="section-label">02 / Experience & Research</span>
      <h2 class="section-title">Where Theory Meets Practice</h2>
      <p class="section-subtitle">
        Professional roles and research contributions that shaped my engineering perspective.
      </p>

      <div class="exp-layout">
        <!-- Left: Work Experience -->
        <div class="exp-column">
          <h3 class="column-heading">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Professional Experience
          </h3>

          <div class="timeline">
            <div
              v-for="(item, idx) in experience"
              :key="item.id"
              class="timeline-item animate-fade-up"
              :class="`delay-${Math.min(idx + 1, 4)}`"
            >
              <!-- Timeline dot -->
              <div class="timeline-dot"></div>

              <div class="card timeline-card">
                <div class="exp-header">
                  <div>
                    <h4 class="exp-role">{{ item.role }}</h4>
                    <p class="exp-company">
                      {{ item.company }}
                      <span class="exp-location">— {{ item.location }}</span>
                    </p>
                  </div>
                  <span class="exp-period">{{ item.period }}</span>
                </div>

                <p class="exp-desc">{{ item.description }}</p>

                <ul class="achievement-list">
                  <li v-for="(ach, i) in item.achievements" :key="i" class="achievement-item">
                    <svg viewBox="0 0 16 16" fill="none" width="12" height="12" class="ach-icon">
                      <path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ ach }}
                  </li>
                </ul>

                <div class="exp-tech">
                  <span v-for="tech in item.tech" :key="tech" class="tag">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Research & Publications -->
        <div class="exp-column">
          <h3 class="column-heading">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Research & Publications
          </h3>

          <div class="publications-list">
            <div
              v-for="(pub, idx) in publications"
              :key="pub.id"
              class="card pub-card animate-fade-up"
              :class="`delay-${Math.min(idx + 1, 4)}`"
            >
              <!-- Type badge -->
              <span class="pub-type-badge" :class="pub.type">
                {{ pub.type === "paper" ? "Peer-reviewed" : "Technical Whitepaper" }}
              </span>

              <h4 class="pub-title">{{ pub.title }}</h4>

              <p class="pub-authors">{{ pub.authors }}</p>

              <p class="pub-venue">
                <em>{{ pub.venue }}</em>, {{ pub.year }}
              </p>

              <p class="pub-abstract">{{ pub.abstract }}</p>

              <div class="pub-footer">
                <div class="pub-tags">
                  <span v-for="tag in pub.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <a v-if="pub.doi" :href="pub.doi" target="_blank" rel="noopener" class="btn btn-ghost pub-doi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  View Paper
                </a>
              </div>
            </div>

            <!-- Placeholder if no publications yet -->
            <div v-if="publications.length === 0" class="card pub-placeholder">
              <p class="text-muted">
                Research in progress. Check back soon or visit my
                <a :href="social.github" target="_blank" rel="noopener">GitHub</a>
                for technical documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience, publications, social } from "../assets/data/portfolio.js";
</script>

<style scoped>
.exp-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.column-heading {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-subtle);
}

/* Timeline */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent-blue), transparent);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 6px;
  top: 1.4rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent-blue);
  border: 2px solid var(--bg-base);
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
  z-index: 1;
}

.timeline-card { padding: 1.25rem 1.5rem; }

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.exp-role {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}
.exp-company {
  font-size: 0.875rem;
  color: var(--text-secondary);
}
.exp-location {
  color: var(--text-muted);
  font-size: 0.82rem;
}
.exp-period {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.achievement-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
}
.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.83rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
.ach-icon {
  color: var(--accent-green);
  flex-shrink: 0;
  margin-top: 2px;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.5rem;
}

/* Publications */
.publications-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pub-card { padding: 1.5rem; }

.pub-type-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2em 0.65em;
  border-radius: 20px;
  margin-bottom: 0.85rem;
}
.pub-type-badge.paper {
  background: rgba(88, 166, 255, 0.10);
  color: var(--accent-blue);
  border: 1px solid rgba(88, 166, 255, 0.20);
}
.pub-type-badge.whitepaper {
  background: rgba(57, 197, 207, 0.10);
  color: var(--accent-cyan);
  border: 1px solid rgba(57, 197, 207, 0.20);
}

.pub-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
  line-height: 1.35;
}
.pub-authors {
  font-size: 0.82rem;
  color: var(--accent-blue);
  margin-bottom: 0.25rem;
}
.pub-venue {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.pub-abstract {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.pub-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.pub-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.pub-doi { font-size: 0.78rem; padding: 0.4rem 0.85rem; }

.pub-placeholder p { color: var(--text-muted); font-size: 0.9rem; }

/* Responsive */
@media (max-width: 900px) {
  .exp-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
