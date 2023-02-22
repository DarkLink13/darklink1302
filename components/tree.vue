<template>
  <div class="nodes">
    <Card
      v-if="_item"
      filter="url(#glow00)"
      :item="_item"
      :lvl="lvl"
      :size="30"
      :idx="idx"
      :hover="onHover"
      :style="_item.style"
      @click.stop="selectNode()"
    />
    <div class="children" :style="{ zIndex: lvl - 1 }">
      <div
        v-for="(child, index) in _children"
        :key="'child' + index + lvl"
        :style="child.style"
      >
        <Tree
          filter="url(#glow01)"
          :item="child.item"
          :children="child.children as INode[]"
          :lvl="lvl - 1"
          :idx="index"
          :current="current"
          :style=" {
            display: 'flex',
            'justify-content': 'center',
            position: 'relative',
            width: '100%'
          }"
          @go-children="goChildren"
          @go-back="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INode, INodeWrapper, INodeItemWrapper } from '~~/types/core'
const onHover = ref(false)
const props = defineProps({
  item: { type: CNodeItem, default: new CNodeItem({ label: { name: '' }, type: NodeItemType.Default }) },
  children: { type: Array<INode | undefined>, default: {}, required: false },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 },
  current: { type: Number, default: 20 }
})
const _children = ref<INodeWrapper[]>([])
const _item = ref<INodeItemWrapper>()

const selectNode = () => {
  if (props.lvl === props.current) { emit('goBack') } else {
    _children.value.forEach((child) => {
      child.style.opacity = 1
      child.style.visibility = 'visible'
    })
    emit('goChildren', props.idx)
  }
}

const goBack = () => { emit('goBack') }

// @ts-ignore
watch(() => props.item, (newVal: INode) => {
  // @ts-ignore
  _item.value = {
    ...newVal,
    style: {
      width: props.lvl === props.current ? '24%' : '90%',
      position: 'relative'
      // visibility: props.lvl < 18 ?
    }
  }
})
// @ts-ignore
watch(() => props.children, (newVal: INode[]) => {
  // @ts-ignore
  _children.value = (newVal.length && newVal?.map((child, index) => ({
    ...child,
    style: {
      transform: `translate(${useSin(index)}%, ${useCos(index)}%)`,
      opacity: props.lvl !== props.current ? 0 : 1,
      visibility: props.lvl !== props.current ? 'hidden' : 'visible',
      position: 'absolute',
      width: '24.166%',
      height: '100%',
      zIndex: props.lvl - 1
    }
  }))) || []
})
onMounted(() => {
  _item.value = {
    ...props.item,
    style: {
      width: props.lvl === props.current ? '24%' : '90%',
      position: 'relative'
      // visibility: props.lvl < 18 ?
    }
  }
  _children.value = (props.children.length && props.children?.map((child, index) => ({
    ...child,
    style: {
      transform: `translate(${useSin(index)}%, ${useCos(index)}%)`,
      opacity: props.lvl !== props.current ? 0 : 1,
      visibility: props.lvl !== props.current ? 'hidden' : 'visible',
      position: 'absolute',
      width: '24.166%',
      height: '100%',
      zIndex: props.lvl - 1
    }
  }))) || []
})
const emit = defineEmits(['goBack', 'goChildren'])

const goChildren = (idx: number) => {
  const transform = _children.value[(idx + 3) % 6].style.transform

  _children.value.forEach((child, index) => {
    if (index !== idx) {
      child.style.transform += transform ?? ''
      child.style.opacity = 0
    }
  })

  _item.value && (_item.value.style.opacity = 0)
  _item.value && (_item.value.style.transform = transform)

  _children.value[idx].style.transform = 'none'
  _children.value[idx].style.width = '100%'

  _children.value[idx].children?.forEach((child) => {
    if (child && child.style) {
      child.style.transform += transform ?? ''
      child.style.width = '24.166%'
      child.style.opacity = 1
      child.style.visibility = 'visible'
    }
  })
  setTimeout(() => {
    emit('goChildren', idx)
  }, 1000)
}

</script>

<style scoped>
.children {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.nodes {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.nodes div {
  transition: transform 1s ease, width 1s ease, opacity 1s ease;
}
</style>
