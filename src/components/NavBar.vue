<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo">
        <img src="/piyc-logo.png" alt="PIYC Logo" class="logo-img" />
      </router-link>

      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="/#about" @click="menuOpen = false">About</a>
        <a href="/#events" @click="menuOpen = false">Events</a>
        <a href="/#impact" @click="menuOpen = false">Impact</a>
        <router-link to="/board" @click="menuOpen = false">Board</router-link>
        <router-link to="/join" class="nav-cta" @click="menuOpen = false">Get Involved</router-link>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 12px 0;
}

.navbar.scrolled {
  background: rgba(245, 244, 232, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
  padding: 8px 0;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
  border-radius: 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-dark);
  transition: color 0.2s;
  letter-spacing: 0.2px;
  text-decoration: none;
}

.nav-links a:hover { color: var(--orange); }

.nav-cta {
  background: var(--orange);
  color: var(--white) !important;
  padding: 10px 22px;
  border-radius: 50px;
  font-weight: 700 !important;
  transition: background 0.2s, transform 0.2s !important;
}

.nav-cta:hover {
  background: var(--orange-dark) !important;
  transform: translateY(-1px);
  color: var(--white) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2.5px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger span:nth-child(1).open { transform: translateY(7.5px) rotate(45deg); }
.hamburger span:nth-child(2).open { opacity: 0; }
.hamburger span:nth-child(3).open { transform: translateY(-7.5px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--cream);
    padding: 24px;
    gap: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    border-top: 2px solid var(--orange);
  }

  .nav-links.open { display: flex; }
}
</style>
