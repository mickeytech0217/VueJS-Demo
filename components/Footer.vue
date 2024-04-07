<template>
  <div
    v-for="item in iconsDetails"
    :key="item.id"
    @click="handleClick(item.id)"
  >
    <Icon
      :name="item.name"
      size="34"
      class="cont"
      :class="{ 'active-cont': activeIcon === item.id }"
    />
  </div>
</template>

<script setup lang="ts">
const iconsDetails = [
  { id: 1, name: "material-symbols:home-rounded" },
  { id: 2, name: "material-symbols:calendar-today" },
  { id: 3, name: "material-symbols:label-important" },
  { id: 4, name: "material-symbols:event-upcoming-outline" },
];

const activeIcon = ref<number | null>(null);

const handleClick = (id: number) => {
  activeIcon.value = id;
};
</script>

<style scoped>
.cont {
  background-color: aqua;
  padding: 0.4em;
  border-radius: 10px;
  cursor: pointer;
}

.cont:hover {
  background-color: cadetblue;
  color: aliceblue;
}

.active-cont,
.active-cont:hover {
  background-color: red;
  color: white;
}
</style>
