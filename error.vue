<template>
  <div>
    <h1>This is Error Page</h1>
    <h3>{{ error?.statusCode }}</h3>
    <h3>{{ error?.message }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<style scoped></style>
