<template>
  <div>


    <input v-model="question" placeholder="edit me" />
    <button @click="execute">ask</button>

    <p>Question is: {{ question }}</p>
    <p>Answer is: {{
        answer
      }}</p>
  </div>


</template>

<script>
import Calculator from "@/Calculator";

export default {
  name: "MagickInput",
  data() {
    return {
      question: 'tmptaco',
      answer: 'tmpanswer'
    }
  },
  methods: {
    execute() {
      this.answer = Calculator.evaluate(this.question);
    }
  }
}
</script>

<style scoped>

</style>