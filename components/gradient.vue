<template>
  <svg style="position:absolute;z-index: -20;">
    <defs>
      <linearGradient :id="`gradient${lvl}${idx}`" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" :stop-color="primary" />
        <stop offset="100%" :stop-color="secondary" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  lvl: { type: String, default: '20' },
  idx: { type: String, default: '0' },
  primary: { type: String, default: '' },
  secondary: { type: String, default: '' }
})
</script>
