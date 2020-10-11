<template>
  <div class="ml-5">
    <div
      v-for="report in fetchAllReports"
      :key="report.title"
      @click="openReport"
      class="cursor-pointer truncate hover:shadow-sm hover:border-gray-400 w-full px-4 py-2 border-b-2 border-gray-300"
    >
      <span class="mr-4">
        {{ report.id }}
      </span>
      <input type="checkbox" class="ml-8" />
      <span class="ml-10 text-lg inline-block"> Report {{ report.id }} </span>
      <span class="ml-20 font-bold"> {{ report.title }} - </span>
      <span class="text-gray-600">
        {{ report.body }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Reports",
  created() {
    this.$store
      .dispatch("fetchReports",
      this.page
      )
  },
  computed: {
    ...mapGetters(["fetchAllReports"]),
    page() {
      return parseInt(this.$route.query.page) || 1
    }
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