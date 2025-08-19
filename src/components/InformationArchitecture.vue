<template>
  <section>
    <BaseDot text="資訊架構" class="pb-4" />
    <p class="pb-12 mb-0">
      {{ props.content }}
    </p>
    <img
      :src="imgUrl"
      :alt="alt"
      class="img-fluid border border-1 border-light bg-info site-map-img"
    />
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'
const props = defineProps({
  content: { type: String, required: true },
  imgUrl: { type: String, required: true },
  alt: { type: String, default: 'image' },
})
</script>

<style scoped>
.site-map-img {
  border-radius: 10px;
  padding: 35px 86px;
}
</style>
