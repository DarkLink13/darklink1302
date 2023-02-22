<template>
  <div class="container">
    <Gradient :lvl="'0'" :idx="'0'" primary="#101010" secondary="#151515" />
    <Gradient :lvl="'0'" :idx="'1'" primary="#151515" secondary="#303030" />
    <!-- <Glow :lvl="0" :idx="0" :glows="glowZero" :size=".01" />-->
    <!-- <Glow :lvl="0" :idx="0" :glows="[{ color: '#d773d6', blur: 1 }, { color: '#2ac7ec', blur: 2 }, { color: '#f0e5b1', blur: 5 }]" :size=".015" /> -->
    <Circuit style="position: absolute" />
    <Tree
      :item="tree.item"
      :children="tree.children"
      :lvl="level"
      :current="level"
      :idx="index"
      @go-children="goChildren"
      @go-back="goBack"
    />
  </div>
</template>
<script lang="ts" setup>
const nuxtApp = useNuxtApp()

const path = ref([] as Array<number>)
const tree = useState(() => Tree)
const level = ref(20)
const index = ref(0)

const rebuildTree = () => {
  tree.value = Tree
  for (const node of path.value) {
    if (!node) { continue }
    tree.value = Object.assign({}, (tree.value.children && tree.value.children[node]) || Tree)
  }
}
onMounted(() => {
  nuxtApp.$animation()
  nuxtApp.$animationSettings()
})
const goBack = () => {
  index.value = 0
  level.value > 20 && level.value++
  path.value.pop()
  rebuildTree()
}

const goChildren = (idx: number) => {
  level.value--
  index.value = idx
  path.value.push(idx)
  tree.value = Object.assign({}, (tree.value.children && tree.value.children[idx]) || Tree)
}

</script>

<style scoped>
  .container {
    /* min-height: 550px; */
    min-width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 100px;
}
</style>
