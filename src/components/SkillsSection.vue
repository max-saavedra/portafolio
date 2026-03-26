<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="section-label">04 / Technical Arsenal</span>
      <h2 class="section-title">Skills & Certifications</h2>
      <p class="section-subtitle">
        Organized by domain. Each certification represents a verified and
        practised competency, not just a badge collected.
      </p>

      <div class="skills-layout">
        <!-- Left: Skills by domain -->
        <div>
          <h3 class="column-heading">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            Languages & Tools
          </h3>

          <div class="domains-list">
            <div
              v-for="(tools, domain) in skills"
              :key="domain"
              class="domain-block animate-fade-up"
            >
              <div class="domain-label">{{ domain }}</div>
              <div class="tools-row">
                <span v-for="tool in tools" :key="tool" class="skill-pill">{{ tool }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Certifications -->
        <div>
          <h3 class="column-heading">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Certifications & Badges
          </h3>

          <div class="cert-list">
            <div
              v-for="(cert, idx) in certifications"
              :key="cert.id"
              class="card cert-card animate-fade-up"
              :class="`delay-${Math.min(idx + 1, 4)}`"
            >
              <!-- Logo -->
              <div class="cert-logo-wrap">
                <img
                  v-if="cert.logo"
                  :src="cert.logo"
                  :alt="`${cert.issuer} logo`"
                  class="cert-logo"
                  loading="lazy"
                />
                <div v-else class="cert-logo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
              </div>

              <div class="cert-info">
                <h4 class="cert-name">{{ cert.name }}</h4>
                <p class="cert-meta">{{ cert.issuer }} &middot; {{ cert.year }}</p>
              </div>

              <div class="cert-actions">
                <a
                  v-if="cert.file"
                  :href="cert.file"
                  target="_blank"
                  rel="noopener"
                  class="btn-icon"
                  :aria-label="`Download ${cert.name} certificate`"
                  title="View certificate"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
                <a
                  v-if="cert.verify"
                  :href="cert.verify"
                  target="_blank"
                  rel="noopener"
                  class="btn-icon"
                  :aria-label="`Verify ${cert.name}`"
                  title="Verify badge"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Placeholder -->
            <div v-if="certifications.length === 0" class="cert-empty">
              <p>Certifications will appear here once added to portfolio.js.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills, certifications } from "../assets/data/portfolio.js";
</script>

<style scoped>
.skills-layout {
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

/* Domains */
.domains-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.domain-block {}

.domain-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.tools-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-pill {
  font-family: var(--font-mono);
  font-size: 0.775rem;
  padding: 0.28em 0.7em;
  border-radius: 20px;
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border: 1px solid var(--border-default);
  transition: all var(--transition-fast);
}
.skill-pill:hover {
  background: rgba(88, 166, 255, 0.08);
  color: var(--accent-blue);
  border-color: rgba(88, 166, 255, 0.25);
}

/* Certifications */
.cert-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cert-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
}

.cert-logo-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-logo {
  max-width: 48px;
  max-height: 32px;
  object-fit: contain;
  filter: none;
}
[data-theme="dark"] .cert-logo {
  filter: brightness(0.9) saturate(0.85);
}

.cert-logo-placeholder {
  color: var(--text-muted);
}

.cert-info {
  flex: 1;
  min-width: 0;
}
.cert-name {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cert-meta {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.cert-actions {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.cert-empty p {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-style: italic;
}

/* Responsive */
@media (max-width: 900px) {
  .skills-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
