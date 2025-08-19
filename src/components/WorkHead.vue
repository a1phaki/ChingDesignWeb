<template>
  <div class="head bg-danger background">
    <div class="container">
      <div>
        <h2 class="text-dark h1 pb-8 mb-0 fw-medium">Work</h2>
        <div class="row g-0 justify-content-between pb-16">
          <div class="col-4">
            <span class="button border border-1 border-success text-success lh-170">
              {{ props.tag }}
            </span>
            <h3 class="text-success mb-0 pt-4 fw-medium">{{ props.title }}</h3>
            <p class="pt-16">
              {{ props.content }}
            </p>
          </div>
          <div class="col-7">
            <img
              :src="imgUrl"
              :alt="alt"
              class="img-fluid border border-1 border-secondary img-rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tag: { type: String, required: true },
  imgUrl: { type: String, required: true },
  alt: { type: String, default: 'image' },
})
</script>

<style scoped>
h3 {
  font-size: 36px;
}
p {
  line-height: 170%;
  color: #25262d;
}
.head {
  height: 85vh;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button {
  border-radius: 100px;
  padding: 6px 20px;
}
.img-rounded {
  border-radius: 24px;
}
</style>
