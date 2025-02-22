<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import "material-icons/iconfont/material-icons.css";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: rgb(51 51 51);
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #ffffff 40%, #b1d9ff);
}

button {
  border: none;
  padding: 8px 8px;
  border-radius: 3px;
}

form {
  display: flex;
  align-items: stretch;
  width: 450px;
}

.icon {
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
