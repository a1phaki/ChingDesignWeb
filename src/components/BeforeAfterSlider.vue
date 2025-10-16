<template>
  <div class="d-flex align-items-center justify-content-center pt-16">
    <div class="slider-container">
      <img :src="afterImg" class="after-img" />

      <div class="before-wrapper" :style="{ width: sliderValue + '%' }">
        <img :src="beforeImg" class="before-img" />
      </div>

      <!-- 中間滑桿 -->
      <div class="divider" :style="{ left: sliderValue + '%' }">
        <div class="handle">
          <span class="arrow left"></span>
          <span class="arrow right"></span>
        </div>
      </div>

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
  height: 100%;
  object-fit: cover;
}

/* 白線 */
.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: white;
  z-index: 3;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.handle {
  position: absolute; /* ← 改這個 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 讓它正中間 */
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%; /* 保證是圓 */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

/* 左右箭頭 */
.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.arrow.left {
  border-right: 8px solid white;
  left: 8px;
}

.arrow.right {
  border-left: 8px solid white;
  right: 8px;
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
