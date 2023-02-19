<template>
  <div class="background">
    <Main :item="tree.item" :children="tree.children" :lvl="level" @on-select="onSelect" />
  </div>
</template>
<script lang="ts" setup>
import { CNode, Tree } from './types/tree'
const tree = ref<CNode>(Tree)
const level = ref(20)

const onSelect = ({ lvl, idx }: any) => {
  // eslint-disable-next-line no-unused-expressions
  (lvl >= 20 || lvl > level.value) && (tree.value = Tree, level.value = 20)
  // es pasar el id de todos los padres anteriores para recrear el paso
  while (lvl < level.value) { (tree.value = (tree.value.children && tree.value.children[idx]) || Tree) && level.value-- }
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
