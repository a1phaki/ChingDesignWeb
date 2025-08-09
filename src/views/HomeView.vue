<script setup>
import CustomButton from '@/components/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-wrapper">
    <!-- 固定背景圖 -->
    <div class="fixed-bg"></div>

    <!-- 滿版內容區塊 -->
    <section class="full-height-section">
      <div class="container">
        <section class="d-flex justify-content-end">
          <div class="home-text">
            <h2 class="lh-120 fw-normal fs-1 text-success">CHING DESIGN</h2>
          </div>
        </section>
        <section class="d-flex justify-content-end py-20">
          <div class="content">
            <div class="content-bg">
              <div
                class="content-text d-flex flex-column justify-content-center align-items-center h-100"
              >
                <h3 class="fw-medium fs-3 text-dark pb-12 pt-4">Work</h3>
                <CustomButton>查看更多</CustomButton>
              </div>
              <img src="/Home/BG_Stroke.svg" alt="背景曲線" class="img-overlay img-fluid" />

              <RouterLink to="/work/lineLiff">
                <img src="/Home/Sticker_1.svg" alt="貼紙一" class="sticker-1" />
              </RouterLink>
              <RouterLink to="/work/lineLiff">
                <img src="/Home/Sticker_2.svg" alt="貼紙二" class="sticker-2" />
              </RouterLink>
              <RouterLink to="/work/lineLiff">
                <img src="/Home/Sticker_3.svg" alt="貼紙三" class="sticker-3" />
              </RouterLink>
              <RouterLink to="/work/lineLiff">
                <img src="/Home/Sticker_4.svg" alt="貼紙四" class="sticker-4" />
              </RouterLink>
            </div>
          </div>
        </section>
        <section class="d-flex justify-content-end py-20">
          <div class="content">
            <div class="content-bg d-flex align-items-center justify-content-center flex-column">
              <div
                class="personal-card d-flex bg-danger border border-1 border-secondary py-20 px-12 mb-20"
              >
                <img src="/Home/Avtar.svg" alt="大頭貼" class="personal-card-img img-fluid pe-12" />
                <div class="information">
                  <h4 class="text-success fw-medium fs-7">Profile</h4>
                  <hr />
                  <p>
                    目前是一位 UI/UX
                    設計師，擅長設計網站的介面樣式，能把抽象的需求轉成清楚好讀的網頁畫面，嘗試在限制中找到合適的解法。
                  </p>
                </div>
              </div>
              <CustomButton class="mt-12">查看更多</CustomButton>
            </div>
          </div>
        </section>
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
  background-image: url('/Home/BG_Image.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;
}
/* 整區撐滿視窗 */
.full-height-section {
  position: relative;
  z-index: 10;
}
.home-text {
  width: 60%;
  padding: 305px 113px;
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
.sticker-1:hover {
  transform: rotate(-15deg) scale(1.05);
}
.sticker-2 {
  position: absolute;
  width: 40%;
  top: 4%;
  right: 6%;
  z-index: 22;
  transition: transform 0.3s ease;
}
.sticker-2:hover {
  transform: rotate(-15deg) scale(1.05);
}
.sticker-3 {
  position: absolute;
  width: 45%;
  bottom: 5%;
  left: 7%;
  z-index: 22;
  transition: transform 0.3s ease;
}
.sticker-3:hover {
  transform: rotate(15deg) scale(1.05);
}
.sticker-4 {
  position: absolute;
  width: 35%;
  bottom: 7%;
  right: 6%;
  z-index: 22;
  transition: transform 0.3s ease;
}
.sticker-4:hover {
  transform: rotate(15deg) scale(1.05);
}
.personal-card {
  max-width: 70%;
  border-radius: 12px;
  transform: rotate(8deg);
  animation: floatUpDown 2s ease-in-out infinite;
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
