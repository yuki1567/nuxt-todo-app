<template>
  <div class="input-form">
    <form @submit="">
      <input type="text" v-model="inputText" @change="handleChange" />
      <button className="add-button">
        <span className="material-icons icon">add</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const inputText = ref("");
</script>

<style>
.input-form {
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.input-form input {
  padding: 3px 8px;
  border: 1px solid rgb(218 220 222);
  border-radius: 3px;
  flex-grow: 1;
}

.add-button {
  background: rgb(83, 164, 195);
}
</style>
