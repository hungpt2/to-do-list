<script>
import { defineComponent } from "vue";
import ToDoList from "@/components/ToDoList/ToDoList.vue";
import News from "@/components/News/News.vue";

export default defineComponent({
  components: {
    ToDoList,
    News,
  },
});
</script>

<template>
  <div class="container">
    <ToDoList class="mt-4" type="COMPLETED" />
    <News class="mt-5" />
  </div>
</template>

<style scoped></style>
