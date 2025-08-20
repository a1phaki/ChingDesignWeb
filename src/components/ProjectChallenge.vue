<template>
  <section class="row g-0 justify-content-between">
    <div class="col-6">
      <BaseDot text="專案挑戰" class="pb-12" />
      <div class="d-flex">
        <span class="side-bar"></span>
        <div>
          <template v-for="(challenge, index) in props.challenges" :key="index">
            <p class="text-success fw-medium mb-2">{{ index + 1 }}. {{ challenge.title }}</p>
            <p :class="['mb-0', index !== challenges.length - 1 ? 'pb-6' : '']">
              {{ challenge.content }}
            </p>
          </template>
        </div>
      </div>
    </div>
    <div class="col-6">
      <img :src="imgUrl" :alt="alt" class="img-fluid img-padding" />
    </div>
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'
const props = defineProps({
  challenges: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((question) => 'title' in question && 'content' in question)
    },
  },
  imgUrl: { type: String, required: true },
  alt: { type: String, default: 'image' },
})
</script>

<style scoped>
.side-bar {
  display: block;
  width: 7px;
  background-color: #eaf0f6;
  margin-right: 52px;
}
.img-padding {
  padding-left: 80px;
  object-fit: cover;
}
</style>
