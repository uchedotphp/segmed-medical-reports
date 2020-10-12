<template>
  <div class="ml-5">
    <div
      v-for="report in fetchAllReports"
      :key="report.id"
      @click="
        $router.push({
          name: 'ReportDetail',
          params: { id: report.id },
        })
      "
      class="house cursor-pointer hover:shadow-sm hover:border-gray-400 w-full px-4 py-2 border-b-2 border-gray-300"
    >
      <div class="">
        {{ report.id }}
      </div>
      <div class="">
        <input type="checkbox" class="mr-6" />
        <span class="text-lg inline-block"> Report {{ report.id }} </span>
      </div>
      <div class="truncate mr-4">
        <span class="font-bold"> {{ report.title }} - </span>
        <span class="text-gray-600">
          {{ report.body }}
        </span>
      </div>
      <div class="bg-green-300">#{{ report.tag }}</div>
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
};
</script>

<style lang="scss" scoped>
.house {
  display: grid;
  grid-template-columns: 30px 150px auto 85px;
}
</style>