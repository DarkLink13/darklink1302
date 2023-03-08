<template>
  <g id="g247" transform="translate(-18 -27)">
    <path
      id="path21"
      :stroke="hover"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="m 101.03832,223.43409 c 0.0575,-3.44719 -2.69028,-6.2884 -6.13745,-6.34627 -3.448149,-0.0576 -6.289768,2.69171 -6.346322,6.13984 -0.0561,3.44724 2.692713,6.28738 6.139902,6.34389 3.44627,0.0562 6.286,-2.69124 6.34387,-6.13746 z"
    />
    <path
      id="path19"
      :stroke="primary"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="m 101.03832,223.43409 c 0.0575,-3.44719 -2.69028,-6.2884 -6.13745,-6.34627 -3.448149,-0.0576 -6.289768,2.69171 -6.346322,6.13984 -0.0561,3.44724 2.692713,6.28738 6.139902,6.34389 3.44627,0.0562 6.286,-2.69124 6.34387,-6.13746 z"
      transform="translate(147, -85)"
    />
    <path
      id="path17"
      :stroke="exp === 100 ? hover : primary"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="m 101.03832,223.43409 c 0.0575,-3.44719 -2.69028,-6.2884 -6.13745,-6.34627 -3.448149,-0.0576 -6.289768,2.69171 -6.346322,6.13984 -0.0561,3.44724 2.692713,6.28738 6.139902,6.34389 3.44627,0.0562 6.286,-2.69124 6.34387,-6.13746 z"
      transform="translate(-50, -85)"
    />
    <path
      id="path15"
      :stroke="gradient"
      style="fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1;"
      d="m 102.46361,223.31755 82.84547,0.0711 c 4.63508,0.004 8.93135,-2.46055 11.23706,-6.48145 l 41.64107,-72.61724"
    />
    <path
      id="path23"
      :fill="hover"
      filter="url(#glowExp)"
      style="display:inline;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5px;stroke-dasharray:none;stroke-opacity:1"
      d="m 204.78264,206.5942 a 4.1684597,4.1684597 0 0 1 -1.39955,5.71017 4.1684597,4.1684597 0 0 1 -5.71763,-1.36873 4.1684597,4.1684597 0 0 1 1.33787,-5.72494 4.1684597,4.1684597 0 0 1 5.73206,1.30698"
      :transform="`translate(${expDot.x},${expDot.y})`"
    />
  </g>
</template>

<script setup lang="ts">
const props = defineProps({
  exp: { type: Number, default: 0 },
  primary: { type: String, default: '#101010' },
  secondary: { type: String, default: '#202020' },
  hover: { type: String, default: '#404040' },
  gradient: { type: String, default: 'url(#gradient00exp)' }
})
const expDot = computed(() => (
  ((props.exp ?? 0) < 49)
    ? { x: -97 + (props.exp ?? 0) * 1.8, y: 14.5 }
    : { x: -48 + (props.exp ?? 0) * 0.84, y: 83 - ((props.exp ?? 0) * 1.45) }
))
</script>
