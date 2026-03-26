<template>
  <section id="blog" class="section blog-bg">
    <div class="container">
      <span class="section-label">05 / Thought Leadership</span>
      <h2 class="section-title">Writing & Analysis</h2>
      <p class="section-subtitle">
        Engineering insights, deep dives into technical challenges, and
        reflections on where the industry is headed.
      </p>

      <div class="blog-grid">
        <a
          v-for="(post, idx) in blogPosts"
          :key="post.id"
          :href="post.url"
          target="_blank"
          rel="noopener"
          class="card blog-card animate-fade-up"
          :class="`delay-${Math.min(idx + 1, 4)}`"
        >
          <!-- Top meta -->
          <div class="blog-meta">
            <time class="blog-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span class="blog-read">{{ post.readTime }}</span>
          </div>

          <h3 class="blog-title">{{ post.title }}</h3>
          <p class="blog-summary">{{ post.summary }}</p>

          <!-- Tags -->
          <div class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <!-- Read more indicator -->
          <div class="blog-cta">
            <span>Read on Blogger</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>
      </div>

      <!-- Link to all posts -->
      <div class="blog-footer animate-fade-up delay-4">
        <p class="blog-footer-text">
          More articles available on my Blogger.
        </p>
        <a
          v-if="blogPosts.length > 0"
          :href="blogBloggerUrl"
          target="_blank"
          rel="noopener"
          class="btn btn-ghost"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M21.976 24H2.026C.908 24 0 23.092 0 21.976V2.026C0 .908.908 0 2.026 0h19.95C23.094 0 24 .908 24 2.026v19.95C24 23.092 23.092 24 21.976 24zM7.69 6.386c-.46 0-.833.373-.833.833s.373.833.833.833h2.982v1.94H8.523c-.46 0-.833.373-.833.833v4.99c0 .46.373.833.833.833h6.954c.46 0 .833-.373.833-.833V10.825c0-.46-.373-.833-.833-.833h-2.149V8.052h2.982c.46 0 .833-.373.833-.833s-.373-.833-.833-.833H7.69z"/>
          </svg>
          Visit my Blogger
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { blogPosts } from "../assets/data/portfolio.js";

// Extract base Blogger URL from the first post URL
const blogBloggerUrl = computed(() => {
  if (!blogPosts.length) return "#";
  try {
    const url = new URL(blogPosts[0].url);
    return `${url.protocol}//${url.hostname}`;
  } catch {
    return "#";
  }
});

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
</script>

<style scoped>
.blog-bg {
  background: linear-gradient(to bottom, transparent, var(--bg-surface), transparent);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);
}
.blog-card:hover {
  border-color: rgba(88, 166, 255, 0.35);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}
.blog-read {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent-cyan);
  background: rgba(57, 197, 207, 0.08);
  border: 1px solid rgba(57, 197, 207, 0.15);
  padding: 0.15em 0.55em;
  border-radius: 20px;
}

.blog-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text-primary);
  line-height: 1.3;
}
.blog-card:hover .blog-title {
  color: var(--accent-blue);
}

.blog-summary {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.blog-cta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-blue);
  margin-top: auto;
  opacity: 0;
  transform: translateX(-8px);
  transition: all var(--transition-normal);
}
.blog-card:hover .blog-cta {
  opacity: 1;
  transform: translateX(0);
}

.blog-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}
.blog-footer-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
