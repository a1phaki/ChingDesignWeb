<script setup>
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AppHeader',
})
</script>

<template>
  <header class="container py-3 border border-1">
    <div class="wrapper d-flex justify-content-between align-items-center">
      <h1 class="mb-0 lh-170">
        <RouterLink to="/" class="text-decoration-none">CHING DESIGN</RouterLink>
      </h1>
      <nav class="d-flex gap-4 align-items-center">
        <RouterLink to="/profile" class="text-success text-decoration-none">Profile</RouterLink>
        <RouterLink to="/work" class="text-success text-decoration-none">Work</RouterLink>
        <div class="btn btn-outline-success">Download Resume</div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 30px;
  backdrop-filter: blur(10px);
  z-index: 11;
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
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
