<template>
  <div class="main">
    <EffectGradient v-for="step in mainSteps" :key="step.id" :idx="step.id" :lvl="'0'" :stops="step.stops" />
    <EffectGlow :lvl="0" :idx="0" :glows="mainGlows" :size=".015" />
    <Background v-bind="colorTheme" :colors="colors" />
    <TreeTransition :index="index" :enter="enter">
      <Tree
        :key="level"
        :i18n="i18n"
        :item="item"
        :children="children"
        :lvl="level"
        :current="level"
        :idx="index"
        :is-moving="isMoving"
        @go-children="goChildren"
        @go-back="goBack"
      />
    </TreeTransition>
  </div>
</template>
<script lang="ts" setup>
import { mainGlows, mainSteps } from '~~/types/consts'
import { INode, INodeItem } from '~~/types/core'

const router = useRouter()
const route = useRoute()

const colorMode = useColorMode()
const path = ref<Array<number>>([])
const i18n = ref<Array<string>>(['tree'])
const item = ref<INodeItem>()
const children = ref<(INode | undefined)[]>()
const level = ref(20)
const index = ref(0)
const isMoving = ref(false)
const enter = ref(false)

const colorTheme = computed(() => ({
  primary: colorMode.value === 'light' ? '#DDDDDD' : '#202020',
  secondary: colorMode.value === 'light' ? '#DDDDDD20' : '#20202017'
}))

const colors = computed(() => ({
  parent: item.value?.colors?.secondary,
  ...(children.value ? Object.fromEntries(children.value.map((child, index) => [index, child?.item.colors?.secondary])) : {})
} || {}))

onMounted(() => {
  route.query.path && (path.value = (route.query.path as string).split(',').map(a => parseInt(a))) && (level.value = 20 - (route.query.path as string).split(',').length)
  rebuildTree()
})

const rebuildTree = () => {
  item.value = Tree.item || {}
  children.value = Tree.children as INode[] || []
  i18n.value = ['tree']
  for (const node of path.value) {
    if (children && children.value[node]?.item) {
      item.value = Object.assign({}, children.value[node]?.item)
      children.value = Object.assign([], children.value[node]?.children)
    } else {
      path.value = []
      router.push({
        path: route.path,
        query: { path: '' }
      })
      i18n.value = ['tree']
      item.value = Object.assign({}, Tree.item)
      children.value = Object.assign([], Tree.children)
      break
    }
    i18n.value.push(item.value.id)
  }
  setStyles()
}
const setStyles = () => {
  item.value && (item.value.style = { position: 'relative' })
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
  if (!path.value.length) return
  enter.value = true
  index.value = (idx + 3) % 6
  path.value.pop()
  nextTick(() => {
    isMoving.value = true
    level.value < 20 && level.value++
    rebuildTree()
    setTimeout(() => {
      index.value = path.value[path.value.length - 1]
      isMoving.value = false
      router.push({
        path: route.path,
        query: { path: path.value.join(',') }
      })
    }, 300)
  })
}

const goChildren = (idx: number) => {
  if (isMoving.value) return
  enter.value = false
  index.value = idx
  path.value.push(idx)
  nextTick(() => {
    item.value = Object.assign({}, children.value && children.value[idx]?.item)
    i18n.value.push(item.value.id)
    children.value = Object.assign([], children.value && children.value[idx]?.children)
    setStyles()
    isMoving.value = true
    level.value--
    setTimeout(() => {
      isMoving.value = false
      router.push({
        path: route.path,
        query: { path: path.value.join(',') }
      })
    }, 300)
  })
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
