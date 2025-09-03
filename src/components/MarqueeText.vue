<template>
  <div class="marquee w-100">
    <div class="marquee-bg"></div>
    <div class="fs-5 fw-medium d-flex align-items-center special-text">
      <span>{{ props.content }}</span>
      <span>{{ props.content }}</span>
      <span>{{ props.content }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira&display=swap');

.marquee {
  height: 90px;
  position: relative;
  background: #111; /* 外框底色，可自行調整 */
  overflow: hidden;
}

/* 背景固定，不跟動畫一起動 */
.marquee-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #4185af, #37be84);
}

/* 文字區塊跑馬動畫 */
.marquee div:not(.marquee-bg) {
  display: block;
  width: 200%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: none; /* 移除背景，避免跟動畫一起動 */
  animation: marquee 8s linear infinite;
}

.marquee span {
  float: left;
  width: 50%;
  color: white; /* 文字顏色，避免跟背景混在一起 */
}

/* 跑馬燈動畫 */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.333%); /* 移動「三分之一」寬度 */
  }
}

.special-text {
  font-family: 'Saira', sans-serif;
}
</style>
