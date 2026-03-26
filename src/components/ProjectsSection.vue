<template>
  <section id="projects" class="section projects-bg">
    <div class="container">
      <span class="section-label">03 / Engineering Excellence</span>
      <h2 class="section-title">Selected Projects</h2>
      <p class="section-subtitle">
        Chosen for architectural depth. Each project reflects a deliberate design
        decision, not just a working implementation.
      </p>

      <div class="projects-grid">
        <article
          v-for="(project, idx) in featuredProjects"
          :key="project.id"
          class="card project-card animate-fade-up"
          :class="`delay-${Math.min(idx + 1, 4)}`"
        >
          <!-- Card top bar with project number -->
          <div class="project-top">
            <span class="project-num">{{ String(idx + 1).padStart(2, "0") }}</span>
            <div class="project-links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="btn btn-ghost link-btn"
                :aria-label="`${project.name} source code`"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Code
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="btn btn-primary link-btn"
                :aria-label="`${project.name} live demo`"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Demo
              </a>
            </div>
          </div>

          <h3 class="project-name">{{ project.name }}</h3>

          <!-- "Why" context — the insight -->
          <blockquote class="project-why">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" class="why-icon">
              <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9z" clip-rule="evenodd"/>
            </svg>
            {{ project.why }}
          </blockquote>

          <p class="project-desc">{{ project.description }}</p>

          <!-- Tech stack tags -->
          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
          </div>
        </article>
      </div>

      <!-- View all on GitHub -->
      <div class="projects-footer animate-fade-up delay-4">
        <a :href="social.github" target="_blank" rel="noopener" class="btn btn-ghost">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          View all repositories on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { projects, social } from "../assets/data/portfolio.js";

// Only show featured projects (3-4 max)
const featuredProjects = computed(() =>
  projects.filter((p) => p.featured).slice(0, 4)
);
</script>

<style scoped>
.projects-bg {
  background: linear-gradient(to bottom, transparent, var(--bg-surface), transparent);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 460px), 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.75rem;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

.project-links {
  display: flex;
  gap: 0.5rem;
}
.link-btn {
  font-size: 0.78rem;
  padding: 0.35rem 0.85rem;
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-primary);
  line-height: 1.2;
}

/* Context quote */
.project-why {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.83rem;
  color: var(--accent-cyan);
  border-left: 2px solid var(--accent-cyan);
  padding: 0.5rem 0.85rem;
  background: rgba(57, 197, 207, 0.05);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
  line-height: 1.55;
  margin: 0;
}
.why-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--accent-cyan);
}

.project-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}

.projects-footer {
  text-align: center;
  padding-top: 1rem;
}
</style>
