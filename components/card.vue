<template>
  <div class="wrapper">
    <Gradient :lvl="lvl.toString()" :idx="idx.toString()" :stops="stopsBackground" />
    <Gradient :lvl="lvl.toString()" :idx="idx + 'hover'" :stops="stopsHover" />
    <Gradient v-if="item.exp" :lvl="lvl.toString()" :idx="idx + 'exp'" :stops="stopsExp" />
    <svg height="100%" width="100%">
      <defs>
        <clipPath id="image">
          <Path />
        </clipPath>
        <linearGradient
          v-if="item.exp"
          :id="`${gradientExp}move`"
          :xlink:href="`#${gradientExp}`"
          x1="106.13107"
          y1="224.09465"
          x2="238.26868"
          y2="144.46466"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
    </svg>
    <svg
      height="100%"
      width="100%"
      :class="{ card: true, 'hover': onHover }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-20 -28 290 290"
      :stroke="gradientUrl"
      stroke-width="3"
      @mouseover="() => onHover = true"
      @mouseleave="() => onHover = false"
    >

      <Path :fill="`url(#gradient00${item.mode ?? $colorMode.value})`" :filter="filter" />
      <image
        v-if="item.background"
        clip-path="url(#image)"
        :height="isParent ? item.background.full ? '86%' : '20%' : '25%'"
        :xlink:href="item.background.src"
        preserveAspectRatio="xMidYMin slice"
        :x="backgroundPosition.x"
        :y="backgroundPosition.y"
      />
      <switch v-if="hasDescription && (props.item.description || $te(`${i18n}.description`))">
        <foreignObject class="description">
          <p class="description-wrapper" xmlns="http://www.w3.org/1999/xhtml">
            {{ props.item.description || $t(`${i18n}.description`) }}
          </p>
        </foreignObject>
      </switch>
      <Exp
        v-if="hasDescription && item.exp"
        :gradient="`url(#${gradientExp}move)`"
        :primary="primary"
        :hover="hover"
        :secondary="secondary"
        :exp="item.exp"
      />
      <Icon
        v-if="item.icon"
        :class="{'hover': onHover }"
        :name="item.icon?.key"
        :size="item.icon?.size ?? '4em'"
        :x="iconPosition.x"
        :y="iconPosition.y"
      />
      <switch>
        <foreignObject class="text" :style="textStyle">
          <a
            xmlns="http://www.w3.org/1999/xhtml"
            class="label"
            :href="item.label?.type === NodeItemLabelType.Link ? item.label?.subvalue : ''"
            target="_blank"
            :style="labelStyle"
            @click.stop
          > {{ $te(`${i18n}.label`) ? $t(`${i18n}.label`) : item.label?.value }} <Icon v-if="item.label?.subvalue" class="ml-1" size="12" name="material-symbols:link-sharp" /> </a>
          <p
            v-for="(sublabel, _index) in item.sublabels"
            :key="_index"
            xmlns="http://www.w3.org/1999/xhtml"
            class="label"
            :style="{
              fontSize: props.item.label?.size ?? '.45em',
              color: '#666666'
            }"
            v-text="getSublabel(sublabel)"
          />

        </foreignObject>
      </switch>
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { INodeItem } from '~~/types/core'
import { INodeItemLabel } from '~~/types/core/node/item/label'
const colorMode = useColorMode()
const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => {} },
  lvl: { type: Number, default: 20 },
  i18n: { type: String, default: '' },
  idx: { type: Number, default: 0 },
  filter: { type: String, default: '' },
  isParent: { type: Boolean, default: false }
})
const { t, te } = useI18n()
// colors
const primary = computed(() => props.item.colors?.primary ?? '#101010')
const secondary = computed(() => props.item.colors?.secondary ?? '#202020')
const hover = computed(() => props.item.colors?.hover ?? '#404040')
const gradientHover = computed(() => `url(#gradient${props.lvl}${props.idx}hover)`)
const gradientHoverMode = computed(() => `url(#gradient01${props.item.mode ?? colorMode.value})`)
const gradientExp = computed(() => `gradient${props.lvl}${props.idx}exp`)
const gradientUrl = computed(() => `url(#gradient${props.lvl}${props.idx})`)
const stopsBackground = computed(() => [{ color: primary.value, offset: '0%' }, { color: secondary.value, offset: '100%' }])
const stopsHover = computed(() => [{ color: secondary.value, offset: '0%' }, { color: hover.value, offset: '100%' }])
const stopsExp = computed(() => [
  { color: hover.value, offset: '0%', opacity: '1' },
  { color: hover.value, offset: ((props.item.exp ?? 50) - 1) + '%', opacity: '1' },
  { color: primary.value, offset: ((props.item.exp ?? 50) + 1) + '%', opacity: '1' },
  { color: primary.value, offset: '100%', opacity: '1' }
])
const getSublabel = (sublabel: INodeItemLabel) => {
  switch (sublabel.type) {
    case NodeItemLabelType.Date: return sublabel.value
    case NodeItemLabelType.Link: return `<a href=${sublabel.subvalue}> ${sublabel.value}</a>`
    case NodeItemLabelType.Country: return t('npre.country.' + sublabel.value)
    case NodeItemLabelType.Since: return `${t('npre.since')} ${sublabel.value}`
    case NodeItemLabelType.Version: return `${t('npre.versions')} ${sublabel.value}`
    case NodeItemLabelType.Years: return `${sublabel.value} ${t('npre.years')}`
    case NodeItemLabelType.WorkType: return `${t('npre.workType.' + sublabel.value)} - ${t('npre.workSchedule.' + sublabel.subvalue)}`
    default: return sublabel.value
  }
}
const hasDescription = computed(() => props.isParent && (props.item.description || te(`${props.i18n}.description`) || props.item.exp))
const onHover = ref(false)
const iconPosition = computed(() => hasDescription.value ? { x: '20%', y: '0' } : { x: '32%', y: '27%' })
const textStyle = computed(() =>
  hasDescription.value
    ? {
      x: '45%',
      y: '4%',
      textAlign: 'left',
      textAnchor: 'middle'
    } as CSSProperties
    : {
      x: '31%',
      y: props.item.label?.bottom ?? '50%',
      textAlign: 'center',
      textAnchor: 'middle'
    } as CSSProperties
)
const labelStyle = computed(() => ({
  fontSize: props.item.label?.size ?? '.60em',
  ...(props.item.label?.color !== undefined ? { color: props.item.label?.color } : { color: props.item.label?.type === NodeItemLabelType.Link ? secondary.value : '' })
}))
const backgroundPosition = computed(() =>

  props.item.background?.full
    ? { x: 0, y: 0 }
    : hasDescription.value
      ? { x: '23%', y: '2%' }
      : { x: props.isParent ? '33%' : '31%', y: props.isParent ? '27%' : '22%' }
)
</script>

