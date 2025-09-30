<script setup>
import BaseDot from '@/components/Dot.vue'
import OthersWorkSection from '@/components/OthersWorkSection.vue'
import { onMounted, onUnmounted } from 'vue'

const workExperience = [
  {
    img: 'Profile/HDRE.svg',
    company: '泓德能源科技股份有限公司',
    role: '產品設計師',
    period: '2024 三月- 目前',
    responsibilities: [
      {
        title: '介面設計',
        description: '參與能源企業戰情牆及綠電媒合平台等專案，將抽象需求轉化為清晰直觀的操作介面。',
      },
      {
        title: '標準化流程建立',
        description: '與團隊共同規劃標準化流程與文件，提升團隊跨部門協作效率及交付一致性。',
      },
      {
        title: '協作與專案推進',
        description:
          '與 PM、前端及其他設計師密切合作，確保專案按時交付，並持續改善產品可用性與設計品質。',
      },
    ],
  },
  {
    img: 'Profile/Beseye.svg',
    company: '泓德能源百分百持股雲守護安控股份有限公司',
    role: '品牌與介面設計師',
    period: '2023 六月- 2024三月',
    responsibilities: [
      {
        title: '介面設計',
        description: '參與電動車充電服務前後台設計，優化操作流程與使用者互動體驗。',
      },
      {
        title: '協作與專案推進',
        description:
          '與 PM及前端工程師密切合作，確保專案按時交付，並持續改善產品可用性與設計品質。',
      },
    ],
  },
  {
    img: 'Profile/WL.svg',
    company: '偉利科技股份有限公司',
    role: '設計助理',
    period: '2023 三月- 2023 五月',
    responsibilities: [
      {
        title: '文章配圖',
        description: '負責為客戶 SEO 文章持續產出配圖。',
      },
      {
        title: '展覽周邊設計',
        description: '設計展覽周邊物品，支援專案活動並確保準時交付。',
      },
    ],
  },
]
const designTools = [
  {
    img: 'Profile/Figma.svg',
    name: 'Figma',
    usage: '製作 Wireframe、UI、Prototype',
  },
  {
    img: 'Profile/AI.svg',
    name: 'Illustrator',
    usage: '向量繪圖、插畫',
  },
  {
    img: 'Profile/PS.svg',
    name: 'Photoshop',
    usage: '影像修圖',
  },
  {
    img: 'Profile/PR.svg',
    name: 'Premiere',
    usage: '影片剪輯',
  },
  {
    img: 'Profile/AE.svg',
    name: 'After Effect',
    usage: '簡易動畫製作',
  },
]

