<template>
  <header>
    <Title />
  </header>
  <main>
    <InputForm :value="taskList" @updateTaskList="updateTaskList" />
  </main>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import InputForm from "@/components/InputForm.vue";
import type { Task } from "@/typs";

const taskList = reactive<Task[]>([]);

const updateTaskList = (updateValue: Task) => {
  taskList.push(updateValue);
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
