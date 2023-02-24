<template>
  <div class="wrapper">
    <Gradient :lvl="lvl.toString()" :idx="idx.toString()" :primary="primary" :secondary="secondary" />
    <Gradient :lvl="lvl.toString()" :idx="idx + 'hover'" :primary="secondary" :secondary="hover" />
    <svg>
      <defs>
        <clipPath id="image">
          <Path />
        </clipPath>
      </defs>
    </svg>
    <svg
      height="100%"
      width="100%"
      :class="{ card: true, 'hover': onHover }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-20 -28 290 290"
      :stroke="gradientUrl"
      stroke-width="3"
      @mouseover="() => onHover = true"
      @mouseleave="() => onHover = false"
    >

      <Path fill="url(#gradient00)" :filter="filter" />
      <image
        v-if="item.background"
        clip-path="url(#image)"
        :height="item.background.height ?? '86%'"
        :xlink:href="item.background.src"
        preserveAspectRatio="xMidYMin slice"
        :x="item.background.x"
        :y="item.background.y"
      />
      <Icon
        v-if="item.icon"
        :class="{'hover': onHover}"
        :name="item.icon?.key"
        :size="item.icon?.size ?? '4em'"
        x="31%"
        y="27%"
      />
      <text
        class="label"
        :fill="item.label.color ?? 'white'"
        :filter="`drop-shadow(0 0 1px ${item.colors?.primary})`"
        stroke-width="13"
        :font-size="item.label.size ?? '.85em'"
        text-anchor="middle"
        x="42%"
        :y="item.label.bottom ?? '55%'"
      >
        {{ item.label.name }}
      </text>
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { INodeItem } from '~~/types/core'

const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => {} },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 },
  filter: { type: String, default: '' }
})
const primary = computed(() => props.item.colors?.primary ?? '#101010')
const secondary = computed(() => props.item.colors?.secondary ?? '#202020')
const hover = computed(() => props.item.colors?.hover ?? '#404040')
const gradientHover = computed(() => `url(#gradient${props.lvl}${props.idx}hover)`)
const gradientUrl = computed(() => `url(#gradient${props.lvl}${props.idx})`)
const onHover = ref(false)
</script>

<style>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: v-bind(lvl);
}

.wrapper svg {
  position: absolute;
}
.hover {
  stroke: v-bind(gradientHover);
  transition: all .2s;
}

.hover > path {
  fill: url(#gradient01) !important;
  transition: all .2s;
}

.hover.icon > path {
  fill: v-bind(gradientHover) !important;
  transition: all .2s;
}

.card {
  position: relative !important;
  transition: opacity .5s;
  display: flex;
  justify-content: center;
  transition: all .2s;
}

.icon > * {
  stroke: none;
  fill: v-bind(gradientUrl) !important;
}

.label {
  stroke: none;
  bottom: 3em;
}
</style>
