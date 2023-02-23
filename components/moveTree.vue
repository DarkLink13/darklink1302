<template>
  <Transition name="move">
    <slot />
  </Transition>
</template>
<script setup>
const props = defineProps({
  index: { type: Number, default: 0 },
  enter: { type: Boolean, default: true }
})
const enterX = computed(() => useX(props.index, 100 * (0.87 + (0.18 * +props.enter))))
const enterY = computed(() => useY(props.index, 100 * (0.87 + (0.18 * +props.enter))))
const leaveX = computed(() => useX((props.index + 3) % 6, 100 * (1.05 - (0.18 * +props.enter))))
const leaveY = computed(() => useY((props.index + 3) % 6, 100 * (1.05 - (0.18 * +props.enter))))
const scaleLeaveIdx = computed(() => 1 - (-0.22 + (0.44 * +props.enter)))
const scaleEnterIdx = computed(() => 1 + (-0.22 + (0.44 * +props.enter)))
</script>
<style>
@keyframes move {
    0% {
      opacity: 1;
      transform:  translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(v-bind(leaveX), v-bind(leaveY))  scale(v-bind(scaleLeaveIdx))
    }
}
@keyframes move-reverse {
    0% {
      opacity: 0;
      transform: translate(v-bind(enterX), v-bind(enterY)) scale(v-bind(scaleEnterIdx));
    }
    100% {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
}

.move-enter-active {
  position: absolute !important;
  height: 100% !important;
  animation: move-reverse .2s linear;
}

.move-leave-active {
  animation: move .2s linear;
}

</style>
