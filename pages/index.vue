<template>
  <header>
    <Title />
  </header>
  <main>
    <InputForm :tasks="taskList" @addTask="addTask" />
    <TodoList
      :tasks="taskList"
      @completedTask="completedTask"
      @editTask="editTask"
      @saveTask="saveTask"
      @deleteTask="deleteTask"
    />
  </main>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import InputForm from "@/components/InputForm.vue";
import type { Task } from "@/typs";
import TodoList from "@/components/TodoList.vue";

const taskList = ref<Task[]>([]);

const addTask = (newTask: Task) => {
  taskList.value.push(newTask);
};

const completedTask = (id: number) => {
  taskList.value = taskList.value.map((task) => {
    if (task.id === id) {
      task.isCompleted = !task.isCompleted;
    }
    return task;
  });
};

const editTask = (id: number) => {
  taskList.value = taskList.value.map((task) => {
    if (task.id === id) {
      task.isEditing = true;
    }
    return task;
  });
};

const saveTask = (id: number, newText: string) => {
  taskList.value = taskList.value.map((task) => {
    if (task.id === id) {
      task.text = newText;
      task.isEditing = false;
    }
    return task;
  });
};

const deleteTask = (id: number) => {
  taskList.value = taskList.value.filter((task) => task.id !== id);
};
</script>

<style>
header {
  text-align: center;
  margin: 100px auto;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
