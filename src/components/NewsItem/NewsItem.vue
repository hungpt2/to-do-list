<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isOdd: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<template>
  <div class="card mb-5 w-100 border-0">
    <div class="row g-0 flex" :class="[!isOdd ? 'flex-row' : 'flex-row-reverse']">
      <div class="col-md-4">
        <img
          v-if="!!data.thumbnail"
          :src="data.thumbnail"
          :alt="data.thumbnail"
          class="img-fluid w-100"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ data.title }}</h5>
          <p class="card-text" :title="data.description">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  font-size: 17px;
  font-weight: bold;
}
</style>
