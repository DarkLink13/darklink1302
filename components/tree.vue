<template>
  <div class="parent">
    <Card
      v-if="item"
      class="move"
      :filter="lvl === current && !isMoving ? 'url(#glow00)' : 'none'"
      :item="item"
      :lvl="lvl"
      :size="30"
      :idx="idx"
      :hover="onHover"
      :style="item.style"
      @click="selectNode()"
    />
    <div v-if="lvl === current" :class="{ children }">
      <div
        v-for="(child, index) in children"
        :key="'child' + index + lvl"
        :style="child && child.style"
        class="move"
      >
        <Tree
          v-if="child && child.item"
          class="child"
          :item="child.item"
          :children="child.children"
          :lvl="lvl - 1"
          :idx="index"
          :current="current"
          :is-moving="isMoving"
          @go-children="goChildren"
          @go-back="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INode, INodeItem } from '~~/types/core'
const onHover = ref(false)

const emit = defineEmits(['goBack', 'goChildren'])

const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => null },
  children: { type: Object as PropType<Array<INode | undefined>>, default: () => null },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 },
  current: { type: Number, default: 20 },
  isMoving: { type: Boolean, default: false }
})

const selectNode = () => {
  if (props.lvl === props.current) {
    // useAnimation(isMoving, props.idx, _children, _item, emit, moves)
    // isMoving.value = true
    // const transform = useMove(props.idx, 111, 111)

    emit('goBack', props.idx)
    // if (_item && _item.value) {
    //   console.log('here')
    //   _item.value.style.width = _item.value.style.height = '81%'
    //   _item.value.style.transform = transform
    // }
    // setTimeout(() => {
    //   isMoving.value = false
    // }, 500)
  } else {
    propagateToParent()
  }
}

const goBack = () => emit('goBack', props.idx)

const propagateToParent = () => {
  // !_children.value && (_children.value = [])
  // Object.values(_children.value).forEach((child) => {
  //   !child && (child = { style: {} })
  //   child.style.opacity = 1
  //   child.style.visibility = 'visible'
  // })
  emit('goChildren', props.idx)
}

const goChildren = (idx: number) => emit('goChildren', idx)

</script>

<style scoped>
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

.child {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