<style>
.wrapper {
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: v-bind(lvl);
}

.wrapper svg {
  position: absolute;
}

.hover {
  stroke: v-bind(gradientHover);
  transition: all .2s;
}

.hover > path {
  fill: v-bind(gradientHoverMode) !important;
  transition: all .2s;
}

.hover.icon > path {
  fill: v-bind(gradientHover) !important;
  transition: all .2s;
}

.card {
  position: relative !important;
  transition: opacity .5s;
  display: flex;
  justify-content: center;
  transition: all .2s;
}

.icon > * {
  stroke: none;
  fill: v-bind(gradientUrl) !important;
}

.text {
  overflow: visible;
  width: 24%;
  height: 22%;
}

.label {
  color: var(--color);
  stroke: none;
  line-height: 1.1em;
  display: block;
}

.icon {
  transition: x 1s ease, y 1s ease,;
}

.description {
  color: var(--color);
  font-size: .50em;
  text-justify: distribute;
  width: 45%;
  height: 30%;
  x: 20%;
  y: 25%;
}

.description-wrapper {
  overflow-y: scroll;
  height: 100%;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: var(--bg);
  border: 1px solid v-bind(primary);
  -webkit-border-radius: 6px;
}

.description-wrapper::before {
  content:'';
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
}
</style>
