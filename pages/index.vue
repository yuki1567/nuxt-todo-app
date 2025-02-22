<template>
  <header>
    <Title />
  </header>
  <main>
    <InputForm />
  </main>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
import InputForm from "@/components/InputForm.vue";
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
