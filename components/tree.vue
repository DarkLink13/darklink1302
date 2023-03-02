<template>
  <div class="parent">
    <Card
      v-if="item"
      filter="url(#glow00)"
      :i18n="i18n.join('.')"
      :item="item"
      :lvl="lvl"
      :idx="idx"
      :is-parent="true"
      @click.stop="emit('goBack', props.idx)"
    />
    <div v-if="children && children.length" class="children">
      <div v-for="(child, index) in children" :key="'child' + index + lvl" :style="child && child.style">
        <Card
          v-if="child?.item"
          :item="child.item"
          :lvl="lvl - 1"
          :idx="index"
          :i18n="[...i18n, child.item.id].join('.')"
          @click.stop="child.item.action === undefined
            ? emit('goChildren', index)
            : child.item.action(child.item.mode ? $colorMode : setLocale)
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INode, INodeItem } from '~~/types/core'
const emit = defineEmits(['goBack', 'goChildren'])
const { setLocale } = useI18n()

const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => null },
  children: { type: Object as PropType<Array<INode | undefined>>, default: () => null },
  lvl: { type: Number, default: 20 },
  idx: { type: Number, default: 0 },
  i18n: { type: Array, default: () => ['me'] },
  isMoving: { type: Boolean, default: false }
})

</script>

<style scoped>
.children {
  z-index:  v-bind(lvl - 1);
  position: absolute;
  width: 82%;
  height: 82%;
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
</style>
