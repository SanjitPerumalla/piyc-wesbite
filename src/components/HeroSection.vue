<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Peoria, Illinois
      </div>

      <h1 class="hero-title">
        Building Community<br/>
        <span class="title-accent">Through Sport &amp;</span><br/>
        <span class="title-green">Service</span>
      </h1>

      <p class="hero-desc">
        The Peoria Indian Youth Coalition unites 50+ passionate members to create
        meaningful change — through charitable events, community engagement, and
        the power of athletics.
      </p>

      <div class="hero-actions">
        <a href="#get-involved" class="btn-primary">Join the Coalition</a>
        <a href="#about" class="btn-secondary">Our Story</a>
      </div>

      <div class="hero-scroll">
        <div class="scroll-indicator"></div>
        <span>Scroll to explore</span>
      </div>
    </div>

    <div class="hero-visual">
      <div class="logo-showcase">
        <PiycLogo :size="220" />
        <div class="logo-ring"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PiycLogo from './PiycLogo.vue'
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
  border-radius: 50px;
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
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(247, 148, 29, 0.35);
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
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  border: 2.5px solid var(--green);
  transition: all 0.25s ease;
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
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-ring {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 2px dashed rgba(247, 148, 29, 0.3);
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding-top: 120px;
  }

  .hero-desc { margin: 0 auto 40px; }
  .hero-actions { justify-content: center; }
  .hero-scroll { justify-content: center; }
  .hero-badge { display: inline-flex; }
}

@media (max-width: 480px) {
  .logo-showcase { width: 200px; height: 200px; }
  .logo-ring { inset: -16px; }
}
</style>
