<template>
  <!-- Dot trail cursor -->
  <div
    v-for="(dot, i) in trail"
    :key="i"
    class="trail-dot"
    :style="{
      left:    dot.x + 'px',
      top:     dot.y + 'px',
      width:   dotSize(i) + 'px',
      height:  dotSize(i) + 'px',
      opacity: dotOpacity(i),
    }"
  ></div>

  <!-- Full-screen spotlight -->
  <div class="spotlight" :style="spotlightStyle"></div>

  <!-- Scroll progress bar -->
  <div class="scroll-bar" :style="{ transform: `scaleX(${progress / 100})` }"></div>

  <RouterView />
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'

const TRAIL = 14

// ── Scroll progress ──────────────────────────────────────────────────────────
const state = reactive({ progress: 0 })
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  state.progress = h > 0 ? (window.scrollY / h) * 100 : 0
}

// ── Trail dots ───────────────────────────────────────────────────────────────
const mouse = reactive({ x: -400, y: -400 })
const trail = reactive(Array.from({ length: TRAIL }, () => ({ x: -400, y: -400 })))
let rafId = null

function lerp(a, b, t) { return a + (b - a) * t }

function dotSize(i)    { return 9 - (i / (TRAIL - 1)) * 6 }
function dotOpacity(i) { return 1 - (i / (TRAIL - 1)) * 0.92 }

function animate() {
  trail[0].x = lerp(trail[0].x, mouse.x, 0.38)
  trail[0].y = lerp(trail[0].y, mouse.y, 0.38)
  for (let i = 1; i < TRAIL; i++) {
    trail[i].x = lerp(trail[i].x, trail[i - 1].x, 0.38)
    trail[i].y = lerp(trail[i].y, trail[i - 1].y, 0.38)
  }
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
  if (window.matchMedia('(pointer: fine)').matches) {
    document.documentElement.classList.add('has-custom-cursor')
  }
  window.addEventListener('scroll',    updateProgress, { passive: true })
  window.addEventListener('mousemove', onMouseMove,    { passive: true })
  animate()
})

onUnmounted(() => {
  window.removeEventListener('scroll',    updateProgress)
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<style>
/* ── Dot trail cursor ──────────────────────────────────────────────────────── */
.has-custom-cursor * { cursor: none !important; }

.trail-dot {
  position: fixed;
  border-radius: 50%;
  background: var(--orange);
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  will-change: left, top;
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
