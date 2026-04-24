<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Orange top half circle -->
    <path d="M50 5 A45 45 0 0 1 95 50 L50 50 Z" fill="#F7941D"/>
    <path d="M5 50 A45 45 0 0 1 50 5 L50 50 Z" fill="#F7941D"/>
    <!-- Green bottom half circle -->
    <path d="M50 50 A45 45 0 0 1 5 50 L50 50 Z" fill="#1A6B35"/>
    <path d="M95 50 A45 45 0 0 1 50 95 L50 50 Z" fill="#1A6B35"/>
    <path d="M50 95 A45 45 0 0 1 5 50 L50 50 Z" fill="#1A6B35"/>
    <!-- Ring border -->
    <circle cx="50" cy="50" r="45" stroke="#1A6B35" stroke-width="5" fill="none"/>
    <!-- Handshake icon - simplified -->
    <g transform="translate(18, 22)">
      <!-- Left hand -->
      <path d="M8 28 C8 28 2 24 2 18 C2 14 5 12 8 13 L16 18 L22 14 C24 12 27 13 27 16 L27 20 L32 18 C34 16 37 17 37 20 L37 24 L40 23 C42 22 44 23 44 26 L44 32 C44 35 40 38 36 38 L20 38 C16 38 8 33 8 28Z" fill="white" opacity="0.95"/>
      <!-- Right hand -->
      <path d="M56 28 C56 28 62 24 62 18 C62 14 59 12 56 13 L48 18 L42 14 C40 12 37 13 37 16 L37 20 L32 18 C30 16 27 17 27 20 L27 24 L24 23 C22 22 20 23 20 26 L20 32 C20 35 24 38 28 38 L44 38 C48 38 56 33 56 28Z" fill="#F7941D" opacity="0.9"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 60 }
})
</script>
