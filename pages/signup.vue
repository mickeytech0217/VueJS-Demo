<template>
  <div>
    <h1>Create Account</h1>
    <div>
      <div style="margin-bottom: 10px">
        <div>
          <label>First Name</label>
        </div>
        <input />
      </div>
      <div style="margin-bottom: 10px">
        <div>
          <label>Last Name</label>
        </div>
        <input />
      </div>
      <div style="margin-bottom: 10px">
        <div>
          <label>User Name</label>
        </div>
        <input />
      </div>
      <div style="margin-bottom: 10px">
        <div>
          <label>Password</label>
        </div>
        <input />
      </div>
    </div>
    <div>
      <button @click="handleCreateAccount" class="button">
        Create Account
      </button>
      <button @click="navigateTo('/login')" class="sign-button">login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleCreateAccount = () => navigateTo("/login");
</script>

<style scoped>
.button {
  padding: 0.4em 0.6em;
  background-color: aqua;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 0.5em;
  cursor: pointer;
  font-size: 1em;
  margin-right: 0.5em;
}

.sign-button {
  padding: 0.4em 0.6em;
  background-color: lightgreen;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 0.5em;
  cursor: pointer;
  font-size: 1em;
  margin-right: 0.5em;
}
</style>
