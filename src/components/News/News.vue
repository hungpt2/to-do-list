<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import NewsItem from "@/components/NewsItem/NewsItem.vue";

export default defineComponent({
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters(["news"]),
  },
});
</script>

<template>
  <div>
    <div class="label">News</div>
    <div class="row">
      <div v-for="(item, index) in news" class="col-12">
        <NewsItem :data="item" :isOdd="index % 2 !== 0" />
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
