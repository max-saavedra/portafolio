<template>
  <!-- Sticky navigation with blur backdrop -->
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container navbar-inner">
      <!-- Logo / monogram -->
      <a href="#hero" class="navbar-logo" @click.prevent="scrollTo('hero')">
        <span class="logo-mono">SE</span>
      </a>

      <!-- Desktop navigation links -->
      <nav class="navbar-links" aria-label="Main navigation">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Right-side controls -->
      <div class="navbar-controls">
        <!-- Theme toggle button -->
        <button
          class="btn-icon theme-toggle"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
          @click="$emit('toggle-theme')"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          aria-label="Toggle mobile menu"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <nav class="mobile-menu" :class="{ open: menuOpen }" aria-label="Mobile navigation">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="mobile-link"
        :class="{ active: activeSection === item.id }"
        @click.prevent="mobileScrollTo(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  theme: { type: String, default: "dark" },
});

defineEmits(["toggle-theme"]);

const isScrolled = ref(false);
const menuOpen = ref(false);
const activeSection = ref("hero");

const navItems = [
  { id: "hero",         label: "Home"        },
  { id: "experience",   label: "Experience"  },
  { id: "projects",     label: "Projects"    },
  { id: "skills",       label: "Skills"      },
  { id: "blog",         label: "Blog"        },
  { id: "events",       label: "Events"      },
  { id: "social-proof", label: "References"  },
  { id: "contact",      label: "Contact"     },
];

// Smooth scroll to section
function scrollTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = 72; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function mobileScrollTo(id) {
  menuOpen.value = false;
  setTimeout(() => scrollTo(id), 150);
}

// Track scroll position for navbar background and active section
function onScroll() {
  isScrolled.value = window.scrollY > 40;

  // Determine which section is in view
  const sections = navItems.map((item) => ({
    id: item.id,
    el: document.getElementById(item.id),
  }));

  const scrollY = window.scrollY + 120;
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = sections[i].el;
    if (el && el.offsetTop <= scrollY) {
      activeSection.value = sections[i].id;
      break;
    }
  }
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar.scrolled {
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
}

.navbar-inner {
  display: flex;
  align-items: center;
  height: var(--nav-h);
  gap: 2rem;
}

/* Logo monogram */
.navbar-logo {
  flex-shrink: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.logo-mono {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  padding: 0.3em 0.55em;
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-fast), color var(--transition-fast);
}
.navbar-logo:hover .logo-mono {
  border-color: var(--accent-blue);
  color: var(--accent-blue);
}

/* Desktop nav links */
.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-elevated);
  border-color: var(--border-subtle);
}
.nav-link.active {
  color: var(--accent-blue);
  background: rgba(88, 166, 255, 0.08);
  border-color: rgba(88, 166, 255, 0.18);
}

/* Controls (right side) */
.navbar-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.theme-toggle {
  width: 36px;
  height: 36px;
}

/* Hamburger (mobile only) */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 0;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all var(--transition-fast);
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu drawer */
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--border-subtle);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}
.mobile-menu.open {
  max-height: 400px;
}

.mobile-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all var(--transition-fast);
}
.mobile-link:hover,
.mobile-link.active {
  color: var(--accent-blue);
  background: rgba(88, 166, 255, 0.08);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar-links { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
  .navbar.menu-open { background: var(--bg-glass); backdrop-filter: blur(16px); }
}
</style>
