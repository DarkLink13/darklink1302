<template>
  <svg style="position:absolute">
    <defs>
      <filter
        :id="`shadow${lvl}${idx}`"
        color-interpolation-filters="sRGB"
        height="110%"
        width="110%"
        x="-5%"
        y="-5%"
      >
        <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
        <template v-if="glows?.length">
          <feGaussianBlur v-for="(glow, index) in glows" :key="'blur' + index" in="SourceGraphic" :stdDeviation="glow.blur.toString()" :result="'blur' + glow.blur" />
          <feMerge result="blurMerged">
            <feMergeNode v-for="(glow, index) in glows" :key="'merge' + index" :in="'blur' + glow.blur" />
          </feMerge>
          <feTurbulence :seed="24" type="fractalNoise" numOctaves="15" :baseFrequency="size" result="turbulence">
            <!-- <animate attributeName="baseFrequency" from="0" to="0.01" dur="2s" repeatCount="indefinite" /> -->
          </feTurbulence>
          <!-- <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          > -->

          <!-- </feDisplacementMap> -->

          <!-- v-for="(glow, index) in glows" -->
          <!-- :key="'colorMatrix' + index" -->
          <feColorMatrix
            in="turbulence"
            type="hueRotate"
            :result="'color'"
            values="0"
          >
            <!-- :values="`${glow.array[0]} ${glow.array[0]} ${glow.array[0]} 0 0
                        ${glow.array[1]} ${glow.array[1]} ${glow.array[1]} 0 0
                        ${glow.array[2]} ${glow.array[2]} ${glow.array[2]} 0 0
                        ${(index === 0) ? '1' : '-1'} ${(index === 1) ? '1' : '-1'} ${(index === 2) ? '1' : '-1'} ${(index === 3) ? '1' : '-1'} 1`" -->
          </feColorMatrix>
          <!-- :key="'composite' + index" -->
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
        <template v-else>
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
import { TGlowNormalize } from '../types/tree'

defineProps({
  glows: { type: Array<TGlowNormalize>, default: null },
  lvl: { type: Number, default: null },
  idx: { type: Number, default: 0 },
  size: { type: Number, default: 0.0025 }
})
</script>
