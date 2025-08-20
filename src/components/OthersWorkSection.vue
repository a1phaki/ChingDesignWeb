<template>
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
          <img :src="imgUrl1" :alt="alt1" class="img-fluid img-others bg-success" />
        </div>
        <div class="col-6">
          <img :src="imgUrl2" :alt="alt2" class="img-fluid img-others bg-success" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomButton from '@/components/Button.vue'
defineProps({
  imgUrl1: { type: String, required: true },
  alt1: { type: String, default: 'image1' },
  imgUrl2: { type: String, required: true },
  alt2: { type: String, default: 'image2' },
})
</script>

<style scoped>
.others {
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 100px 106px;
}
.img-others {
  border-radius: 8px;
  width: 376px;
  height: 250px;
}
</style>
