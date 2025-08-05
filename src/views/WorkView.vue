<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <h2>Work</h2>
    <nav>
      <button>UI/UX</button>
      <button>Graphic</button>
      <button>Video</button>
    </nav>
    <div class="row">
      <div class="col-6">
        <RouterLink to="/work/lineLiff">Line LIFF</RouterLink>
      </div>
      <div class="col-6"></div>
      <div class="col-6"></div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<style></style>
