<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import moment from "moment";

export default defineComponent({
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: "",
      description: "",
      errors: {},
    };
  },
  computed: {},
  mounted() {
    if (this.data && this.data.id) {
      this.title = this.data.title;
      this.description = this.data.description;
    }
  },
  methods: {
    ...mapActions(["addTask", "updateTask"]),
    isRequired(value) {
      if (!value) {
        return "this field is required";
      }

      return true;
    },
    onSubmit() {
      this.errors = {};
      if (!this.title) {
        this.errors["title"] = true;
      }
      if (!this.title) {
        this.errors["description"] = true;
      }
      if (this.data && this.data.id) {
        this.updateTask({
          ...this.data,
          title: this.title,
          description: this.description,
        });
      } else {
        this.addTask({
          id: Math.floor(Math.random() * 99999999),
          title: this.title,
          description: this.description,
          createdAt: moment().format("hh:mm:ss DD-MMM-YYYY"),
          thumbnail: `http://dummyimage.com/320x200.png/${(
            (Math.random() * 0xffffff) <<
            0
          )
            .toString(16)
            .padStart(6, "0")}/${((Math.random() * 0xffffff) << 0)
            .toString(16)
            .padStart(6, "0")}`,
          status: "NEW",
        });
      }
      this.$emit("close");
      this.title = "";
      this.description = "";
    },
  },
});
</script>

<template>
  <div
    class="modal fade"
    :class="{ 'show d-block': isOpen }"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <form>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Task Form</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row g-3 needs-validation" novalidate>
              <div class="col-12">
                <label for="validationCustom01" class="form-label">Title</label>
                <input v-model="title" type="text" class="form-control" />
                <div
                  class="invalid-feedback"
                  :class="{ 'd-block': errors['title'] }"
                >
                  Required!
                </div>
              </div>
              <div class="col-12">
                <label for="validationCustom02" class="form-label"
                  >Description</label
                >
                <textarea
                  v-model="description"
                  type="text"
                  class="form-control"
                />
                <div
                  class="invalid-feedback"
                  :class="{ 'd-block': errors['description'] }"
                >
                  Required!
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="$emit('close')"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="onSubmit()">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div v-if="isOpen" class="modal-backdrop fade show"></div>
</template>

<style scoped></style>
