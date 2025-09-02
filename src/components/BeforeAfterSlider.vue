<template>
  <div class="d-flex align-items-center justify-content-center pt-16">
    <div class="slider-container">
      <img :src="afterImg" class="after-img" />

      <div class="before-wrapper" :style="{ width: sliderValue + '%' }">
        <img :src="beforeImg" class="before-img" />
      </div>

      <!-- 中間滑動線 -->
      <div class="divider" :style="{ left: sliderValue + '%' }"></div>

      <!-- 滑桿透明覆蓋 -->
      <input type="range" min="0" max="100" v-model="sliderValue" class="slider" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  beforeImg: { type: String, required: true },
  afterImg: { type: String, required: true },
})

// 初始滑桿 50% 居中
const sliderValue = ref(50)
</script>

<style scoped>
.slider-container {
  position: relative;
  display: inline-block;
  width: 80%;
  overflow: hidden;
  border-radius: 16px;
}

.after-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.before-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  z-index: 2;
}

.before-wrapper img {
  display: block;
  width: 100%;
  height: 100%; /* 高度填滿容器 */
  object-fit: cover;
  object-position: left; /* 保證從左邊開始裁切 */
}

/* 中間白線 */
.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: white;
  z-index: 3;
  pointer-events: none;
}

/* 滑桿透明覆蓋 */
.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  -webkit-appearance: none;
  cursor: ew-resize;
  z-index: 4;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 100%;
  background: transparent;
  cursor: ew-resize;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 100%;
  background: transparent;
  cursor: ew-resize;
}
</style>
