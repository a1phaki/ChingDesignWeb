<template>
  <section class="result bg-danger background">
    <div class="container d-flex flex-column align-items-center">
      <BaseDot text="成果後記" class="pb-4" />
      <p class="mb-0">
        {{ props.content }}
      </p>
    </div>
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'
const props = defineProps({
  content: { type: String, required: true },
})
</script>

<style scoped>
.result {
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 100px 176px;
}
</style>
