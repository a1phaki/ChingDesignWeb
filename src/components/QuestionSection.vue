<template>
  <section>
    <BaseDot text="問題定義" class="pb-4" />
    <p class="pb-12 mb-0">
      {{ props.content }}
    </p>
    <div class="row gy-8 gx-16">
      <div v-for="question in props.questions" :key="question.num" class="col-6">
        <QuestionDefineCard
          :title="question.title"
          :content="question.content"
          :num="question.num"
          :img-url="question.img"
          :alt="question.alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseDot from '@/components/Dot.vue'
import QuestionDefineCard from './QuestionDefineCard.vue'
const props = defineProps({
  questions: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (question) =>
          'title' in question &&
          'content' in question &&
          'num' in question &&
          'img' in question &&
          'alt' in question,
      )
    },
  },
  content: { type: String, required: true },
})
</script>
