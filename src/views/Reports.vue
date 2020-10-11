<template>
  <div class="ml-5">
    <div
      v-for="report in fetchAllReports"
      :key="report.id"
      @click="openReport"
      class="flex space-x-10 cursor-pointer hover:shadow-sm hover:border-gray-400 w-full px-4 py-2 border-b-2 border-gray-300"
    >
      <div class="">
        {{ report.id }}
      </div>
      <div class="">
        <input type="checkbox" class="" />
        <span class="text-lg inline-block"> Report {{ report.id }} </span>
      </div>
      <div class="truncate">
        <span class="font-bold"> {{ report.title }} - </span>
        <span class="text-gray-600">
          {{ report.body }}
        </span>
      </div>
      <div class="">Dates</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Reports",
  created() {
    this.$store.dispatch("fetchReports", this.page);
  },
  computed: {
    ...mapGetters(["fetchAllReports"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
  },
  methods: {
    openReport() {
      this.$router.push({
        name: "Report",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>