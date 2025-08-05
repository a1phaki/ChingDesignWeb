<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-danger wrapper">
    <div class="container">
      <Header />
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
