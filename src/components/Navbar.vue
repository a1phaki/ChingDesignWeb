<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

defineOptions({
  name: 'AppHeader',
})

const isOpen = ref(false)

const toggleNavbar = () => {
  isOpen.value = !isOpen.value
}

const hideNavbar = () => {
  isOpen.value = false
}
</script>

<template>
  <header>
    <nav
      class="header navbar py-3 d-flex flex-wrap justify-content-between align-items-center"
      :class="{ 'is-open': isOpen }"
    >
      <h1 class="mb-0 lh-170 ps-3">
        <RouterLink to="/" class="text-decoration-none" @click="hideNavbar"
          >CHING DESIGN</RouterLink
        >
      </h1>

      <div class="d-flex align-items-center gap-3 pe-3">
        <div class="d-none d-md-flex align-items-center gap-3">
          <RouterLink class="nav-link text-success" to="/profile">Profile</RouterLink>
          <RouterLink class="nav-link text-success" to="/work">Work</RouterLink>
        </div>

        <a href="Resume.pdf" download="Ching_Resume.pdf" class="btn btn-outline-success">
          Download Resume
        </a>

        <button class="menu-toggle d-md-none" :class="{ active: isOpen }" @click="toggleNavbar">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <div class="custom-collapse w-100" :class="{ show: isOpen }">
        <div class="navbar-nav px-4 pt-2 pb-3 gap-3">
          <RouterLink class="nav-link text-success" to="/profile" @click="hideNavbar"
            >Profile</RouterLink
          >
          <RouterLink class="nav-link text-success" to="/work" @click="hideNavbar">Work</RouterLink>
        </div>
      </div>
    </nav>

    <Transition name="fade">
      <div v-if="isOpen" class="overlay d-md-none" @click="hideNavbar"></div>
    </Transition>
  </header>
</template>

<style scoped>
/* --- 遮罩動畫過渡 --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
}

.header {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 30px;
  width: 90%;
  backdrop-filter: blur(10px);
  transition:
    background-color 0.3s ease,
    border-radius 0.3s ease;
  z-index: 102; /* 確保在遮罩之上 */
}

.header.is-open {
  background-color: #ffffff;
}

/* 遮罩樣式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 101; /* 夾在中間 */
}

/* 漢堡按鈕轉 X */
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  padding: 0;
}
.bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #769bd9;
  transition: all 0.3s ease;
}
.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}
.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* 折疊內容 */
.custom-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}
.custom-collapse.show {
  max-height: 250px;
}

@media (min-width: 768px) {
  .custom-collapse {
    display: none;
  }
}

@media (max-width: 768px) {
  .header {
    width: 100%;
    top: 0;
    border-radius: 0;
    left: 0;
    backdrop-filter: none; /* 手機版展開通常建議關閉 blur 以維持效能 */
  }
}

h1 {
  font-weight: 500;
  font-size: 20px;
}
h1 a {
  color: #25262d;
}
.text-success:hover {
  color: #b8cade !important;
}
.btn-outline-success {
  border-radius: 100px;
}
.btn-outline-success:hover {
  background-color: #f0f3f9;
  color: #769bd9;
}
</style>
