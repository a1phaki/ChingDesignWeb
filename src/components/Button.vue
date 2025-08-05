<script setup>
defineOptions({ name: 'CustomButton' })
import { ref, computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
})

const hovering = ref(false)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'btn-sm'
    case 'lg':
      return 'btn-lg'
    default:
      return ''
  }
})
</script>

<template>
  <button
    class="btn d-inline-flex align-items-center justify-content-center gradient-button text-center"
    :class="sizeClass"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
    @click="$emit('click', $event)"
  >
    <slot />
    <span class="icon-container">
      <i class="bi bi-dot dot" :class="{ 'fade-out': hovering, 'fade-in': !hovering }"></i>
      <i
        class="bi bi-arrow-right arrow"
        :class="{ 'slide-in': hovering, 'slide-out': !hovering }"
      ></i>
    </span>
  </button>
</template>

<style scoped>
.gradient-button {
  background: linear-gradient(90deg, #769bd9 0%, #7aadda 50%, #83cade 100%);
  background-size: 200% 100%;
  background-position: right center;
  color: white;
  border: none;
  border-radius: 100px;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  transition: background-position 0.6s ease-in-out;
  position: relative;
  overflow: hidden;
}

.gradient-button:hover {
  background-position: left center;
}

.icon-container {
  position: relative;
  display: inline-block;
  width: 1.2em;
  height: 1em;
  margin-left: 0.5em;
}

.dot,
.arrow {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

/* --- dot 動畫 --- */
.dot {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.dot.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dot.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease 0.3s; /* 延遲淡入 */
}

/* --- arrow 動畫 --- */
.arrow {
  opacity: 0;
  transform: translate(-10px, -50%);
}

.arrow.slide-in {
  opacity: 1;
  transform: translate(0, -50%);
  transition:
    opacity 0.3s ease 0.3s,
    transform 0.4s ease 0.3s;
}

.arrow.slide-out {
  opacity: 0;
  transform: translate(-10px, -50%);
  transition:
    opacity 0.3s ease,
    transform 0.4s ease;
}
</style>
