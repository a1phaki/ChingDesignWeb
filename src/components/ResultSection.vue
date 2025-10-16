<template>
  <section class="result bg-danger background">
    <div class="fixed-bg d-flex justify-content-start align-items-center">
      <video ref="bgVideo" autoplay muted loop playsinline></video>
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

import { ref, onMounted } from 'vue'

const props = defineProps({
  content: { type: String, required: true },
})

const bgVideo = ref(null)

onMounted(() => {
  const video = bgVideo.value
  if (!video) return

  // 判斷是否為 iOS
  const ua = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 0)
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua)

  // ✅ Safari 一律用 mov/mp4，其餘用 webm
  const useMOV = isIOS || isSafari

  // 動態建立 <source>
  const source = document.createElement('source')
  source.src = useMOV
    ? 'Globe/SectionAnimation/iOSAnimation.mov'
    : 'Globe/SectionAnimation/chromeAnimation.webm'
  source.type = useMOV ? 'video/quicktime' : 'video/webm'

  video.appendChild(source)
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
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none; /* 不影響點擊 */
  overflow: hidden;
}

.fixed-bg video {
  width: 85%;
  height: 100%;
  overflow: visible;
}
</style>
