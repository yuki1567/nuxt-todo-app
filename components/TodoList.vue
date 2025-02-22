<template>
  <ul class="todo-list" v-for="task in value">
    <li class="todo-item">
      <span class="todo-text">{{ task.text }}</span>
      <div class="todo-actions">
        <a class="check-link">check</a>
        <span class="separator">|</span>
        <a class="edit-link">edit</a>
        <span class="separator">|</span>
        <a class="delete-link">delete</a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({ value: Array });
</script>

<style>
.todo-lists {
  width: 100vw;
  margin: 50px auto;
}

.icons {
  display: flex;
  justify-content: end;
}

.completed {
  text-decoration: line-through;
  opacity: 0.3;
}

.todo-list {
  list-style: none;
  width: 450px;
}

.todo-item {
  background: white;
  padding: 10px;
  display: flex;
  border-top: 1px solid rgb(218 220 222);
  border-right: 1px solid rgb(218 220 222);
  border-bottom: 1px solid rgb(218 220 222);
  border-left: 3px solid rgb(67 130 196);
  border-radius: 3px;
  justify-content: space-between;
  margin: 3px 0;
}

.todo-actions {
  width: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.todo-actions a {
  font-size: 14px;
  color: #0954ab;
  text-decoration: none;
  cursor: pointer;
}

.separator {
  color: rgb(191 194 196);
}

.edit-input {
  padding: 0px 3px;
  border: solid rgb(218 220 222);
  border-radius: 3px;
}
</style>
