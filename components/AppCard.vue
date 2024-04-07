<template>
  <div class="card-container">
    <img :src="image" class="card-image" />
    <h4 class="card-title">{{ title.slice(0, 60) }}...</h4>
    <h5 class="card-price">Price-${{ price }}</h5>
    <p class="card-description">{{ description.slice(0, 100) }}...</p>
    <button class="card-btn">Add Cart</button>
  </div>
</template>

<script setup lang="ts">
type TProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const x = defineProps<TProductTypes>();
</script>

<style scoped>
.card-container {
  background-color: blanchedalmond;
  padding: 0.5em 0.7em 1em;
  max-width: 25%;
  max-height: 20em;
  overflow-wrap: break-word;
  box-shadow: 6px 8px 10px 1px black;
  border-radius: 10px;
}
.card-image {
  width: 100%;
  height: 40%;
  object-fit: scale-down;
  border-radius: 10px;
}

.card-title {
  margin: 0 0 0.6em;
  padding: 0;
  font-weight: bold;
  font-size: large;
}

.card-price {
  margin: 0;
  padding: 0;
}

.card-btn {
  display: block;
  width: 100%;
  background-color: aqua;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.6em 0;
  margin: 0;
}

.card-btn:hover {
  background-color: red;
}
</style>
