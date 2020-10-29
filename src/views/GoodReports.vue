<template>
  <div>
    <NavigationMenu />
    <div class="ml-5">
      <div v-if="fetchAllGoodReports.length > 0">
        <router-link
        :to="{
          name: 'ReportDetail',
          params: { id: report.id },
        }"
          v-for="report in fetchAllGoodReports"
          :key="report.id"
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
          <div class="bg-green-300 text-black">#{{ report.tag }}</div>
        </router-link>
      </div>
      <div
        v-else
        class="text-center w-full px-4 py-2 border-b-2 border-gray-300"
      >
        No Reports Available. Try moving some reports to this archive.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationMenu from "@/components/NavigationMenu";
export default {
  name: "GoodReports",
  components: {
    NavigationMenu,
  },
  // created() {
  //   this.$store.dispatch("fetchGoodReports", this.page);
  //   console.log('ok',this.fetchAllGoodReports)
  // },
  computed: {
    ...mapGetters(["fetchAllGoodReports"]),
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

a:link {
  color: #000000;
}

/* visited link */
a:visited {
  color: #757575;
}
</style>