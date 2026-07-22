<template>
  <div class="scroll-bar" :style="{ transform: `scaleX(${progress / 100})` }"></div>
  <RouterView />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function update() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? (window.scrollY / h) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', update, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<style>
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
