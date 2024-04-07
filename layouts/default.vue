<template>
  <div class="container">
    <div class="header">
      <AppHeader />
    </div>
    <div class="body">
      <div class="sidebar">
        <AppSideBar />
      </div>
      <div class="app-body">
        <slot />
      </div>
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 5em minmax(72vh, 1fr) 6em;
  grid-template-columns: repeat(6, 1fr);
}

.header {
  position: -webkit-sticky;
  grid-area: 1 / 1 /2 / 7;
  background-color: aqua;
  position: sticky;
  top: 0;
}
.body {
  grid-area: 2 / 1 /3 / 7;
  background-color: burlywood;
  display: grid;
  grid-template-columns: minmax(10em, 15em) 1fr;
}
.footer {
  grid-area: 3 / 1 /4 / 7;
  background-color: red;
}

.sidebar {
  grid-column: 1/2;
  background-color: blue;
}
.app-body {
  background-color: aliceblue;
  padding: 1em;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
