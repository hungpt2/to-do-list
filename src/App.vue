<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  mounted() {
    this.initialData();
  },
  methods: {
    ...mapActions(["getUserInfo", "getNews", "getTasks"]),
    initialData() {
      this.getUserInfo();
      this.getNews();
      this.getTasks();
    },
  },
});
</script>

<template>
  <router-view />
</template>

<style scoped></style>
