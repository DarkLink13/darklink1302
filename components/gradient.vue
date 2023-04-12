<template>
  <svg class="gradient">
    <defs>
      <linearGradient :id="`gradient${lvl}${idx}`" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop v-for="(stop, index) in stops" :key="'color' + index" :offset="stop.offset" :stop-color="stop.color" :opacity="stop.opacity || '1'" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  lvl: { type: String, default: '20' },
  idx: { type: String, default: '0' },
  stops: { type: Array, default: () => [''] }
})
</script>

<style>
.gradient {
  position:absolute;
  z-index: -20;
  visibility: hidden;
}
</style>
