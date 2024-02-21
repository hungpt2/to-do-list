<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import ToDoItem from "@/components/ToDoItem/ToDoItem.vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";

export default defineComponent({
  components: {
    ToDoItem,
    TaskForm,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      openForm: false,
      editData: {},
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    data() {
      if (!this.type) {
        return this.tasks;
      }
      return this.tasks.filter((el) => el.status === this.type);
    },
  },
  mounted() {},
  methods: {
    ...mapActions(["updateTask", "removeTask"]),
    onAddNew() {
      this.editData = {};
      this.openForm = !this.openForm;
    },
    onEdit(item) {
      this.editData = item;
      this.openForm = !this.openForm;
    },
    onStart(item) {
      this.updateTask({
        ...item,
        status: this.type === "NEW" ? "IN_PROGRESS" : "COMPLETED",
      });
    },
  },
});
</script>

<template>
  <div>
    <TaskForm
      v-if="openForm"
      :isOpen="openForm"
      :data="editData"
      @close="
        () => {
          openForm = !openForm;
        }
      "
    />
    <div class="d-flex justify-content-between align-items-center">
      <div class="label">Todo</div>
      <button type="button" class="btn btn-primary" @click="onAddNew()">
        Add Task
      </button>
    </div>
    <div class="row">
      <div v-for="item in data" class="col-12 col-sm-6 col-md-4 py-2">
        <ToDoItem
          :data="item"
          @next="onStart(item)"
          @edit="onEdit(item)"
          @remove="removeTask(item)"
        />
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
