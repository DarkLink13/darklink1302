<template>
  <div class="wrapper">
    <EffectGradient :lvl="lvl.toString()" :idx="idx.toString()" :stops="stops.background" />
    <EffectGradient :lvl="lvl.toString()" :idx="idx + 'hover'" :stops="stops.hover" />
    <EffectGradient v-if="item.exp" :lvl="lvl.toString()" :idx="idx + 'exp'" :stops="stops.exp" />
    <svg height="100%" width="100%">
      <defs>
        <clipPath id="image">
          <BackgroundPath />
        </clipPath>
        <linearGradient v-if="item.exp" :id="`${gradientExp}move`" :xlink:href="`#${gradientExp}`" v-bind="linearGradientAttrs" />
      </defs>
    </svg>
    <svg
      v-bind="svgCardAttrs"
      :class="{ card: true, 'hover': onHover }"
      :stroke="gradientUrl"
      @mouseover="() => onHover = true"
      @mouseleave="() => onHover = false"
    >

      <BackgroundPath :fill="`url(#gradient00${item.mode ?? $colorMode.value})`" :filter="filter" />
      <image
        v-if="item.background"
        v-bind="{ ...backgroundPosition, ...imageCardAttrs }"
        :height="isParent ? item.background.full ? '80%' : hasDetails ? '10%' : '20%' : '25%'"
        :xlink:href="backgroundResponsive"
      />
      <switch v-if="hasDetails && (props.item.description || hasI18nDescription)">
        <foreignObject class="description">
          <p class="description-wrapper" xmlns="http://www.w3.org/1999/xhtml">
            {{ props.item.description || i18nDescription }}
          </p>
        </foreignObject>
      </switch>
      <EffectExp
        v-if="hasDetails && item.exp"
        v-bind="{ primary, hover, secondary }"
        :gradient="`url(#${gradientExp}move)`"
        :exp="item.exp"
      />
      <Icon
        v-if="item.icon"
        :class="{'hover': onHover }"
        :name="item.icon?.key"
        :size="item.icon?.size ?? hasDetails ? '2em' : '4em'"
        v-bind="iconPosition"
      />
      <switch>
        <foreignObject class="text" :style="textStyle">
          <a v-bind="linkTextAttrs(item.label)" :style="labelStyle" @click.stop>
            <Icon v-if="item.label?.subvalue && isParent" v-bind="linkAttrs" class="!relative" />
            {{ $te(`${i18n}.label`) ? $t(`${i18n}.label`) : item.label?.value }}
          </a>
          <component
            :is="item.sublabels[0].type === NodeItemLabelType.Link ? 'a' : 'p'"
            v-if="item.sublabels"
            v-bind="linkTextAttrs(item.sublabels[0])"
            @click.stop
          >
            <Icon v-if="item.sublabels[0]?.subvalue && isParent" v-bind="linkAttrs" class="!relative" />
            {{ getSublabel(item.sublabels ?? []) }}
          </component>
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

// texts
const { t, te } = useI18n()
const hasI18nDescription = computed(() => te(`${props.i18n}.description`) || te(`tech.${props.item.id}.description`))
const i18nDescription = computed(() => te(`${props.i18n}.description`) ? t(`${props.i18n}.description`) : t(`tech.${props.item.id}.description`))
const hasDetails = computed(() => props.isParent && (props.item.description || props.item.exp || hasI18nDescription.value))
const labelStyle = computed(() => ({
  fontSize: props.item.label?.size ?? '.65em',
  fontWeight: '600',
  ...(props.item.label?.color !== undefined ? { color: props.item.label?.color } : { color: props.item.label?.type === NodeItemLabelType.Link ? secondary.value : '' })
}))
const textStyle = computed(() =>
  hasDetails.value
    ? {
      x: !props.item.sublabels ? '18%' : '33%',
      y: !props.item.sublabels ? '13.5%' : '4%',
      width: !props.item.sublabels ? '50%' : '35%',
      textAlign: !props.item.sublabels ? 'center' : 'left',
      textAnchor: 'middle'
    } as CSSProperties
    : {
      width: '35%',
      x: '26%',
      y: props.item.label?.bottom ?? '50%',
      textAlign: 'center',
      textAnchor: 'middle'
    } as CSSProperties
)
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
const { width } = useBreakpoints()

// background
const backgroundResponsive = computed(() => props.item.background?.src.replace('.png', (width.value < 500 ? '48' : '256') + '.png'))

// colors
const primary = computed(() => props.item.colors?.primary ?? '#101010')
const secondary = computed(() => props.item.colors?.secondary ?? '#202020')
const hover = computed(() => props.item.colors?.hover ?? '#404040')
const onHover = ref(false)

// gradients
const gradientHover = computed(() => `url(#gradient${props.lvl}${props.idx}hover)`)
const gradientHoverMode = computed(() => `url(#gradient01${props.item.mode ?? colorMode.value})`)
const gradientExp = computed(() => `gradient${props.lvl}${props.idx}exp`)
const gradientUrl = computed(() => `url(#gradient${props.lvl}${props.idx})`)

// glows
const stops = computed(() =>
  ({
    background: [{ color: primary.value, offset: '0%' }, { color: secondary.value, offset: '100%' }],
    hover: [{ color: secondary.value, offset: '0%' }, { color: hover.value, offset: '100%' }],
    exp: [
      { color: hover.value, offset: '0%', opacity: '1' },
      { color: hover.value, offset: ((props.item.exp ?? 50) - 1) + '%', opacity: '1' },
      { color: primary.value, offset: ((props.item.exp ?? 50) + 1) + '%', opacity: '1' },
      { color: primary.value, offset: '100%', opacity: '1' }
    ]
  }))

// positions
const iconPosition = computed(() => hasDetails.value ? { x: !props.item.sublabels ? '37%' : '21%', y: '3%' } : { x: '32%', y: '27%' })
const backgroundPosition = computed(() =>
  props.item.background?.full
    ? { x: 0, y: 0 }
    : hasDetails.value
      ? { x: !props.item.sublabels ? '37%' : '21%', y: '4%' }
      : { x: props.isParent ? '33%' : '31%', y: props.isParent ? '27%' : '22%' }
)
const linkTextAttrs = (label: INodeItemLabel | undefined) =>
  ({
    ...(label?.type === NodeItemLabelType.Link ? { href: label?.subvalue, target: '_blank' } : {}),
    // wrap: 'off',
    xmlns: 'http://www.w3.org/1999/xhtml',
    class: 'label title'
  })

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
  height: 15%;
  max-height: 55%;
}

.label {
  color: var(--color);
  stroke: none;
  overflow: hidden;
  line-height: 1.1em;
  display: block;
  font-size: .5em;
  color: #666666;
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
  y: 20%;
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
  -webkit-border-radius: 5px;
}
</style>
