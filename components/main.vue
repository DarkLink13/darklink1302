<template>
  <div class="main">
    <Gradient :lvl="'0'" :idx="'0'" :stops="stepsBackground" />
    <Gradient :lvl="'0'" :idx="'1'" :stops="stepsHover" />
    <Glow :lvl="0" :idx="0" :glows="[{ color: '#d773d6', blur: 1 }, { color: '#2ac7ec', blur: 2 }, { color: '#f0e5b1', blur: 5 }]" :size=".015" />
    <Circuit style="position: absolute" :colors="colors" />
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

const path = ref([] as Array<number>)
const item = ref(undefined as unknown as INodeItem)
const children = ref(undefined as unknown as (INode | undefined)[])
const level = ref(20)
const index = ref(0)
const isMoving = ref(false)
const enter = ref(false)
const colors = computed(() => ({
  parent: item.value?.colors?.secondary,
  ...Object.fromEntries(
    Array.from({ length: 12 })
      .map((_, index) => [
        'child' + index,
        children.value ? children.value[index]?.item.colors?.secondary : '#202020'
      ]
      )
  )
} || {}))
const stepsBackground = computed(() => [{ step: '0%', color: '#070707' }, { step: '100%', color: '#151515' }])
const stepsHover = computed(() => [{ step: '0%', color: '#151515' }, { step: '100%', color: '#252525' }])
onMounted(() => {
  rebuildTree()
})

const rebuildTree = () => {
  item.value = Tree.item || {}
  children.value = Tree.children as INode[] || []
  for (const node of path.value) {
    item.value = Object.assign({}, (children && children.value[node]?.item) || Tree.item)
    children.value = Object.assign([], (children.value[node]?.children) || Tree.children)
  }
  setStyles()
}
const setStyles = () => {
  item.value.style = { position: 'relative' }
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
      width: '85%',
      height: '85%'
    })
  })
}

const goBack = (idx: number) => {
  if (isMoving.value) return
  enter.value = true
  index.value = (idx + 3) % 6
  path.value.pop()
  setTimeout(() => {
    isMoving.value = true
    level.value < 20 && level.value++
    rebuildTree()
    setTimeout(() => {
      isMoving.value = false
      index.value = path.value[path.value.length - 1]
    }, 300)
  }, 0)
}

const goChildren = (idx: number) => {
  if (isMoving.value) return
  enter.value = false
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
    min-width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 100px;
    width: 100%;
}
</style>
