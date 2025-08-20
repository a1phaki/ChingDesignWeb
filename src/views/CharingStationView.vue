<template>
  <WorkHead
    title="智慧開電選址系統"
    content="協助業務團隊評估充電站設點的開發潛力。透過整合地理資訊、商業熱區、競爭態勢與電力可行性等多維度資料，系統可自動計算場址評分，提供具體化選址建議，提升開發效率與成功率。"
    tag="Charging Station DSS Design"
    img-url="/ChargingStation/titleImg.svg"
    alt="titleImg"
  />
  <div class="information bg-white">
    <div class="container custom-padding">
      <ProjectInformation
        role="UI/UX 設計師"
        project-duration="4 個月"
        :tools="projectTools"
        :tasks="projectTasks"
      />
      <hr class="mb-12" />
      <ProjectChallenge
        :challenges="projectChallenges"
        img-url="/ChargingStation/projectChallenge.svg"
        alt="專案挑戰圖"
      />
      <hr class="my-12" />
      <TargetSection :steps="targetSectionSteps" />
      <hr class="my-12" />
      <section>
        <BaseDot text="選址流程" class="pb-4" />
        <p class="pb-12">
          觀察業務選址流程後，發現資料分散且操作繁複。因此將設計重點放在資料整合、可視化呈現與圖層篩選功能，提升使用效率與決策便利性。
        </p>
        <div class="row justify-content-between g-0">
          <div class="col-3 d-flex">
            <div class="card bg-warning border-1 border-light">
              <div class="card-body p-8">
                <div class="d-flex flex-column align-items-center">
                  <p class="bg-success text-white custom-rounded fw-medium mb-0">
                    <span class="fs-8">01</span> 收集場址
                  </p>
                  <img src="/LINELiff/mobile icon.svg" alt="mobile icon" class="my-8" />
                  <p class="card-text text-center">
                    透過投標或地主提供的資料，整理出可能的候選地點
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 d-flex justify-content-center">
            <img src="/LINELiff/Arrow.svg" alt="箭頭" />
          </div>
          <div class="col-3 d-flex">
            <div class="card bg-warning border-1 border-light">
              <div class="card-body p-8">
                <div class="d-flex flex-column align-items-center">
                  <p class="bg-success text-white custom-rounded fw-medium mb-0">
                    <span class="fs-8">02</span> 多平台查詢
                  </p>
                  <img src="/LINELiff/mobile icon.svg" alt="mobile icon" class="my-8" />
                  <p class="card-text text-center">
                    透過 Excel、Google Map 與其他報表平台，分別查看車流量、家戶數、POI 等數據。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 d-flex justify-content-center">
            <img src="/LINELiff/Arrow.svg" alt="箭頭" />
          </div>
          <div class="col-3 d-flex">
            <div class="card bg-warning border-1 border-light">
              <div class="card-body p-8">
                <div class="d-flex flex-column align-items-center">
                  <p class="bg-success text-white custom-rounded fw-medium mb-0">
                    <span class="fs-8">03</span> 整合與決策
                  </p>
                  <img src="/LINELiff/mobile icon.svg" alt="mobile icon" class="my-8" />
                  <p class="card-text text-center">
                    將不同來源的數據輸入 Excel，並進行整理比對，根據整理後的資料進行場址評估。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="my-12" />
      <QuestionSection
        content="透過使用流程的分析，我們發現部分操作不夠直覺，功能安排也沒完全符合使用者在充電時的實際需求，這成為後續優化的重點。"
        :questions="questionDefineQuestions"
      />
      <hr class="my-12" />
      <section>
        <BaseDot text="需求與功能優先級分類" class="pb-4" />
        <p class="pb-4">初步規劃系統的三大功能基礎，為後續設計提供方向。</p>
        <div class="row mb-12">
          <div class="col-4 d-flex">
            <div class="card bg-warning border-1 w-100">
              <div class="card-body p-8 d-flex align-items-center w-100">
                <span
                  class="stepNumber fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-170"
                >
                  01
                </span>
                <h4
                  class="fw-medium lh-170 text-success fs-9 mb-0 ms-3 border-end border-1 pe-4 me-4 border-secondary"
                >
                  場址輸入
                </h4>
                <p class="mb-0">收集整理場址相關資訊</p>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex">
            <div class="card bg-warning border-1 w-100">
              <div class="card-body p-8 d-flex align-items-center">
                <span
                  class="stepNumber fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-170"
                >
                  02
                </span>
                <h4
                  class="fw-medium lh-170 text-success fs-9 mb-0 ms-3 border-end border-1 pe-4 me-4 border-secondary"
                >
                  潛力評估
                </h4>
                <p class="mb-0">瀏覽分析各場址的優劣</p>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex">
            <div class="card bg-warning border-1 w-100">
              <div class="card-body p-8 d-flex align-items-center">
                <span
                  class="stepNumber fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-170"
                >
                  03
                </span>
                <h4
                  class="fw-medium lh-170 text-success fs-9 mb-0 ms-3 border-end border-1 pe-4 me-4 border-secondary"
                >
                  決策支援
                </h4>
                <p class="mb-0">生成評級支援選址判斷</p>
              </div>
            </div>
          </div>
        </div>
        <p class="pb-4">
          在三大功能基礎上，依據業務需求展開各項功能，並進行優先排序與分類，確保設計與開發聚焦核心價值。
        </p>
        <div class="row">
          <div class="col-4">
            <h4 class="fw-medium lh-170 fs-9 text-success pb-4">Must Have</h4>
            <table class="table table-rounded">
              <thead>
                <tr class="table-info">
                  <th scope="col" width="40%">功能</th>
                  <th scope="col" width="60%">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">地址搜尋</th>
                  <td>串聯Google，透過系統進行地址搜尋</td>
                </tr>
                <tr>
                  <th scope="row">可視化數據與界面</th>
                  <td>透過熱力圖、互動地圖直觀顯示多維度的數據圖表</td>
                </tr>
                <tr>
                  <th scope="row">圖層篩選</th>
                  <td>篩選地圖圖層，包含家戶、小客車、車流、景點與競爭分布</td>
                </tr>
                <tr>
                  <th scope="row">評分系統</th>
                  <td>透過 多維度分析，提供選址評分，減少人工比對</td>
                </tr>
                <tr>
                  <th scope="row">年度充電度數預估</th>
                  <td>預測站點年度充電度數預估，降低錯誤決策風險</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-4">
            <h4 class="fw-medium lh-170 fs-9 text-success pb-4">Nice to Have</h4>
            <table class="table table-rounded">
              <thead>
                <tr class="table-info">
                  <th scope="col" width="40%">功能</th>
                  <th scope="col" width="60%">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">多站點資料匯入與評分</th>
                  <td>一次性上傳多個站點地址，並透過系統自動分析與評分</td>
                </tr>
                <tr>
                  <th scope="row">評分結果匯出報表</th>
                  <td>將場址評分結果匯出成報表，方便業務分析、內部分享及決策紀錄</td>
                </tr>
                <tr>
                  <th scope="row">儲存歷史搜尋與評分記錄</th>
                  <td>使用者回顧過去評估的站點數據，方便比較並進行長期選址規劃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-4">
            <h4 class="fw-medium lh-170 fs-9 text-success pb-4">Can Come Later</h4>
            <table class="table table-rounded">
              <thead>
                <tr class="table-info">
                  <th scope="col" width="40%">功能</th>
                  <th scope="col" width="60%">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">AI 智能選址推薦</th>
                  <td>AI 自動推薦最佳站點候選清單</td>
                </tr>
                <tr>
                  <th scope="row">串聯 Google 街景</th>
                  <td>使用者可預覽站點周邊環境與設施，確認場地條件</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <hr class="my-12" />
      <InformationArchitecture
        content="根據前階段對任務流程的梳理與問題定義，我們重新規劃了頁面結構與功能配置。"
        img-url="/ChargingStation/informationArchitecture.svg"
        alt="informationArchitectureImg"
      />
      <hr class="my-12" />
      <DesignSystem
        content="系統採用深色背景，搭配品牌藍綠作為核心元素，營造一致且專業的視覺風格。"
        img-url1="/ChargingStation/designSystem1.svg"
        alt1="designSystem1"
        img-url2="/ChargingStation/designSystem2.svg"
        alt2="designSystem2"
      />
    </div>
  </div>
  <ParallaxSection image="/ChargingStation/mockup.svg" />
  <div class="information">
    <section class="bg-white custom-padding">
      <div class="container">
        <div class="bar-target-mockup2 position-relative">
          <div class="bar-line" style="top: 225px">
            <div class="bar-dot-left"></div>
            <div class="bar-line-body-left"></div>
          </div>
          <div class="d-flex justify-content-center">
            <BaseDot text="介面展示" class="pb-4" />
          </div>
          <div class="row">
            <div class="col-6">
              <img src="/LINELiff/Mockup2_最近充電站.svg" alt="mockup2" />
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <h4 class="fw-medium fs-7 pb-5 custom-padding-2">
                <span class="high-light"> 快速掌握最近充電站，輕鬆回訪充電足跡！ </span>
              </h4>
              <p class="text-end pt-8 ps-20 ms-20 mb-20">
                介面除了能即時查看附近可用的充電站外，搜尋欄也會記錄使用者過去使用過的站點，方便快速選取，提升整體操作效率。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-info">
      <div class="container">
        <div class="bar-target-mockup1 position-relative overflow-hidden">
          <div class="bar-line" style="top: 330px">
            <div class="bar-dot-right"></div>
            <div class="bar-line-body-right"></div>
          </div>
          <div class="row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4 class="fw-medium fs-7 pb-5 custom-padding-1">
                <span class="high-light"> 即時掌握充電空位，預約無憂，告別撲空！ </span>
              </h4>
              <p class="text-start pt-8 pe-20 me-20 mb-20">
                介面整合即時充電樁狀態查詢與預約功能，使用者可一眼掌握空位情況，避免白跑，也能提前預約，提升整體充電效率與掌控感。
              </p>
            </div>

            <div class="col-6">
              <div class="img-wrapper">
                <img src="/LINELiff/Mockup1_掌握充電空位.svg" alt="mockup1" class="img-position" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="container">
        <div class="bar-target-mockup2 position-relative">
          <div class="bar-line" style="top: 274px">
            <div class="bar-dot-left-2"></div>
            <div class="bar-line-body-left-2"></div>
          </div>
          <div class="row">
            <div class="col-6">
              <img src="/LINELiff/Mockup3_掌握充電進度.svg" alt="mockup3" class="img-position-2" />
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <h4 class="fw-medium fs-7 pb-5 custom-padding-3">
                <span class="high-light"> 隨時掌握充電進度，行程無縫順行！</span>
              </h4>
              <p class="text-end pt-8 ps-20 ms-20 mb-20">
                介面提供即時充電進度回報，使用者可隨時查看目前充電狀態，搭配充電完成通知，讓行程安排更有彈性也更安心。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-info">
      <div class="container py-16">
        <div class="bar-target-mockup4 position-relative overflow-hidden">
          <div class="bar-line" style="top: 239px">
            <div class="bar-dot-right-2"></div>
            <div class="bar-line-body-right-2"></div>
          </div>
          <div class="row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4 class="fw-medium fs-7 pb-5 custom-padding-4">
                <span class="high-light"> 智慧分析充電支出，輕鬆掌握用電成本！ </span>
              </h4>
              <p class="text-start pt-8 pe-20 me-20 mb-20">
                系統整合充電紀錄與金額統計，讓使用者能清楚掌握每次充電的支出與用電趨勢，協助更有效地管理用電成本。
              </p>
            </div>

            <div class="col-6">
              <img src="/LINELiff/Mockup4_智慧分析充電支出.svg" alt="mockup4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <ResultSection
    content="在製作這個專案的過程中，我們不僅要解決充電站搜尋、預約與費用管理等痛點，還面臨了必須透過
        LINE LIFF 頁面呈現的挑戰。與市面上的獨立 APP 不同，LIFF限制了即時通知與背景更新功能，需要透過更精簡的介面設計來提升使用體驗，確保資訊清晰、操作流暢。儘管過程充滿挑戰，但希望能讓電動車主的充電體驗更加流暢便捷！"
  />
  <OthersWorkSection img-url1="" alt1="" img-url2="" alt2="" />
