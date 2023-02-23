<template>
  <div class="main">
    <Gradient :lvl="'0'" :idx="'0'" primary="#101010" secondary="#151515" />
    <Gradient :lvl="'0'" :idx="'1'" primary="#151515" secondary="#303030" />
    <!-- <Glow :lvl="0" :idx="0" :glows="glowZero" :size=".01" />-->
    <Glow :lvl="0" :idx="0" :glows="[{ color: '#d773d6', blur: 1 }, { color: '#2ac7ec', blur: 2 }, { color: '#f0e5b1', blur: 5 }]" :size=".015" />
    <Circuit style="position: absolute" />
    <MoveTree
      :index="index"
      :enter="enter"
    >
      <Tree
        :key="level"
        :item="item"
        :children="children"
        :lvl="level"
        :current="level"
        :idx="index"
        :is-moving="isMoving"
        @go-children="goChildren"
        @go-back="goBack"
      />
    </MoveTree>
  </div>
</template>
<script lang="ts" setup>

import { INode, INodeItem } from '~~/types/core'

const nuxtApp = useNuxtApp()

const path = ref([] as Array<number>)
const item = ref(undefined as unknown as INodeItem)
const children = ref(undefined as unknown as (INode | undefined)[])
const level = ref(20)
const index = ref(0)
const isMoving = ref(false)
const enter = ref(false)

onMounted(() => {
  rebuildTree()
})

const rebuildTree = () => {
  item.value = Tree.item || {}
  children.value = Tree.children as INode[] || []
  for (const node of path.value) {
    if (!node) { continue }
    children.value = Object.assign({}, (children.value[node]?.children) || Tree.children)
    item.value = Object.assign({}, (children && children.value[node]?.item) || Tree.item)
  }
  setStyles()
}
const setStyles = () => {
  item.value.style = {
    width: '100%',
    position: 'relative'
  }
  children.value?.forEach((child, index) => {
    child && (child.style = {
      transform: useMove(index),
      visibility: 'visible',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: level.value - 1
    })
    child && (child.item.style = {
      width: '90%',
      height: '90%',
      position: 'relative'
    })
  })
}
onMounted(() => {
  nuxtApp.$animation()
  nuxtApp.$animationSettings()
})

const goBack = (idx: number) => {
  if (isMoving.value) return
  enter.value = true
  // scaleIdx.value = 0.22
  // enterIdx.value = 1.05
  // leaveIdx.value = 0.87
  index.value = (idx + 3) % 6
  path.value.pop()
  setTimeout(() => {
    isMoving.value = true
    level.value < 20 && level.value++
    rebuildTree()
    setTimeout(() => {
      isMoving.value = false
    }, 300)
  }, 0)
}

const goChildren = (idx: number) => {
  if (isMoving.value) return
  enter.value = false
  // scaleIdx.value = -0.22
  // enterIdx.value = 0.87
  // leaveIdx.value = 1.05
  index.value = idx
  path.value.push(idx)
  setTimeout(() => {
    item.value = Object.assign({}, children.value && children.value[idx]?.item)
    children.value = Object.assign([], children.value && children.value[idx]?.children)
    setStyles()
    isMoving.value = true
    level.value--
    setTimeout(() => {
      isMoving.value = false
    }, 300)
  }, 0)
}

</script>

<style>
  .main {
    /* min-height: 550px; */
    min-width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 100px;
    width: 100%;
}
</style>
