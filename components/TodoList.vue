<template>
  <ul class="todo-list" v-for="task in tasks" :key="task.id">
    <li class="todo-item" :class="isCompleted(task.isCompleted)">
      <span v-if="!task.isEditing" class="todo-text">{{ task.text }}</span>
      <input v-else class="edit-input" v-model="inputText" />
      <div class="todo-actions">
        <a class="check-link" @click="handleCheck(task.id)">check</a>
        <span class="separator">|</span>
        <a
          v-if="!task.isEditing"
          class="edit-link"
          @click="handleEdit(task.id, task.text)"
          >edit</a
        >
        <a v-else class="save-link" @click="handleSave(task.id)">save</a>
        <span class="separator">|</span>
        <a class="delete-link">delete</a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Task } from "@/typs";

defineProps<{ tasks: Task[] }>();

const emit = defineEmits(["completedTask", "editTask", "saveTask"]);

const inputText = ref("");

const handleCheck = (id: number) => {
  emit("completedTask", id);
};

const isCompleted = (completed: boolean) => {
  return completed ? "completed" : "";
};

const handleEdit = (id: number, text: string) => {
  inputText.value = text;
  emit("editTask", id);
};

const handleSave = (id: number) => {
  emit("saveTask", id, inputText.value);
};
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
  padding: 0px 5px;
  border: 1px solid rgb(218 220 222);
  border-radius: 3px;
}
</style>
