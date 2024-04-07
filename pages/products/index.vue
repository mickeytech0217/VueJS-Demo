<template>
  <div class="container">
    <AppCard v-for="product in products" v-bind="product" :key="product.id" />
  </div>
</template>

<script setup lang="ts">
const { data: products, pending, error } = useAppFetch("/products");
</script>

<style scoped>
.container {
  display: flex;
  gap: 3em;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
