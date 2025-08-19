<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-danger wrapper">
    <div class="container">
      <Navbar />
      <Breadcrumb />
    </div>
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}
</style>
