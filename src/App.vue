<template>
  <!-- Dharma wheel cursor -->
  <div class="cursor-wheel" :style="{ left: pos.x + 'px', top: pos.y + 'px' }">
    <svg width="38" height="38" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#06038D" stroke-width="2.5"/>
      <line v-for="i in 24" :key="i"
        x1="18" y1="4" x2="18" y2="15"
        stroke="#06038D" stroke-width="0.9"
        :transform="`rotate(${(i - 1) * 15}, 18, 18)`"
      />
      <circle cx="18" cy="18" r="2.8" fill="#06038D"/>
    </svg>
  </div>

  <!-- Full-screen spotlight -->
  <div class="spotlight" :style="spotlightStyle"></div>

  <!-- Scroll progress bar -->
  <div class="scroll-bar" :style="{ transform: `scaleX(${progress / 100})` }"></div>

  <RouterView />
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'

// ── Scroll progress ──────────────────────────────────────────────────────────
const progress = reactive({ value: 0 })
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? (window.scrollY / h) * 100 : 0
}

// ── Wheel cursor ─────────────────────────────────────────────────────────────
const mouse = reactive({ x: -200, y: -200 })
const pos   = reactive({ x: -200, y: -200 })
let rafId = null

function lerp(a, b, t) { return a + (b - a) * t }

function animate() {
  pos.x = lerp(pos.x, mouse.x, 0.45)
  pos.y = lerp(pos.y, mouse.y, 0.45)
  rafId = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const spotlightStyle = computed(() => ({
  background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(247,148,29,0.08), transparent 70%)`,
}))

onMounted(() => {
  const hasPointer = window.matchMedia('(pointer: fine)').matches
  if (hasPointer) {
    document.documentElement.classList.add('has-custom-cursor')
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    animate()
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('mousemove', onMouseMove)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style>
/* ── Dharma wheel cursor ───────────────────────────────────────────────────── */
.has-custom-cursor * { cursor: none !important; }

.cursor-wheel {
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  will-change: left, top;
}

.cursor-wheel svg {
  animation: dharma-spin 5s linear infinite;
  display: block;
}

@keyframes dharma-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── Full-screen spotlight ─────────────────────────────────────────────────── */
.spotlight {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

@media (pointer: coarse) {
  .spotlight { display: none; }
  .cursor-wheel { display: none; }
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
