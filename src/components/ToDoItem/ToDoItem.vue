<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      moment,
      nextLabelMapping: {
        NEW: "Start",
        IN_PROGRESS: "Complete",
      },
    };
  },
});
</script>

<template>
  <div v-if="!!data.id" class="card w-100 h-100">
    <img
      v-if="!!data.thumbnail"
      :src="data.thumbnail"
      :alt="data.thumbnail"
      class="card-img-top"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ moment(data.createdAt).format("hh:mm:ss DD-MMM-YYYY") }}
      </p>
      <p
        class="card-text flex-grow-1 text-truncate-4"
        :title="data.description"
      >
        {{ data.description }}
      </p>
      <div class="d-flex justify-between items-center gap-2">
        <a
          v-if="data.status !== 'COMPLETED'"
          class="btn btn-primary w-100"
          @click="$emit('next')"
          >{{ nextLabelMapping[data.status] }}</a
        >
        <a class="btn btn-warning w-100" @click="$emit('edit')"
          >Edit</a
        >
        <a class="btn btn-outline-secondary w-100" @click="$emit('remove')"
          >Remove</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  font-size: 17px;
  font-weight: bold;
}
.card-img-top {
  min-height: 200px;
}
.text-truncate-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