</template>

<style scoped>
p {
  line-height: 170%;
  color: #25262d;
}
.information {
  width: 100%;
  position: relative;
  border-radius: 40px;
  z-index: 10;
  overflow: hidden;
}
.custom-rounded {
  padding: 6.5px 20px;
  border-radius: 100px;
}
.custom-padding {
  padding: 60px;
}
.text-bar {
  display: block;
  width: 4px;
  background-color: #eaf0f6;
  margin-right: 12px;
}
.img-padding {
  padding-left: 80px;
  object-fit: cover;
}
.task-flow-img {
  border-radius: 10px;
}
.menu-img {
  border-radius: 10px;
  padding: 64px 32px;
}
.site-map-img {
  border-radius: 10px;
  padding: 35px 86px;
}
.high-light {
  position: relative;
  z-index: 1;
}
.high-light::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -0.3em;
  right: 0;
  width: calc(100% + 0.6em);
  height: 16px;
  background-color: #ffd194;
  opacity: 0.7;
  z-index: -1; /* 確保在文字後面 */
}
.custom-padding-2 {
  padding-top: 125px;
}
.custom-padding-1 {
  padding-top: 275px;
}
.custom-padding-3 {
  padding-top: 220px;
}
.custom-padding-4 {
  padding-top: 185px;
}
.custom-padding-5 {
  padding: 100px 176px;
}
.bar-target-mockup2 {
  overflow: hidden;
  height: 635px;
}
.bar-target-mockup2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  z-index: 10;
}
.bar-target-mockup1 {
  height: 635px;
  overflow: hidden; /* ✨ 只讓下方超出被裁切 */
}
.bar-target-mockup4 {
  height: 635px;
}
.img-wrapper {
  overflow: visible; /* ✨ 允許圖片橫向超出 */
}
.bar-line {
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none; /* 不要影響點擊 */
  z-index: 5;
}
.bar-dot-left {
  position: absolute;
  left: 34.5%;
  width: 6px;
  height: 6px;
  background-color: #769bd9;
  border-radius: 50%;
  transform: translateX(-50%);
  top: 0;
}
.bar-line-body-left {
  position: absolute;
  left: 34.5%;
  width: 100%;
  height: 1px;
  background-color: #769bd9;
  top: 2.5px;
}
.bar-dot-right {
  position: absolute;
  right: 17%;
  width: 6px;
  height: 6px;
  background-color: #769bd9;
  border-radius: 50%;
  transform: translateX(50%);
  top: 0;
}
.bar-line-body-right {
  position: absolute;
  right: 17%;
  width: 100%;
  height: 1px;
  background-color: #769bd9;
  top: 2.5px;
}
.bar-dot-left-2 {
  position: absolute;
  left: 40%;
  width: 6px;
  height: 6px;
  background-color: #769bd9;
  border-radius: 50%;
  transform: translateX(-50%);
  top: 0;
}
.bar-line-body-left-2 {
  position: absolute;
  left: 40%;
  width: 100%;
  height: 1px;
  background-color: #769bd9;
  top: 2.5px;
}
.bar-dot-right-2 {
  position: absolute;
  right: 42.5%;
  width: 6px;
  height: 6px;
  background-color: #769bd9;
  border-radius: 50%;
  transform: translateX(50%);
  top: 0;
}
.bar-line-body-right-2 {
  position: absolute;
  right: 42.5%;
  width: 100%;
  height: 1px;
  background-color: #769bd9;
  top: 2.5px;
}
.img-position {
  position: absolute;
  right: -10%;
  z-index: 1;
}
.img-position-2 {
  position: absolute;
  top: -25%;
  z-index: 1;
}
.stepNumber {
  width: 36px;
  height: 36px;
}
.side-bar {
  display: block;
  width: 7px;
  background-color: #eaf0f6;
}
.table-rounded {
  border-collapse: separate; /* 保留圓角 */
  border-spacing: 0; /* 去掉間距 */
  border: 1px solid #e9e9ea; /* 表格外框 */
  border-radius: 8px; /* 四角圓角 */
  overflow: hidden; /* 圓角生效 */
  width: 100%; /* 滿寬 */
}

