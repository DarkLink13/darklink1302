<template>
  <div class="container">
    <Gradient :lvl="'0'" :idx="'0'" primary="#101010" secondary="#151515" />
    <Gradient :lvl="'0'" :idx="'1'" primary="#151515" secondary="#303030" />
    <Circuit3 style="position: absolute;" :filter="`url(#shadow00)`" primary="#FFFFFF" secondary="#666666" />
    <Glow :lvl="0" :idx="0" :glows="glowZero" :size=".1" />
    <Linear />
    <Card
      :item="item"
      :lvl="lvl"
      :size="25"
      :idx="idx"
      @click="emit('onSelect', ({ lvl: lvl + 1, idx }))"
    />
    <div
      v-for="(child, index) in children"
      :key="child.item.label.name"
      :style="{
        'transform': `translate(${getSin(index)}px, ${getCos(index)}px)`,
        'position': 'absolute',
        'z-index': lvl - 1
      }"
    >
      <div class="container">
        <Card
          :item="child.item"
          :lvl="lvl - 2"
          :size="20"
          :idx="index"
          @click="emit('onSelect', ({ lvl: lvl - 1, idx: index }))"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TGlowNormalize, CNode, CItem } from '../types/tree'

defineProps({
  item: { type: CItem, default: null },
  children: { type: Array<CNode>, default: null },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 }
})
const getSin = (index: number) => Math.sin((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (400 + (Math.floor(index / 6) * 200))
const getCos = (index: number) => Math.cos((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (400 + (Math.floor(index / 6) * 200))
const glowZero: TGlowNormalize[] = [
  { array: [1, 1, 1], blur: 0.05 }
]
const emit = defineEmits(['onSelect'])
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 100px;
}
.subject {
    /* transform: rotateX(1deg) rotateY(1deg) rotateZ(1deg); */
    height: 100%;
    width: 100%;
}

.parent {
  /* position: absolute; */
  display: flex;
  background: radial-gradient(ellipse closest-side, rgba(64, 64, 64, 0.24) 0%,rgba(17, 17, 17, 0.76) 75%,rgb(11, 11, 11) 100%);
}
</style>
