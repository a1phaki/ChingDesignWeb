<script setup>
import CustomButton from '@/components/Button.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const bgVideo = ref(null)
const { isSm } = useBreakpoint()

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
    ? 'Globe/HomeAnimation/iOSAnimation.mov'
    : 'Globe/HomeAnimation/chromeAnimation.webm'
  source.type = useMOV ? 'video/quicktime' : 'video/webm'

  video.appendChild(source)
})
</script>

<template>
  <div class="page-wrapper background">
    <!-- 固定背景圖 -->
    <div class="fixed-bg d-flex justify-content-start align-items-center">
      <video ref="bgVideo" autoplay muted loop playsinline></video>
    </div>

    <!-- 滿版內容區塊 -->
    <section class="full-height-section">
      <div class="container">
        <div class="row">
          <section class="col-md-8 offset-md-4 col-12 p-0">
            <div class="home-text w-100 h-100">
              <h2 class="lh-120 fw-normal fs-1 text-success text-center">CHING DESIGN</h2>
            </div>
          </section>
          <section class="col-lg-7 offset-lg-5 col-12 p-0 py-20 col-12">
            <div class="content w-100 h-100">
              <div v-if="isSm()" class="content-bg">
                <div class="content-text d-flex flex-column align-items-center h-100">
                  <h3 class="fw-medium fs-3 text-dark pb-12 pt-11">Work</h3>
                  <div class="pb-10">
                    <RouterLink to="/work/lineLiff">
                      <img src="/Home/sticker-1.png" alt="貼紙一" class="sticker-sm-1" />
                    </RouterLink>
                  </div>
                  <div class="pb-10">
                    <RouterLink to="/work/chargingStation">
                      <img src="/Home/sticker-2.png" alt="貼紙二" class="sticker-sm-2" />
                    </RouterLink>
                  </div>
                  <div class="pb-10">
                    <RouterLink to="/work/commandCenterDashboard">
                      <img src="/Home/sticker-3.png" alt="貼紙三" class="sticker-sm-3" />
                    </RouterLink>
                  </div>
                  <div class="pb-10">
                    <RouterLink to="/work/platformRedesign">
                      <img src="/Home/sticker-4.png" alt="貼紙四" class="sticker-sm-4" />
                    </RouterLink>
                  </div>
                  <div class="pb-16">
                    <RouterLink to="/work">
                      <CustomButton> 查看更多 </CustomButton>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div v-else class="content-bg">
                <div
                  class="content-text d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <h3 class="fw-medium fs-3 text-dark pb-12 pt-4">Work</h3>

                  <RouterLink to="/work">
                    <CustomButton> 查看更多 </CustomButton>
                  </RouterLink>
                </div>
                <img src="/Home/BG_Stroke.svg" alt="背景曲線" class="img-overlay img-fluid" />

                <RouterLink to="/work/lineLiff">
                  <img src="/Home/sticker-1.png" alt="貼紙一" class="sticker-1" />
                </RouterLink>
                <RouterLink to="/work/chargingStation">
                  <img src="/Home/sticker-2.png" alt="貼紙二" class="sticker-2" />
                </RouterLink>
                <RouterLink to="/work/commandCenterDashboard">
                  <img src="/Home/sticker-3.png" alt="貼紙三" class="sticker-3" />
                </RouterLink>
                <RouterLink to="/work/platformRedesign">
                  <img src="/Home/sticker-4.png" alt="貼紙四" class="sticker-4" />
                </RouterLink>
              </div>
            </div>
          </section>
          <section class="col-lg-7 offset-lg-5 col-12 p-0 py-20 col-12">
            <div class="content w-100 h-100">
              <div
                v-if="isSm()"
                class="content-bg d-flex align-items-center justify-content-center flex-column py-16"
              >
                <div
                  class="personal-card bg-danger border border-1 border-secondary py-14 px-8 mb-20 d-flex flex-column align-items-center"
                >
                  <img
                    src="/Home/Avtar.svg"
                    alt="大頭貼"
                    class="personal-card-img img-fluid pb-6"
                  />
                  <h4 class="text-success fw-medium fs-7">Profile</h4>
                  <hr class="pb-6" />
                  <p>
                    目前是一位 UI/UX
                    設計師，擅長將抽象需求轉化為具體的互動流程與介面設計，能兼顧使用體驗與視覺表現，並在限制中找到符合產品定位的解法。
                  </p>
                </div>
                <RouterLink to="/profile">
                  <CustomButton> 查看更多 </CustomButton>
                </RouterLink>
              </div>

              <div
                v-else
                class="content-bg d-flex align-items-center justify-content-center flex-column"
              >
                <div
                  class="personal-card d-flex bg-danger border border-1 border-secondary py-20 px-12 mb-20"
                >
                  <img
                    src="/Home/Avtar.svg"
                    alt="大頭貼"
                    class="personal-card-img img-fluid pe-12"
                  />
                  <div class="information">
                    <h4 class="text-success fw-medium fs-7">Profile</h4>
                    <hr />
                    <p>
                      目前是一位 UI/UX
                      設計師，擅長將抽象需求轉化為具體的互動流程與介面設計，能兼顧使用體驗與視覺表現，並在限制中找到符合產品定位的解法。
                    </p>
                  </div>
                </div>
                <RouterLink to="/profile">
                  <CustomButton> 查看更多 </CustomButton>
                </RouterLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-wrapper {
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

/* 固定背景圖層 */
.fixed-bg {
  position: fixed;
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

/* 整區撐滿視窗 */
.full-height-section {
  position: relative;
  z-index: 10;
}
.home-text {
  padding: 305px 0%;
}
.content {
  width: 60%;
  min-height: 80vh;
  max-height: 100vh;
}
.content-bg {
  background-color: white;
  width: 100%;
  height: 100%;
  background-image: url('/Home/BG_Gird.svg');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 20;
  border-radius: 12px;
}
@media (max-width: 768px) {
  .content {
    width: 90%; /* 手機可以撐到更寬，或者 100% */
    min-height: auto; /* 解除固定最小高度 */
    max-height: none; /* 解除最大高度限制 */
  }

  .content-bg {
    height: auto; /* 背景容器跟著內容高度撐開 */
  }
}
.img-overlay {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  object-fit: contain;
  pointer-events: none;
  z-index: 21;
  transform: rotate(-4.45deg);
}
.content-text {
  position: relative;
  z-index: 22;
}
.sticker-1 {
  position: absolute;
  width: 40%;
  top: 4%;
  left: 6%;
  z-index: 22;
  transition: transform 0.3s ease;
}
.sticker-sm-1 {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease;
}
.sticker-1:hover,
.sticker-sm-1:hover {
  transform: rotate(-15deg) scale(1.05);
}
.sticker-2 {
  position: absolute;
  width: 40%;
  top: 4%;
  right: 6%;
  z-index: 22;
  rotate: 10deg;
  transition: transform 0.3s ease;
}
.sticker-sm-2 {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  rotate: 10deg;
  transition: transform 0.3s ease;
}
.sticker-2:hover,
.sticker-sm-2:hover {
  transform: rotate(-15deg) scale(1.05);
}
.sticker-3 {
  position: absolute;
  width: 45%;
  bottom: 10%;
  left: 7%;
  z-index: 22;
  transition: transform 0.3s ease;
  rotate: 8deg;
}
.sticker-sm-3 {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease;
  rotate: 8deg;
}
.sticker-3:hover,
.sticker-sm-3:hover {
  transform: rotate(-15deg) scale(1.05);
}
.sticker-4 {
  position: absolute;
  width: 35%;
  bottom: 7%;
  right: 6%;
  z-index: 22;
  transition: transform 0.3s ease;
  rotate: -10deg;
}
.sticker-sm-4 {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease;
  rotate: -10deg;
}
.sticker-4:hover,
.sticker-sm-4:hover {
  transform: rotate(15deg) scale(1.05);
}
.personal-card {
  max-width: 70%;
  border-radius: 12px;
  transform: rotate(8deg);
  animation: floatUpDown 2s ease-in-out infinite;
}
.personal-card hr {
  align-self: stretch; /* 在 flex container 裡拉滿寬 */
}
@media (max-width: 768px) {
  .personal-card {
    width: 50%; /* 手機可以撐到更寬，或者 100% */
  }
}
.personal-card-img {
  max-width: 170px;
  max-height: 170px;
}
@keyframes floatUpDown {
  0% {
    transform: translateY(0) rotate(8deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: translateY(-10px) rotate(8deg);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: translateY(0) rotate(8deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
