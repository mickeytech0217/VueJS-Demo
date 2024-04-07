<template>
  <div>
    <h1>Hi from {{ route.name }}</h1>
    <p class="log" @click="navigateTo('/login')">Back to Login</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
.log {
  cursor: pointer;
  text-decoration: underline;
  font-size: large;
}
</style>
