<template>
  <div>
    <div class="header-container" v-if="!hamburger">
      <h1>Header</h1>
      <Icon
        name="pajamas:hamburger"
        size="38"
        @click="$emit('handleHamburger', true)"
      />
    </div>
    <div class="coon" v-else>
      <div class="child">
        <Icon
          name="akar-icons:cross"
          size="48"
          @click="$emit('handleHamburger', false)"
        />
      </div>
      <div class="bar-cont">
        <div>
          <div
            v-for="item in data"
            :key="item.id"
            :class="{ 'active-bar': activeBar === item.id, bar: true }"
            @click="() => (activeBar = item.id)"
          >
            <Icon :name="item.iconName" size="35" />
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ThamTypes = {
  hamburger: boolean;
};

defineProps<ThamTypes>();

const activeBar = ref<null | number>(null);

const data = [
  { id: 1, iconName: "material-symbols:home-rounded", name: "Todo" },
  { id: 2, iconName: "material-symbols:calendar-today", name: "Tags" },
  { id: 3, iconName: "material-symbols:label-important", name: "Upcoming" },
  {
    id: 4,
    iconName: "material-symbols:event-upcoming-outline",
    name: "Today",
  },
];
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid black;
  padding: 0 1em;
}
.coon {
  width: 100%;
  height: 100vh;
  background-color: beige;
  position: relative;
  overflow-y: hidden;
}

.child {
  position: absolute;
  right: 2%;
  top: 2%;
}

.active-bar,
.active-bar:hover {
  background-color: aqua;
}

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}
.bar-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bar:hover {
  background-color: azure;
}
</style>
