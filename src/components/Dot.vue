<script>
export default {
  name: 'BaseButton',
}
</script>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <span class="dot"></span>
    <p class="fs-7 mb-0 text-success">{{ props.text }}</p>
  </div>
</template>

<style scoped>
.dot {
  background: linear-gradient(180deg, #81a3dc, #d4dff2);
  height: 13px;
  width: 13px;
  border-radius: 50%;
  margin-right: 14px;
}
p {
  font-weight: 500;
  line-height: 150%;
}
</style>
