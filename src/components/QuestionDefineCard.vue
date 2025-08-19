<template>
  <div class="card border-0 bg-warning problem-card">
    <div class="card-body p-8 row g-12 justify-content-between">
      <div class="col-7">
        <div class="card-title pb-10 mb-0">
          <span
            class="step-number fw-bold d-inline-flex justify-content-center align-items-center rounded-circle bg-success text-white lh-140"
            >{{ props.num }}</span
          >
          <h4 class="d-inline-block ps-4 text-success fw-bold lh-140 fs-9">
            {{ props.title }}
          </h4>
        </div>
        <p class="card-text lh-base">{{ props.content }}</p>
      </div>
      <div class="col-5">
        <img :src="imgUrl" :alt="alt" class="img-fluid rounded-3" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  num: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  alt: { type: String, default: 'image' },
})
</script>

<style scoped>
.problem-card {
  border-radius: 12px;
}
.step-number {
  width: 28px;
  height: 28px;
}
</style>
