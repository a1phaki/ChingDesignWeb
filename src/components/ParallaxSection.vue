<template>
  <section class="parallax-section bg-danger">
    <div
      class="parallax-background rellax"
      :data-rellax-speed="props.speed"
      :style="{ backgroundImage: `url('${props.image}')` }"
    ></div>
  </section>
</template>

<style scoped>
.parallax-section {
  height: 60vh;
  position: relative;
  z-index: 5;
}
.parallax-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 150%;
  top: -25%;
  background-size: cover;
  background-position: center center;
}
</style>

<script setup>
import { onMounted, nextTick } from 'vue'
import Rellax from 'rellax'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    default: -5,
  },
})

onMounted(() => {
  nextTick(() => {
    const img = new Image()
    img.src = props.image
    img.onload = () => {
      new Rellax('.rellax', { center: true })
    }
  })
})

console.log(props.image)
</script>
