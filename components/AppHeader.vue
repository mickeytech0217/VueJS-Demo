<template>
  <div class="container">
    <h4>App Header</h4>
    <header>
      <nav>
        <ul class="container-header">
          <li v-for="item in routingData" :key="item.name">
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  padding: 0em 0.9em;
}
.container-header {
  display: flex;
  gap: 4em;
}
</style>