/* 表頭 */
.table-rounded thead th {
  border-bottom: 1px solid #e9e9ea;
  border-right: 1px solid #e9e9ea;
}

/* 表頭最後一欄 */
.table-rounded thead th:last-child {
  border-right: none;
}

/* 內容列 */
.table-rounded tbody td,
.table-rounded tbody th {
  border-bottom: 1px solid #e9e9ea;
  border-right: 1px solid #e9e9ea;
}

/* 內容列最後一欄 */
.table-rounded tbody td:last-child,
.table-rounded tbody th:last-child {
  border-right: none;
}

/* 最底下列不要下邊線 */
.table-rounded tbody tr:last-child td,
.table-rounded tbody tr:last-child th {
  border-bottom: none;
}
.table-rounded th,
.table-rounded td {
  padding: 1rem;
  vertical-align: middle; /* 上下置中 */
  line-height: 170%;
}
.table-rounded th {
  font-weight: 500;
}
.table-rounded td {
  max-height: 100px;
}
</style>

<script setup>
import BaseDot from '@/components/Dot.vue'
import WorkHead from '@/components/WorkHead.vue'
import ProjectInformation from '@/components/ProjectInformation.vue'
import ProjectChallenge from '@/components/ProjectChallenge.vue'
import TargetSection from '@/components/TargetSection.vue'
import QuestionSection from '@/components/QuestionSection.vue'
import InformationArchitecture from '@/components/InformationArchitecture.vue'
import DesignSystem from '@/components/DesignSystem.vue'
import ParallaxSection from '@/components/ParallaxSection.vue'
import ResultSection from '@/components/ResultSection.vue'
import OthersWorkSection from '@/components/OthersWorkSection.vue'

