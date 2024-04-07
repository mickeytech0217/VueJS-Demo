<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <div class="header">
        <Header
          :hamburger="hamburger"
          @handleHamburger="(value) => handleClick(value)"
        />
      </div>
      <div class="app-body" v-if="!hamburger">
        <slot />
      </div>
    </div>
    <div class="footer" v-if="!hamburger">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const hamburger = ref(false);

const handleClick = (val: boolean) => (hamburger.value = val);
</script>

<style scoped>
.container {
  width: 100%;
}
.sidebar {
  display: none;
}

.footer {
  position: fixed;
  background-color: #f2e0e0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.7em 0;
  border-radius: 10px;
}

.header {
  position: sticky;
  top: 0;
  background-color: beige;
}

@media (min-width: 576px) {
  .footer {
    display: none;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>
