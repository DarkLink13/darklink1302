<template>
  <div class="parent">
    <Card
      v-if="_item"
      :class="{ move: isMoving }"
      :filter="lvl === current && !isMoving ? 'url(#glow00)' : 'none'"
      :item="_item"
      :lvl="lvl"
      :size="30"
      :idx="idx"
      :hover="onHover"
      :style="_item.style"
      @click="selectNode()"
    />
    <div :class="{ fullHeight: lvl === current, children }">
      <div
        v-for="(child, index) in _children"
        :key="'child' + index + lvl"
        :style="child && child.style"
        :class="{ move: isMoving }"
      >
        <Tree
          v-if="child && child.item"
          class="child"
          :item="child.item"
          :children="(child.children as INode[])"
          :lvl="lvl - 1"
          :idx="index"
          :current="current"
          :set-is-move="isMoving"
          @go-children="goChildren"
          @go-back="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INode, INodeWrapper, INodeItemWrapper, INodeItem } from '~~/types/core'
const onHover = ref(false)
const moves = [
  { x: 0, y: -5 },
  { x: 0, y: -10 },
  { x: 0, y: 10 },
  { x: 0, y: 5 },
  { x: 0, y: 10 },
  { x: 0, y: -10 },
  { x: -60, y: -66 }
]
const _children = ref<(INodeWrapper | undefined)[]>([])
const _item = ref<INodeItemWrapper>()
const isMoving = ref(false)
const emit = defineEmits(['goBack', 'goChildren'])

const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => {} },
  children: { type: Object as PropType<Array<INode | undefined>>, default: () => {} },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 },
  current: { type: Number, default: 20 },
  setIsMove: { type: Boolean, default: false }
})
onMounted(() => {
  _item.value = setItem(props.item, props.lvl, props.current)
  _children.value = setChildren(props.children, props.lvl, props.current)
})

const selectNode = () =>
  (props.lvl === props.current) ? useAnimation(isMoving, props.idx, _children, _item, emit, moves) : propagateToParent()

const goBack = () =>
  (isMoving.value = true) &&
  setTimeout(() => emit('goBack'), 500)

const propagateToParent = () => {
  !_children.value && (_children.value = [])
  Object.values(_children.value).forEach((child) => {
    !child && (child = { style: {} })
    child.style.opacity = 1
    child.style.visibility = 'visible'
  })
  emit('goChildren', props.idx)
}

watch(() => props.item, (newVal: INodeItem) =>
  newVal && (_item.value = setItem(newVal, props.lvl, props.current))
)

watch(() => props.children, (newVal: (INode | undefined)[]) =>
  newVal && newVal.length && (_children.value = setChildren(newVal, props.lvl, props.current))
)

watch(() => props.setIsMove, (newVal: boolean) =>
  (isMoving.value = newVal)
)

const goChildren = (idx: number) => useAnimation(isMoving, idx, _children, _item, emit, moves, true)

</script>

<style scoped>
.fullHeight {
  height: 100% !important;
}
.children {
  z-index:  v-bind(lvl - 1);
  position: absolute;
  width: 90%;
  height: 90%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.parent {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30%;
  position: relative;
}
.parent .move {
  transition: transform .5s ease, width .5s ease, height .5s ease, opacity .5s ease;
}
.child {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
