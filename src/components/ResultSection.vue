<template>
  <section class="result bg-danger background">
    <div class="fixed-bg">
      <video autoplay muted loop playsinline>
        <source src="/Globe/BG_Video_simple.webm" type="video/webm" />
      </video>
    </div>
    <div class="container d-flex flex-column align-items-center">
      <BaseDot text="成果後記" class="pb-4" />
      <p class="mb-0">
        {{ props.content }}
      </p>
    </div>
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'
const props = defineProps({
  content: { type: String, required: true },
})
</script>

<style scoped>
.result {
  width: 100%;
  position: relative; /* 讓 .fixed-bg 以 section 為基準定位 */
  z-index: 10;
  padding: 100px 176px;
  overflow: hidden; /* 避免影片超出 */
}

.fixed-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 在內容下方 */
  overflow: hidden;
}

.fixed-bg video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 影片鋪滿，維持比例 */
}
</style>
