<template>
  <svg>
    <defs>
      <linearGradient id="linear" x1="-1000%" y1="-1000%" x2="1000%" y2="1000%">
        <stop offset="0%" stop-color="#DBE2E8" />
        <stop offset="100%" :stop-color="color" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  color: { type: String, default: 'grey' }
})
</script>
