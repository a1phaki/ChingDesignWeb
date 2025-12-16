<script setup>
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AppHeader',
})
</script>

<template>
  <header>
    <nav class="header navbar navbar-expand-md py-3">
      <div class="d-flex align-items-center w-100">
        <!-- 左 -->
        <h1 class="mb-0 lh-170 ps-3">
          <RouterLink to="/" class="text-decoration-none">CHING DESIGN</RouterLink>
        </h1>

        <!-- 右 -->
        <div class="ms-auto d-flex align-items-center gap-3 me-3">
          <a href="Resume.pdf" download="Ching_Resume.pdf" class="btn btn-outline-success">
            Download Resume
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <!-- 折疊選單 -->
      <div class="collapse navbar-collapse px-3" id="navbarText">
        <div class="navbar-nav ms-auto gap-3">
          <RouterLink class="nav-link text-success" to="/profile">Profile</RouterLink>
          <RouterLink class="nav-link text-success" to="/work">Work</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
.header {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 30px;
  width: 90%;
  backdrop-filter: blur(10px);
  z-index: 11;
}

/* 小於 768px 時：滿版、移除圓角更貼齊手機 */
@media (max-width: 768px) {
  .header {
    width: 100%;
    box-shadow: none;
    top: 0;
    backdrop-filter: none;
    border-radius: 0;
    left: 0;
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
