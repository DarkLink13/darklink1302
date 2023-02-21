<template>
  <div class="background">
    <Main :item="tree.item" :children="tree.children" :lvl="level" @go-children="goChildren" @go-back="goBack" />
  </div>
</template>
<script lang="ts" setup>
import { INode } from './types/core'

const path = ref([] as Array<number>)
const tree = ref<INode>(Tree)
const level = ref(20)

const rebuildTree = () => {
  tree.value = Tree

  for (const node of path.value) {
    tree.value = (tree.value.children && tree.value.children[node]) || Tree
  }
}

const goBack = () => {
  if (!path.value.length) { return }

  path.value.pop()
  rebuildTree()
}

const goChildren = (idx: number) => {
  path.value.push(idx) && (tree.value = (tree.value.children && tree.value.children[idx]) || Tree)
}

</script>

<style>
.background {
    position: absolute;
    background-color: #0c0c0d;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
  margin: 0;
}
</style>
