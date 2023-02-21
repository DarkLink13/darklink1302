<template>
  <div class="container">
    <Gradient :lvl="'0'" :idx="'0'" primary="#101010" secondary="#151515" />
    <Gradient :lvl="'0'" :idx="'1'" primary="#151515" secondary="#303030" />
    <Circuit style="position: absolute;" />
    <!-- <Glow :lvl="0" :idx="0" :glows="glowZero" :size=".01" />-->
    <Glow :lvl="0" :idx="0" :glows="[{ color: '#d773d6', blur: 1 }, { color: '#2ac7ec', blur: 2 }, { color: '#f0e5b1', blur: 5 }]" :size=".015" />
    <!-- <Glow :lvl="0" :idx="1" ticken :size=".01" /> -->
    <div class="nodes">
      <Card
        filter="url(#glow00)"
        :item="item"
        :lvl="lvl"
        :size="25"
        :idx="idx"
        :style="{ width: '30%' }"
        @click="emit('goBack')"
      />
      <div
        v-for="(child, index) in children"
        :key="'child' + index"
        :style="{
          'transform': `translate(${getSin(index)}%, ${getCos(index)}%)`,
          'position': 'absolute',
          'z-index': lvl - 1,
          width: '24%'
        }"
      >
        <Card
          v-if="child"
          filter="url(#glow01)"
          :item="child.item"
          :lvl="lvl - 2"
          :size="20"
          :idx="index"
          @click.stop="emit('goChildren', (index))"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INode } from '~~/types/core'

const nuxtApp = useNuxtApp()

defineProps({
  item: { type: CNodeItem, default: new CNodeItem() },
  children: { type: Array<INode | undefined>, default: {}, required: false },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 }
})
const getSin = (index: number) => Math.sin((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (110 + (Math.floor(index / 6) * 60))
const getCos = (index: number) => Math.cos((Math.PI / 180) * (index + (Math.floor(index / 6) * 0.5)) * 60) * (110 + (Math.floor(index / 6) * 60))

onMounted(() => {
  nuxtApp.$animation()
  nuxtApp.$animationSettings()
})
const emit = defineEmits(['goBack', 'goChildren'])
</script>

<style scoped>
.container {
    min-width: 550px;
    min-width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 100px;
}
.children {
  width: 100%;
}
.nodes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* position: absolute; */
}
.parent {
  display: flex;
  background: radial-gradient(ellipse closest-side, rgba(64, 64, 64, 0.24) 0%,rgba(17, 17, 17, 0.76) 75%,rgb(11, 11, 11) 100%);
}
</style>
