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
          x1="38.142242"
          y1="83.831482"
          x2="37.567436"
          y2="61.984924"
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
      <switch v-if="hasDescription && props.item.description">
        <foreignObject class="description">
          <p class="description-wrapper" xmlns="http://www.w3.org/1999/xhtml">
            {{ props.item.description }}
          </p>
        </foreignObject>
      </switch>
      <g
        v-if="hasDescription && item.exp"
        id="g247"
        transform="translate(-18 -27)"
      >
        <path
          id="path21"
          :stroke="hover"
          style="display:inline;fill:none;fill-opacity:1;stroke-width:1.5px;stroke-dasharray:none;stroke-opacity:1"
          d="m 35.965912,120.30093 c 0.01238,-0.74292 -0.579793,-1.35524 -1.322708,-1.36771 -0.743127,-0.0124 -1.355536,0.5801 -1.367724,1.32322 -0.01209,0.74293 0.580317,1.35502 1.323237,1.3672 0.742721,0.0121 1.354724,-0.58 1.367195,-1.32271 z"
          transform="matrix(7.3776504,0,0,7.3776504,-154.93859,-669.14742)"
        />
        <path
          id="path19"
          :stroke="primary"
          style="display:inline;fill:none;fill-opacity:1;stroke-width:1.5px;stroke-dasharray:none;stroke-opacity:1"
          d="m 36.97212,61.193857 c -0.637375,-0.382295 -1.463982,-0.17539 -1.846095,0.46209 -0.38194,0.637338 -0.174946,1.463635 0.462354,1.845639 0.637192,0.38219 1.463563,0.175513 1.845821,-0.461636 0.382302,-0.637366 0.175386,-1.463978 -0.46208,-1.846093 z"
          transform="matrix(3.6888252,6.3892327,-6.3892327,3.6888252,317,-321.17512)"
        />
        <path
          id="path17"
          :stroke="item.exp === 100 ? hover : primary"
          style="display:inline;fill:none;fill-opacity:1;stroke-width:1.5px;stroke-dasharray:none;stroke-opacity:1"
          d="m 36.97212,61.193857 c -0.637375,-0.382295 -1.463982,-0.17539 -1.846095,0.46209 -0.38194,0.637338 -0.174946,1.463635 0.462354,1.845639 0.637192,0.38219 1.463563,0.175513 1.845821,-0.461636 0.382302,-0.637366 0.175386,-1.463978 -0.46208,-1.846093 z"
          transform="matrix(3.6888252,6.3892327,-6.3892327,3.6888252,497.91808,-321.17512)"
        />
        <path
          id="path15"
          :stroke="`url(#${gradientExp}move)`"
          style="fill:none;fill-opacity:1;stroke-width:1.5px;stroke-dasharray:none;stroke-opacity:1;"
          d="m 36.949864,82.573515 5.081692,-8.782465 c 0.314647,-0.54379 0.318071,-1.216099 7.36e-4,-1.758325 l -5.20411,-8.892188"
          transform="matrix(3.6888252,6.3892327,-6.3892327,3.6888252,497.91808,-321.17512)"
        />
        <path
          id="path23"
          :fill="hover"
          filter="url(#glowDot)"
          style="display:inline;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.41853px;stroke-dasharray:none;stroke-opacity:1"
          d="m 48.167642,118.44044 a 0.85207003,0.85207003 0 0 1 -0.286079,1.16721 0.85207003,0.85207003 0 0 1 -1.168734,-0.27978 0.85207003,0.85207003 0 0 1 0.273471,-1.17023 0.85207003,0.85207003 0 0 1 1.171684,0.26716"
          :transform="`matrix(7.3776504,0,0,7.3776504,${expDot.x},${expDot.y})`"
        />
      </g>
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
          <p
            xmlns="http://www.w3.org/1999/xhtml"
            class="label"
            :style="labelStyle"
          > {{ item.label?.name ?? $t(`${i18n}.label`) }} </p>
          <p
            v-for="(sublabel, _index) in item.sublabels"
            :key="_index"
            xmlns="http://www.w3.org/1999/xhtml"
            class="label"
            :style="{
              fontSize: props.item.label?.size ?? '.45em',
              color: '#666666'
            }"
          > {{ sublabel?.name }} </p>

        </foreignObject>
      </switch>
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { INodeItem } from '~~/types/core'
const colorMode = useColorMode()
const props = defineProps({
  item: { type: Object as PropType<INodeItem>, default: () => {} },
  lvl: { type: Number, default: 20 },
  i18n: { type: String, default: '' },
  idx: { type: Number, default: 0 },
  filter: { type: String, default: '' },
  isParent: { type: Boolean, default: false }
})
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
const expDot = computed(() => (
  ((props.item?.exp ?? 0) < 50)
    ? { x: -255 + (props.item?.exp ?? 0) * 1.85, y: -657.5 }
    : { x: -200 + (props.item?.exp ?? 0) * 0.84, y: -590 - ((props.item?.exp ?? 0) * 1.45) }
))
const hoverShadow = computed(() =>
  onHover.value ? '#252525' : '#151515'
)
onMounted(() => {
  console.log(hasDescription, props.item.description, props.item.exp, props.isParent)
})
const hasDescription = computed(() => props.isParent && (props.item.description || props.item.exp))
const onHover = ref(false)
const iconPosition = computed(() => hasDescription.value ? { x: '20%', y: '5%' } : { x: '33%', y: '27%' })
const textStyle = computed(() =>
  hasDescription.value
    ? {
      x: '45%',
      y: '10%',
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
  fontSize: props.item.label?.size ?? '.80em',
  ...(props.item.mode !== undefined ? props.item.mode === 'light' ? { color: '#243746' } : { color: '#ebf4f1' } : {})
}))
const backgroundPosition = computed(() => props.isParent
  ? { x: props.item.background?.full ? '0' : '22%', y: props.item.background?.full ? '0' : '4%' }
  : { x: '31%', y: '22%' })
</script>

<style>
.wrapper {
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
  width: 24%;
  height: 22%;
}

.label {
  color: var(--color);
  stroke: none;
  bottom: 3em;
  line-height: 1.1em;
}

.icon {
  transition: x 1s ease, y 1s ease,;
}

.description {
  color: white;
  font-size: .50em;
  text-justify: distribute;
  width: 45%;
  height: 30%;
  x: 20%;
  y: 25%;
}
.description-wrapper {
  overflow: scroll;
  height: 100%;
}
.description-wrapper::before {
  content:'';
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  background: linear-gradient(transparent 50px, v-bind(hoverShadow));
}
</style>
