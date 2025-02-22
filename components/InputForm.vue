<template>
  <div class="input-form">
    <form @submit="handleSubmit">
      <input type="text" v-model="inputText" />
      <button className="add-button">
        <span className="material-icons icon">add</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const inputText = ref("");

const props = defineProps({ tasks: Array });

const emit = defineEmits(["addTask"]);

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const newTask = {
    id: props.tasks?.length,
    text: inputText.value,
    completed: false,
    editing: false,
  };

  emit("addTask", newTask);

  inputText.value = "";
};
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
