<template>
  <svg class="glow">
    <defs>
      <filter
        :id="`glow${lvl}${idx}`"
        color-interpolation-filters="sRGB"
        height="110%"
        width="110%"
        x="-5%"
        y="-5%"
      >
        <template v-if="glows?.length">
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur v-for="(glow, index) in glows" :key="'blur' + index" in="SourceGraphic" :stdDeviation="glow.blur.toString()" :result="'blur' + glow.blur" />
          <feMerge result="blurMerged">
            <feMergeNode v-for="(glow, index) in glows" :key="'merge' + index" :in="'blur' + glow.blur" />
          </feMerge>
          <feTurbulence :seed="24" type="fractalNoise" numOctaves="15" :baseFrequency="size" result="turbulence" />
          <feColorMatrix
            in="turbulence"
            type="hueRotate"
            :result="'color'"
            values="0"
          />
          <feComposite
            in="color"
            in2="blurMerged"
            operator="in"
            :result="'softGlow'"
          />
          <feMerge>
            <feMergeNode in="softGlow" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </template>
        <template v-else-if="!ticken">
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="10" result="blur5" />
          <feFlood flood-color="rgb(10,10,10)" result="glowColor" />
          <feComposite in="glowColor" in2="blur5" operator="in" result="composite" />
          <feMerge>
            <feMergeNode in="composite" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </template>
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts" setup>
import { INodeItemColorGlow } from '~~/types/core'

defineProps({
  ticken: { type: Boolean, default: false },
  glows: { type: Array<INodeItemColorGlow>, default: null },
  lvl: { type: Number, default: null },
  idx: { type: Number, default: 0 },
  size: { type: Number, default: 0.0025 }
})
</script>

<style>
.glow {
  position:absolute
}
</style>