const handleScroll = () => {
  const scrollY = window.scrollY
  const icon1 = document.querySelector('.fixed-icon-1')
  const icon2 = document.querySelector('.fixed-icon-2')

  if (icon1) {
    icon1.style.transform = `translateY(${scrollY * -0.5}px)` // 速度 0.2
  }
  if (icon2) {
    icon2.style.transform = `translateY(${scrollY * 0.4}px)` // 速度 0.4
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- <div class="fixed-bg">
    <img src="/Profile/BG.png" alt="BG" />
  </div> -->
  <div class="relative background">
    <div class="fixed-icon-1">
      <img src="/Profile/BG.png" alt="icon-1" />
    </div>
    <div class="fixed-icon-2">
      <img src="/Profile/BG.png" alt="icon-2" />
    </div>
    <div class="container">
      <h2 class="text-dark h1 pb-8 mb-0 fw-medium pt-8">Profile</h2>
      <div class="row m-16">
        <div class="col-3 me-20">
          <img src="/Profile/photo.png" alt="Profile Photo" />
        </div>
        <div class="col-8 ms-4 d-flex flex-column justify-content-center">
          <p class="lh-170 mb-2 text-custom">UI/UX Designer</p>
          <h3 class="mb-8 text-success">徐 晴 瑄</h3>
          <p class="lh-170">
            我是一名 UI/UX
            設計師，擅長將抽象需求轉化為具體的互動流程與介面設計，能兼顧使用體驗與視覺表現，並在限制中找到符合產品定位的解法。<br />
            曾參與能源監控戰情牆、電動車充電服務、綠電媒合平台等專案。<br />
            個性細心、有耐心，樂於挑戰並持續學習新方法，期待在團隊中創造實際價值。
          </p>
        </div>
      </div>
    </div>
    <div class="information bg-white">
      <div class="container custom-padding">
        <section class="mb-12">
          <BaseDot text="工作經歷" class="pb-8" />
          <div class="d-flex">
            <span class="side-bar"></span>
            <div class="w-100">
              <div v-for="(work, index) in workExperience" :key="index">
                <div class="d-flex">
                  <div class="pe-12">
                    <img :src="work.img" :alt="`${work.company}-icon`" class="icon-img" />
                  </div>
                  <div class="lh-170">
                    <p>{{ work.company }}</p>
                    <div class="d-flex">
                      <p class="border-end border-success pe-2">{{ work.role }}</p>
                      <p class="fw-medium ps-2">{{ work.period }}</p>
                    </div>
                    <ul>
                      <li v-for="(item, idx) in work.responsibilities" :key="idx" class="fw-medium">
                        {{ item.title }}：
                        <span class="fw-normal">{{ item.description }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- 除了最後一筆之外才渲染分隔線 -->
                <hr v-if="index < workExperience.length - 1" class="my-8" />
              </div>
            </div>
          </div>
        </section>
        <section class="mb-12">
          <BaseDot text="設計專長" class="pb-12" />
          <span class="button border border-1 border-success text-success lh-170 me-8">
            # 介面視覺設計
          </span>
          <span class="button border border-1 border-success text-success lh-170 me-8">
            # 資訊及頁面架構
          </span>
          <span class="button border border-1 border-success text-success lh-170 me-8">
            # 流程規劃
          </span>
          <span class="button border border-1 border-success text-success lh-170 me-8">
            # 互動/動態設計
          </span>
        </section>
        <section class="pb-8">
          <BaseDot text="軟體工具" class="pb-4" />
          <p class="lh-170 mb-12">
            主要使用 Figma 來繪製 wireframe、UI 介面與互動原型，探索設計概念和解決方案；用 Adobe
            Illustrator 繪製插圖，Photoshop 處理影像與素材；用 After Effects 做簡易動畫，並用
            Premiere 剪輯影片。我也會靈活運用這些工具，提升設計效率並確保團隊溝通順暢。
          </p>
          <div class="w-100 d-flex gap-8 align-items-stretch">
            <div class="custom-width" v-for="(tool, index) in designTools" :key="index">
              <div class="custom-card bg-warning h-100">
                <div class="d-flex justify-content-center mb-4">
                  <img :src="tool.img" :alt="tool.name" />
                </div>
                <p class="lh-170 fw-medium text-success">{{ tool.name }}</p>
                <p class="lh-170">{{ tool.usage }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <OthersWorkSection
      img-url1="Work_Overview/ChargingStationDSSDesign.jpg"
      alt1="ChargingStationDSSDesign"
      route1="/work/chargingStation"
      img-url2="Work_Overview/CommandCenterDashboard.jpg"
      alt2="CommandCenterDashboard"
      route2="/work/CommandCenterDashboard"
      bgClass="background"
    />
  </div>
</template>

<style scoped>
.fixed-icon-1 {
  position: absolute;
  top: 0;
  right: -10%;
  z-index: 0;
  pointer-events: none; /* 不影響點擊 */
  overflow: hidden;
}

.fixed-icon-1 img {
  width: 40%;
}

.fixed-icon-2 {
  position: absolute;
  bottom: 7%;
  right: -45%;
  z-index: 0;
  pointer-events: none; /* 不影響點擊 */
  overflow: hidden;
}

.fixed-icon-2 img {
  width: 30%;
}
.fixed-icon-1,
.fixed-icon-2 {
  will-change: transform;
  transition: transform 0.05s linear;
}

.text-custom {
  color: #8f91a2;
}
.information {
  width: 100%;
  position: relative;
  border-radius: 40px;
  z-index: 10;
  overflow: hidden;
}
.custom-padding {
  padding: 60px 80px;
}
.side-bar {
  display: block;
  width: 7px;
  background-color: #eaf0f6;
  margin-right: 52px;
}
.icon-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
.button {
  border-radius: 100px;
  padding: 6px 20px;
}
.custom-card {
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #f0f3f9;
  text-align: center;
}
.custom-width {
  width: 20%;
}
</style>