const projectTools = ['Figma', 'Illustrator']

const projectTasks = ['Task Flow', '設計系統', 'UI Mockup', 'UI Hand-off']

const projectChallenges = [
  {
    title: '多維度資料的可視化呈現',
    content:
      '需將家戶數、車輛數、車流量、POI 與競爭品牌等多種來源的數據整合於同一地圖，並透過色彩與圖層設計，讓業務能快速理解而不被資訊淹沒。',
  },
  {
    title: '地圖縮放層級的資訊分層設計',
    content:
      '地圖需根據縮放層級依序呈現縣市、鄉鎮市區、村里等不同粒度的統計與評分資料。必須明確定義各層級的顯示內容，確保使用者在不同視圖下獲得最適合的資訊。',
  },
  {
    title: '傳統工具流程轉換的操作體驗設計',
    content:
      '業務原以 Excel 與 Google Map 交叉比對場址，流程繁瑣且易出錯。系統需整合資料與地圖於單一介面，簡化操作並提升效率。',
  },
]

const targetSectionSteps = [
  {
    stepNum: '01',
    title: '清晰資訊架構',
    content:
      '設計直觀的圖層與視覺化元素，有效整合多元資料，讓使用者能迅速抓住關鍵資訊，避免資訊過載。',
    img: '/LINELiff/mobile icon.svg',
    alt: 'mobile icon',
  },
  {
    stepNum: '02',
    title: '動態資料呈現策略',
    content: '根據地圖縮放層級，精準定義與切換不同粒度資料，確保資訊在各層級皆清晰且易於理解。',
    img: '/LINELiff/DesignSystem icon.svg',
    alt: 'Design System icon',
  },
  {
    stepNum: '03',
    title: '流程簡化與整合',
    content:
      '將多重資料與地圖功能整合於單一介面，統一資料來源。簡化操作流程，節省評估時間並提升選址精準度。',
    img: '/LINELiff/task icon.svg',
    alt: 'task icon',
  },
]

const questionDefineQuestions = [
  {
    num: '1',
    title: '資料來源分散，整合繁瑣',
    content: '數據分散在多個平台，手動整合耗時且容易出錯',
    img: '/ChargingStation/questionDefine1.svg',
    alt: 'questionDefine1',
  },
  {
    num: '2',
    title: '缺乏高效的數據比對工具',
    content: '缺少自動比對機制，場址評估效率低，操作繁瑣',
    img: '/ChargingStation/questionDefine2.svg',
    alt: 'questionDefine2',
  },
  {
    num: '3',
    title: '需求預測準確度不足',
    content: '依賴人工整合與經驗判斷，數據分散或缺漏容易導致預測不準',
    img: '/ChargingStation/questionDefine3.svg',
    alt: 'questionDefine3',
  },
  {
    num: '4',
    title: '缺乏即時更新的資料',
    content: '資料更新慢，決策依賴手動更新資訊，降低效率',
    img: '/ChargingStation/questionDefine4.svg',
    alt: 'questionDefine4',
  },
]
</script>
