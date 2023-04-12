<template>
  <g id="expWrapper">
    <path
      id="leftTerminal"
      :stroke="hover"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="m 24.359104,105.35783 c -3.448146,-0.0576 -6.28915,2.6925 -6.345703,6.14063 -0.0561,3.44723 2.693439,6.28724 6.140624,6.34375 3.446267,0.0562 6.285878,-2.69246 6.343748,-6.13868 0.0575,-3.44718 -2.691503,-6.28783 -6.138669,-6.3457 z"
    />
    <path
      id="rightTerminal"
      :stroke="primary"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="m 225.55202,105.35783 c -3.44814,-0.0576 -6.28915,2.6925 -6.3457,6.14063 -0.0561,3.44723 2.69344,6.28724 6.14062,6.34375 3.44627,0.0562 6.28588,-2.69246 6.34375,-6.13868 0.0575,-3.44718 -2.6915,-6.28783 -6.13867,-6.3457 z"
    />
    <path
      id="exp"
      :stroke="gradient"
      style="display:inline;fill:none;fill-opacity:1;stroke-width:8px;stroke-dasharray:none;stroke-opacity:1"
      d="M 174.04297 190.05469 C 170.59482 189.99709 167.75382 192.74523 167.69727 196.19336 C 167.64117 199.6406 170.38876 202.48255 173.83594 202.53906 C 177.2822 202.59526 180.12182 199.84661 180.17969 196.40039 C 180.23719 192.9532 177.49013 190.11256 174.04297 190.05469 z M 75.871094 190.08789 C 72.422954 190.03029 69.581943 192.78039 69.525391 196.22852 C 69.469291 199.67573 72.218838 202.51576 75.666016 202.57227 C 79.112276 202.62847 81.951897 199.87981 82.009766 196.43359 C 82.067266 192.98643 79.318252 190.14576 75.871094 190.08789 z M 85.070312 196.36523 L 164.63281 196.43555 L 85.070312 196.36523 z "
    />
    <path
      id="glowDot"
      :fill="hover"
      :transform="`translate(${expDot.x},${expDot.y})`"
      filter="url(#glowExp)"
      d="m 150.46747,194.66243 a 3.5694512,3.5694512 0 0 1 -1.19844,4.88962 3.5694512,3.5694512 0 0 1 -4.896,-1.17204 3.5694512,3.5694512 0 0 1 1.14562,-4.90227 3.5694512,3.5694512 0 0 1 4.90836,1.11917"
      style="display:inline;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.2815px;stroke-dasharray:none;stroke-opacity:1"
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
const expDot = computed(() => ({ x: -70 + (props.exp ?? 0) * 0.90, y: 0 }
))
</script>
