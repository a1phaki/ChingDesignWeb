<script setup>
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <footer class="bg-danger background">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="footer-text">
        <h4 class="lh-140 fw-normal fs-9">
          Thank You, <br />
          Let’s make something great together!
        </h4>
        <p class="text-muted lh-140">CHING DESIGN ©2025. All Rights Reserved.</p>
      </div>
      <div class="footer-link d-flex align-items-center">
        <a href="https://www.behance.net/chinghsuan_200028" class="pe-12">
          <div class="icon-wrapper bg-white">
            <img src="/Globe/Footer_Behance.svg" alt="behance-icon" class="icon-img" />
          </div>
        </a>
        <a href="mailto:chinghsuan2846@gmail.com">
          <div class="icon-wrapper bg-white">
            <img src="/Globe/Footer_Eenvelope.svg" alt="email-icon" class="icon-img" />
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 70px 100px;
  position: relative;
  z-index: 2;
}
.footer-text p {
  font-size: 14px;
}
.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 保護圖片不超出邊界 */
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保證圖片比例不變 */
}
</style>
