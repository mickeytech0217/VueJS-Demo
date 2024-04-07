<template>
  <div>
    <h1>Login Page</h1>
    <div>
      <div>
        <div style="margin-bottom: 10px">
          <div>
            <label>userName*</label>
          </div>
          <input />
        </div>
        <div>
          <div>
            <label>Password*</label>
          </div>

          <input />
        </div>
      </div>
      <div>
        <button class="button" @click="handleLogin">Log IN</button>
        <button class="sign-button" @click="handleSignUp">Sign Up</button>
      </div>
      <div style="margin-top: 0.5em">
        <NuxtLink to="/forgot-password">Forgot Password</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleLogin = () => navigateTo("/products");

const handleSignUp = () => navigateTo("/signup");
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
.my-style {
  text-decoration: underline;
  font-size: 1em;
  cursor: pointer;
}
</style>
