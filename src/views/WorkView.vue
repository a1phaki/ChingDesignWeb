<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fixed-bg"></div>
  <section class="relative">
    <div class="container">
      <h2 class="text-dark h1 pb-8 mb-0 fw-medium pt-8">Work</h2>
      <div class="row g-16">
        <div class="col-6">
          <RouterLink to="/work/lineLiff" class="text-decoration-none">
            <img src="/Work_Overview/LINELiff.svg" alt="work-img-1" class="img-fluid work-img" />
            <div class="tag pt-8" @click.stop>
              <span class="button border border-1 border-success text-success lh-170 me-3">
                Moible
              </span>
              <span class="button border border-1 border-success text-success lh-170">
                LINE Liff Design
              </span>
            </div>
            <h3 class="text-success fs-8 lh-170 fw-medium py-3 m-0">星舟快充 LINE Liff 設計</h3>
            <p class="lh-170">
              星舟快充致力於電動車充電服務，本次改版優化 LINE 操作介面，讓使用者充電更直覺順暢。
            </p>
          </RouterLink>
        </div>
        <div class="col-6">
          <RouterLink to="/work/lineLiff" class="text-decoration-none">
            <img
              src="/Work_Overview/ChargingStationDSSDesign.svg"
              alt="work-img-2"
              class="img-fluid work-img"
            />
            <div class="tag pt-8" @click.stop>
              <span class="button border border-1 border-success text-success lh-170 me-3">
                Web
              </span>
              <span class="button border border-1 border-success text-success lh-170">
                Charging Station DSS Design
              </span>
            </div>
            <h3 class="text-success fs-8 lh-170 fw-medium py-3 m-0">智慧開電選址系統</h3>
            <p class="lh-170">
              一套企業內部的智慧選址決策系統，用於評估充電站場址的開發潛力，整合地理與商業數據，提供多維度評分分析。
            </p>
          </RouterLink>
        </div>
        <div class="col-6">
          <RouterLink to="/work/lineLiff" class="text-decoration-none">
            <img
              src="/Work_Overview/CommandCenterDashboard.svg"
              alt="work-img-3"
              class="img-fluid work-img"
            />
            <div class="tag pt-8" @click.stop>
              <span class="button border border-1 border-success text-success lh-170 me-3">
                Cross Platform
              </span>
              <span class="button border border-1 border-success text-success lh-170">
                Command Center Dashboard
              </span>
            </div>
            <h3 class="text-success fs-8 lh-170 fw-medium py-3 m-0">能源戰情系統展示牆</h3>
            <p class="lh-170">
              呈現公司在亞太地區的能源佈局與營運績效，設計重點在於資訊整合與視覺化。幫助決策者快速掌握多區域數據，也可直觀展示公司營運實績與競爭優勢。
            </p>
          </RouterLink>
        </div>
        <div class="col-6">
          <RouterLink to="/work/lineLiff" class="text-decoration-none">
            <img
              src="/Work_Overview/PlatformRedesign.svg"
              alt="work-img-4"
              class="img-fluid work-img"
            />
            <div class="tag pt-8" @click.stop>
              <span class="button border border-1 border-success text-success lh-170 me-3">
                Web
              </span>
              <span class="button border border-1 border-success text-success lh-170">
                Platform Redesign
              </span>
            </div>
            <h3 class="text-success fs-8 lh-170 fw-medium py-3 m-0">綠電平台視覺與架構優化</h3>
            <p class="lh-170">
              此次改版聚焦於媒合購售電雙方的流程設計，並改善原有系統的使用痛點，重整資訊架構與介面視覺，打造更直覺、符合內部工作流程的使用體驗。
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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
.relative {
  position: relative;
  z-index: 10;
  margin-bottom: 148px;
}
.button {
  border-radius: 100px;
  padding: 6px 20px;
  font-size: 12px;
}
.work-img {
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}
p {
  color: #25262d;
}
.tag {
  cursor: default; /* 不顯示手指箭頭 */
}
</style>
