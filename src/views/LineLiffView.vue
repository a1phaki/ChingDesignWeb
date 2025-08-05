<template>
  <div class="head bg-danger background">
    <div class="container">
      <div class="custom-section">
        <h2 class="text-dark h1 pb-8 mb-0 fw-medium">Work</h2>
        <div class="row g-0 justify-content-between pb-16">
          <div class="col-4">
            <span class="button border border-1 border-success text-success lh-170">
              LINE Liff Design
            </span>
            <h3 class="text-success mb-0 pt-4 fw-medium">星舟快充 LINE Liff 設計</h3>
            <p class="pt-16">
              星舟快充是一家提供電動車充電站服務的營運商。由於當前的電動車充電操作大多依賴手機應用，本專案針對其官方
              LINE 帳號進行 2.0 版本改版，目標是優化介面設計，提升操作便利性與整體用戶體驗。
            </p>
          </div>
          <div class="col-7">
            <img
              src="/LINELiff/MainVision.svg"
              alt="主圖"
              class="img-fluid border border-1 border-secondary img-rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="information bg-white">
    <div class="container custom-padding">
      <section>
        <BaseDot text="專案資訊" />
        <hr class="mt-8 mb-6" />
        <div class="row">
          <div class="col-6 d-flex">
            <h4 class="fw-medium fs-9 lh-170">擔任角色</h4>
            <p class="ps-16">UI/UX 設計師</p>
          </div>
          <div class="col-6 d-flex">
            <h4 class="fw-medium fs-9 lh-170">專案時間</h4>
            <p class="ps-16">4 個月</p>
          </div>
          <div class="col-6 d-flex">
            <h4 class="fw-medium fs-9 lh-170">使用工具</h4>
            <ul>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>After Effects</li>
            </ul>
          </div>
          <div class="col-6 d-flex">
            <h4 class="fw-medium fs-9 lh-170">負責項目</h4>
            <ul>
              <li>Task Flow</li>
              <li>設計系統</li>
              <li>UI Mockup</li>
              <li>UI Hand-off</li>
            </ul>
          </div>
        </div>
      </section>
      <hr class="mb-12" />
      <section class="row g-0 justify-content-between">
        <div class="col-6">
          <BaseDot text="專案挑戰" class="pb-12" />
          <div class="d-flex">
            <span class="side-bar"></span>
            <div>
              <p class="text-success fw-medium mb-2">1. 平台策略 - 優先採用 LINE LIFF</p>
              <p class="mb-0">
                專案初期基於使用者熟悉度與開發時程考量，選擇以 LINE LIFF 作為平台，需克服 WebView
                體驗與效能上的限制。
              </p>
              <p class="text-success fw-medium mb-2 pt-6">2. 設計需具備未來 App 化彈性</p>
              <p class="mb-0 pb-6">
                雖然目前為 LIFF
                頁面，但考量長期產品發展，設計上需保有模組化與系統性，以利未來轉型為原生 App。
              </p>
              <p class="text-success fw-medium mb-2">3. 用戶預期與平台落差</p>
              <p class="mb-0">
                多數競品為原生 App，使用者對於充電服務的流暢性與穩定性有較高預期，因此需在 LIFF
                中打造近似原生的使用體驗。
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img src="/LINELiff/Challenge.svg" alt="專案挑戰圖" class="img-fluid img-padding" />
        </div>
      </section>
      <hr class="my-12" />
      <section>
        <BaseDot text="設計目標" class="pb-12" />
        <div class="row g-12">
          <div class="col-4">
            <div class="card bg-warning border-0 target-card">
              <div class="card-body p-8">
                <span class="fw-medium fs-7 text-primary">01</span>
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="/LINELiff/mobile icon.svg"
                    alt="mobile icon"
                    class="p-4 bg-white rounded-circle mb-12 icon-img"
                  />
                  <h4 class="card-title text-success fw-medium pb-2 fs-9 lh-170">
                    打造接近原生 App 的流暢體驗
                  </h4>
                  <p class="card-text text-center">
                    透過清晰的資訊架構與簡潔的操作流程，減輕 WebView
                    帶來的延遲感與互動斷層，提升整體使用感受。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card bg-warning border-0 target-card">
              <div class="card-body p-8">
                <span class="fw-medium fs-7 text-primary">02</span>
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="/LINELiff/DesignSystem icon.svg"
                    alt="Design System icon"
                    class="p-4 bg-white rounded-circle mb-12 icon-img"
                  />
                  <h4 class="card-title text-success fw-medium pb-2 fs-9 lh-170">
                    建立具擴展性的設計系統
                  </h4>
                  <p class="card-text text-center">
                    考量後續產品可能轉為 App，設計初期即選擇 Material Design
                    為基礎，兼顧行動端支援性與系統延展性。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card bg-warning border-0 target-card">
              <div class="card-body p-8">
                <span class="fw-medium fs-7 text-primary">03</span>
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="/LINELiff/task icon.svg"
                    alt="task icon"
                    class="p-4 bg-white rounded-circle mb-12 icon-img"
                  />
                  <h4 class="card-title text-success fw-medium pb-2 fs-9 lh-170">
                    簡化操作流程、提升任務完成率
                  </h4>
                  <p class="card-text text-center">
                    聚焦核心任務（如查找充電站、啟動充電等）的流程優化，降低首次使用的學習曲線，提高操作直覺性與效率。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="my-12" />
      <section>
        <BaseDot text="任務流程" class="pb-4" />
        <p class="pb-12">
          為優化使用者在 LINE Liff
          平台中完成電動車充電的流程，我們針對使用者行為進行了任務流程梳理，進一步歸納出平台需具備的主要功能按鈕，作為後續資訊架構與
          UI 設計的基礎。
        </p>
        <div class="row justify-content-between align-items-center g-0">
          <div class="col-7">
            <img
              src="/LINELiff/TaskFlow.svg"
              alt="任務流程圖"
              class="img-fluid task-flow-img border border-1 p-12 bg-light"
            />
          </div>
          <div class="col-2 d-flex justify-content-center">
            <img src="/LINELiff/Arrow.svg" alt="箭頭" />
          </div>
          <div class="col-3">
            <img
              src="/LINELiff/Menu.svg"
              alt="選單"
              class="img-fluid menu-img border border-1 bg-light"
            />
          </div>
        </div>
      </section>
      <hr class="my-12" />
      <section>
        <BaseDot text="問題定義" class="pb-4" />
        <p class="pb-12 mb-0">
          透過使用流程的分析，我們發現部分操作不夠直覺，功能安排也沒完全符合使用者在充電時的實際需求，這成為後續優化的重點。
        </p>
        <div class="row gy-8 gx-16">
          <div class="col-6">
            <div class="card border-0 bg-warning problem-card">
              <div class="card-body p-8 row g-12 justify-content-between">
                <div class="col-7">
                  <div class="card-title pb-10 mb-0">
                    <span
                      class="step-number fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-140"
                      >1</span
                    >
                    <h4 class="d-inline-block ps-4 text-success fw-bold lh-140 fs-9">
                      選單內容未貼近使用者需求
                    </h4>
                  </div>
                  <p class="card-text lh-base">
                    沒有一目了然的充電操作，進到畫面會不知道要先點甚麼
                  </p>
                </div>
                <div class="col-5">
                  <img
                    src="/LINELiff/Problem1_menu.svg"
                    alt="problem1 menu"
                    class="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card border-0 bg-warning problem-card">
              <div class="card-body p-8 row g-12 justify-content-between">
                <div class="col-7">
                  <div class="card-title pb-10 mb-0">
                    <span
                      class="step-number fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-140"
                      >2</span
                    >
                    <h4 class="d-inline-block ps-4 text-success fw-bold lh-140 fs-9">
                      無法顯示當前最近充電站
                    </h4>
                  </div>
                  <p class="card-text lh-base">
                    僅顯示站點列表，無法查看離自己最近的充電站或記錄曾去過的充電站
                  </p>
                </div>
                <div class="col-5">
                  <img
                    src="/LINELiff/Problem2_stop.svg"
                    alt="problem2 stop"
                    class="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card border-0 bg-warning problem-card">
              <div class="card-body p-8 row g-12 justify-content-between">
                <div class="col-7">
                  <div class="card-title pb-10 mb-0">
                    <span
                      class="step-number fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-140"
                      >3</span
                    >
                    <h4 class="d-inline-block ps-4 text-success fw-bold lh-140 fs-9">
                      無顯示充電空位與預約
                    </h4>
                  </div>
                  <p class="card-text lh-base">
                    無法進行充電槍預約，在前往充電站的途中，容易造成使用者等待或撲空
                  </p>
                </div>
                <div class="col-5">
                  <img
                    src="/LINELiff/Problem3_reservation.svg"
                    alt="problem3 reservation"
                    class="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card border-0 bg-warning problem-card">
              <div class="card-body p-8 row g-12 justify-content-between">
                <div class="col-7">
                  <div class="card-title pb-10 mb-0">
                    <span
                      class="step-number fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-140"
                      >4</span
                    >
                    <h4 class="d-inline-block ps-4 text-success fw-bold lh-140 fs-9">
                      缺乏自動化的統計和分析
                    </h4>
                  </div>
                  <p class="card-text lh-base">
                    使用者目前只能以條列方式查看歷史訂單，系統並未提供統計或彙整功能
                  </p>
                </div>
                <div class="col-5">
                  <img
                    src="/LINELiff/Problem4_nonAuto.svg"
                    alt="problem4 nonAuto"
                    class="img-fluid rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="my-12" />
      <section>
        <BaseDot text="資訊架構" class="pb-4" />
        <p class="pb-12 mb-0">
          根據前階段對任務流程的梳理與問題定義，我們重新規劃了頁面結構與功能配置。
        </p>
        <img
          src="/LINELiff/SiteMap.svg"
          alt="資訊架構圖"
          class="img-fluid border border-1 border-light bg-info site-map-img"
        />
      </section>
      <hr class="my-12" />
      <section>
        <BaseDot text="設計系統" class="pb-4" />
        <p class="pb-12 mb-0">
          採用 Material Design
          建立具延展性的設計系統，搭配深色視覺，營造品牌穩重與信任感，同時展現科技形象。
        </p>
        <div class="row gx-12">
          <div class="col-6">
            <img src="/LINELiff/Guideline1.svg" alt="guideline1" />
          </div>
          <div class="col-6">
            <img src="/LINELiff/Guideline2.svg" alt="guideline2" />
          </div>
        </div>
      </section>
    </div>
  </div>
  <section class="parallax-section bg-danger">
    <div class="parallax-background rellax" data-rellax-speed="-5"></div>
  </section>
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
  <section class="result bg-danger background">
    <div class="container d-flex flex-column align-items-center">
      <BaseDot text="成果後記" class="pb-4" />
      <p class="mb-0">
        在製作這個專案的過程中，我們不僅要解決充電站搜尋、預約與費用管理等痛點，還面臨了必須透過
        LINE LIFF 頁面呈現的挑戰。與市面上的獨立 APP 不同，LIFF
        限制了即時通知與背景更新功能，需要透過更精簡的介面設計來提升使用體驗，確保資訊清晰、操作流暢。儘管過程充滿挑戰，但希望能讓電動車主的充電體驗更加流暢便捷！
      </p>
    </div>
  </section>
  <section class="others bg-info">
    <div class="container row">
      <div class="col-3">
        <div class="d-flex pb-16">
          <span class="text-bar"></span>
          <div>
            <p class="mb-2">感謝觀看</p>
            <h4 class="fs-7 fw-medium text-success">查看其他作品</h4>
          </div>
        </div>
        <CustomButton>查看更多</CustomButton>
      </div>
      <div class="col-9 row">
        <div class="col-6">
          <img src="" alt="" class="img-fluid img-others bg-success" />
        </div>
        <div class="col-6">
          <img src="" alt="" class="img-fluid img-others bg-success" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-size: 36px;
}
p {
  line-height: 170%;
  color: #25262d;
}
ul {
  padding-left: 56px;
}
ul > li {
  list-style: disc;
}
.button {
  border-radius: 100px;
  padding: 6px 20px;
}
.information {
  width: 100%;
  position: relative;
  border-radius: 40px;
  z-index: 10;
  overflow: hidden;
}
.head {
  height: 85vh;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.parallax-section {
  height: 60vh;
  position: relative;
  z-index: 5;
}

.parallax-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 150%;
  top: -25%;
  background-image: url('/LINELiff/Multiple mockups.svg');
  background-size: cover;
  background-position: center center;
}
.result {
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 100px 176px;
}
.others {
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 100px 106px;
}
.custom-padding {
  padding: 60px;
}
.side-bar {
  display: block;
  width: 7px;
  background-color: #eaf0f6;
  margin-right: 52px;
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
.img-rounded {
  border-radius: 24px;
}
.task-flow-img {
  border-radius: 10px;
}
.menu-img {
  border-radius: 10px;
  padding: 64px 32px;
}
.icon-img {
  width: 72px;
  height: 72px;
}
.step-number {
  width: 28px;
  height: 28px;
}
.target-card {
  border-radius: 8px;
}
.problem-card {
  border-radius: 12px;
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
.img-others {
  border-radius: 8px;
  width: 376px;
  height: 250px;
}
</style>

<script setup>
import BaseDot from '@/components/Dot.vue'
import CustomButton from '@/components/Button.vue'
import { onMounted } from 'vue'
import Rellax from 'rellax'

onMounted(() => {
  new Rellax('.rellax', {
    center: true,
  })
})
</script>
