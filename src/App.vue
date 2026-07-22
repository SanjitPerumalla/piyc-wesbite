<template>
  <!-- Custom cursor -->
  <div class="cursor-dot" :class="{ hovering: isHovering }" :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"></div>
  <div class="cursor-ring" :class="{ hovering: isHovering }" :style="{ left: ring.x + 'px', top: ring.y + 'px' }"></div>

  <!-- Full-screen spotlight -->
  <div class="spotlight" :style="spotlightStyle"></div>

  <!-- Scroll progress bar -->
  <div class="scroll-bar" :style="{ transform: `scaleX(${progress / 100})` }"></div>

  <RouterView />
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// ── Scroll progress ──────────────────────────────────────────────────────────
const progress = ref(0)
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? (window.scrollY / h) * 100 : 0
}

// ── Mouse / cursor ───────────────────────────────────────────────────────────
const mouse = reactive({ x: -200, y: -200 })
const ring  = reactive({ x: -200, y: -200 })
const isHovering = ref(false)
let rafId = null

function lerp(a, b, t) { return a + (b - a) * t }

function animateRing() {
  ring.x = lerp(ring.x, mouse.x, 0.12)
  ring.y = lerp(ring.y, mouse.y, 0.12)
  rafId = requestAnimationFrame(animateRing)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onMouseOver(e) {
  isHovering.value = !!e.target.closest('a, button, [role="button"], .member-card')
}

const spotlightStyle = computed(() => ({
  background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(247,148,29,0.08), transparent 70%)`,
}))

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    document.documentElement.classList.add('has-custom-cursor')
  }
  window.addEventListener('scroll',    updateProgress, { passive: true })
  window.addEventListener('mousemove', onMouseMove,    { passive: true })
  window.addEventListener('mouseover', onMouseOver,    { passive: true })
  animateRing()
})

onUnmounted(() => {
  window.removeEventListener('scroll',    updateProgress)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  cancelAnimationFrame(rafId)
})
</script>

<style>
/* ── Custom cursor ─────────────────────────────────────────────────────────── */
.has-custom-cursor * { cursor: none !important; }

.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--orange);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease, opacity 0.2s ease;
  will-change: left, top;
}

.cursor-ring {
  position: fixed;
  width: 36px;
  height: 36px;
  border: 2px solid var(--orange);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  opacity: 0.55;
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
  will-change: left, top;
}

.cursor-dot.hovering {
  transform: translate(-50%, -50%) scale(2.5);
  opacity: 0;
}

.cursor-ring.hovering {
  width: 54px;
  height: 54px;
  border-color: var(--green);
  opacity: 0.85;
}

/* ── Full-screen spotlight ─────────────────────────────────────────────────── */
.spotlight {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* ── Scroll progress bar ───────────────────────────────────────────────────── */
.scroll-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--orange) 0%, var(--green) 100%);
  transform-origin: left;
  z-index: 9999;
  transition: transform 0.08s linear;
  pointer-events: none;
}
</style>
