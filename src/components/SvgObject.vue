<template>
  <object type="image/svg+xml" :data="svgSrc" width="200" height="200" class="svg-object"></object>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  customClass: { type: [String, Array, Object], default: '' },
})
// 在 script 裡先組路徑
const svgSrc = `${import.meta.env.BASE_URL}${props.src}`
</script>

<style scoped>
.svg-object {
  width: 100%; /* 撐滿父元素寬度 */
  height: auto; /* 高度自動，保持比例 */
}
</style>
