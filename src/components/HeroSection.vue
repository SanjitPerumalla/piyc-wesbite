<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="hero-content" :style="contentStyle">
      <div class="hero-badge enter enter-1">
        <span class="badge-dot"></span>
        Peoria, Illinois
      </div>

      <h1 class="hero-title enter enter-2">
        Building Community<br/>
        <span class="title-accent">Through Sport &amp;</span><br/>
        <span class="title-green">Service</span>
      </h1>

      <p class="hero-desc enter enter-3">
        The Peoria Indian Youth Coalition unites 150+ passionate members to create
        meaningful change through charitable events, community engagement, and
        the power of athletics.
      </p>

      <div class="hero-actions enter enter-4">
        <router-link to="/join" class="btn-primary">Join the Coalition</router-link>
        <a href="#about" class="btn-secondary">Our Story</a>
      </div>

      <div class="hero-scroll enter enter-5">
        <div class="scroll-indicator"></div>
        <span>Scroll to explore</span>
      </div>
    </div>

    <div class="hero-visual enter enter-visual" :style="logoStyle">
      <div class="logo-showcase">
        <div class="logo-card">
          <img src="/piyc-logo.png" alt="PIYC Logo" class="hero-logo-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isTouch = ref(false)
const scrollY = ref(0)

function onScroll() { scrollY.value = window.scrollY }

onMounted(() => {
  isTouch.value = window.matchMedia('(pointer: coarse)').matches
  if (!isTouch.value) {
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const contentStyle = computed(() =>
  isTouch.value ? {} : { opacity: Math.max(0, 1 - scrollY.value / 480) }
)

const logoStyle = computed(() =>
  isTouch.value ? {} : { transform: `translateY(${scrollY.value * 0.14}px)` }
)
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 60px;
  position: relative;
  gap: 40px;
}

.hero-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  max-width: 100vw;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--orange);
  top: -100px;
  right: -200px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--green);
  bottom: 100px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: var(--orange-light);
  top: 50%;
  left: 50%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(247, 148, 29, 0.12);
  border: 1px solid rgba(247, 148, 29, 0.3);
  color: var(--orange-dark);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 16px;
  border-radius: 10px;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--orange);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 24px;
  color: var(--text-dark);
}

.title-accent { color: var(--orange); }
.title-green { color: var(--green); }

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-mid);
  line-height: 1.75;
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.btn-primary {
  background: var(--orange);
  color: var(--white);
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(247, 148, 29, 0.35);
  text-decoration: none;
}

.btn-primary:hover {
  background: var(--orange-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(247, 148, 29, 0.45);
}

.btn-secondary {
  background: transparent;
  color: var(--green);
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  border: 2.5px solid var(--green);
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: var(--green);
  color: var(--white);
  transform: translateY(-2px);
}

.hero-scroll {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-light);
  font-size: 0.85rem;
}

.scroll-indicator {
  width: 24px;
  height: 38px;
  border: 2px solid var(--text-light);
  border-radius: 12px;
  position: relative;
}

.scroll-indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--text-light);
  border-radius: 2px;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { top: 5px; opacity: 1; }
  100% { top: 18px; opacity: 0; }
}

.hero-visual {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-showcase {
  position: relative;
  width: 560px;
  height: 420px;
  margin-top: -60px;
}

.logo-card {
  position: absolute;
  inset: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* === Hero entry animations === */
@keyframes heroEnter {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.enter {
  animation: heroEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.enter-1 { animation-delay: 0.05s; }
.enter-2 { animation-delay: 0.18s; }
.enter-3 { animation-delay: 0.30s; }
.enter-4 { animation-delay: 0.42s; }
.enter-5 { animation-delay: 0.56s; }
.enter-visual { animation-delay: 0.12s; }

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding-top: 120px;
  }

  /* Contain blobs to hero section on mobile — prevents iOS scroll jitter */
  .hero-bg {
    position: absolute;
    height: 100%;
  }

  .hero-desc { margin: 0 auto 40px; }
  .hero-actions { justify-content: center; }
  .hero-scroll { justify-content: center; }
  .hero-badge { display: inline-flex; }
  .logo-showcase { width: 320px; height: 240px; }
}
</style>
