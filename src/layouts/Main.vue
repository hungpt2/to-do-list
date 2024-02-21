<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav/Nav.vue";

export default defineComponent({
  components: {
    Nav,
  },
});
</script>

<template>
  <div>
    <Nav />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  height: calc(100vh - 40px);
  overflow: auto;
  padding-bottom: 60px;
}
</style>
