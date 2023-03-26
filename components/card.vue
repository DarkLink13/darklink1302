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
          x1="101.99053"
          y1="223.71323"
          x2="175.53043"
          y2="223.9131"
          gradientTransform="matrix(1.0699239,0,0,0.99893676,-22.806422,3.002875)"
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
        :height="isParent ? item.background.full ? '86%' : hasDetails ? '10%' : '20%' : '25%'"
        :xlink:href="item.background.src"
        preserveAspectRatio="xMidYMin slice"
        :x="backgroundPosition.x"
        :y="backgroundPosition.y"
      />
      <switch v-if="hasDetails && (props.item.description || hasI18nDescription)">
        <foreignObject class="description">
          <p class="description-wrapper" xmlns="http://www.w3.org/1999/xhtml">
            {{ props.item.description || i18nDescription }}
          </p>
        </foreignObject>
      </switch>
      <Exp
        v-if="hasDetails && item.exp"
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
        :size="item.icon?.size ?? hasDetails ? '2em' : '4em'"
        :x="iconPosition.x"
        :y="iconPosition.y"
      />
      <switch>
        <foreignObject class="text" :style="textStyle">
          <a
            xmlns="http://www.w3.org/1999/xhtml"
            class="label title"
            v-bind="
              item.label?.type === NodeItemLabelType.Link ?
                { href: item.label?.subvalue, target: '_blank' } :
                {}
            "
            :style="labelStyle"
            @click.stop
          > <Icon v-if="item.label?.subvalue && isParent" class="!relative" size="8" name="material-symbols:link-sharp" /> {{ $te(`${i18n}.label`) ? $t(`${i18n}.label`) : item.label?.value }}
          </a>
          <p
            wrap="off"
            xmlns="http://www.w3.org/1999/xhtml"
            class="label"
            :style="{
              fontSize: '.5em',
              color: '#666666'
            }"
            v-text="getSublabel(item.sublabels ?? [])"
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
const hasI18nDescription = computed(() => te(`${props.i18n}.description`) || te(`tech.${props.item.id}.description`))
const i18nDescription = computed(() => te(`${props.i18n}.description`) ? t(`${props.i18n}.description`) : t(`tech.${props.item.id}.description`))
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
const getSublabel = (sublabels: INodeItemLabel[]) => {
  let sublabel = ''
  for (const [index, sub] of sublabels.entries()) {
    if (index !== 0) sublabel += ' | '
    switch (sub.type) {
      case NodeItemLabelType.Role: sublabel += t(`npre.role.${sub.value}`); break
      case NodeItemLabelType.Date: sublabel += sub.value; break
      case NodeItemLabelType.Country: sublabel += t('npre.country.' + sub.value); break
      case NodeItemLabelType.Since: sublabel += `${t('npre.since')} ${sub.value}`; break
      case NodeItemLabelType.Version: sublabel += `${t('npre.versions')} ${sub.value}`; break
      case NodeItemLabelType.Years: sublabel += `${sub.value} ${t('npre.years')}`; break
      case NodeItemLabelType.WorkType: sublabel += `${t('npre.workType.' + sub.value)} | ${t('npre.workSchedule.' + sub.subvalue)}`; break
      default: sublabel += sub.value; break
    }
  }
  return sublabel
}
const hasDetails = computed(() => props.isParent && (props.item.description || props.item.exp || hasI18nDescription.value))
const onHover = ref(false)
const iconPosition = computed(() => hasDetails.value ? { x: '21%', y: '3%' } : { x: '32%', y: '27%' })
const textStyle = computed(() =>
  hasDetails.value
    ? {
      x: '32%',
      y: '4%',
      textAlign: 'left',
      textAnchor: 'middle'
    } as CSSProperties
    : {
      x: '26%',
      y: props.item.label?.bottom ?? '50%',
      textAlign: 'center',
      textAnchor: 'middle'
    } as CSSProperties
)
const labelStyle = computed(() => ({
  fontSize: props.item.label?.size ?? '.65em',
  fontWeight: '600',
  ...(props.item.label?.color !== undefined ? { color: props.item.label?.color } : { color: props.item.label?.type === NodeItemLabelType.Link ? secondary.value : '' })
}))
const backgroundPosition = computed(() =>
  props.item.background?.full
    ? { x: 0, y: 0 }
    : hasDetails.value
      ? { x: '21%', y: '4%' }
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

.title {
  line-height: 1em !important;
  padding-bottom: 3px;
}

.icon > * {
  stroke: none;
  fill: v-bind(gradientUrl) !important;
}

.text {
  overflow: hidden;
  width: 35%;
  height: 15%;
  max-height: 55%;
}

.label {
  color: var(--color);
  stroke: none;
  overflow: hidden;
  line-height: 1.1em;
  display: block;
}

.icon {
  transition: x 1s ease, y 1s ease,;
}

.description {
  color: var(--color);
  font-size: .60em;
  overflow: hidden;
  text-justify: distribute;
  width: 60%;
  height: 42%;
  x: 13%;
  y: 19%;
}

.description-wrapper {
  overflow-y: scroll;
  height: 100%;
}

.description-wrapper::-webkit-scrollbar {
  width: 7px;
}
.description-wrapper::-webkit-scrollbar-thumb:vertical {
  width: 100%;
  background-color: v-bind(primary);
  /* border: 1px solid v-bind(primary); */
  -webkit-border-radius: 5px;
}
</style>
