<template>
  <section>
    <BaseDot :text="props.text" class="pb-4" />
    <p class="pb-12 mb-0">
      {{ props.content }}
    </p>
    <div class="row gx-12">
      <div class="col-6">
        <img :src="imgUrl1" :alt="alt1" />
      </div>
      <div class="col-6">
        <img :src="imgUrl2" :alt="alt2" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'

const props = defineProps({
  text: { type: String, required: true, default: '設計系統' },
  content: { type: String, required: true },
  imgUrl1: { type: String, required: true },
  alt1: { type: String, default: 'image1' },
  imgUrl2: { type: String, required: true },
  alt2: { type: String, default: 'image2' },
})
</script>
