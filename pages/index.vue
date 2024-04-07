<template>
  <button @click="handleClick">Show Toast</button>
  <div v-for="item in result" class="conatiner">
    <h1>Hello</h1>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

const handleClick = () => {
  toast("Wow so easy !", {
    autoClose: 1000,
  });
};
let result: number[] = [];

for (let i = 0; i < 100; i++) {
  result.push(i);
}
</script>

<style scoped>
.conatiner {
  display: flex;
  justify-content: center;
}
</style>
