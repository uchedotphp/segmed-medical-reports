<template>
  <div>
    <NavigationMenu />
    <div class="ml-5">
      <router-link
        v-for="report in fetchAllReports"
        :key="report.id"
        :to="{
          name: 'ReportDetail',
          params: { id: report.id },
        }"
        class="house hover:shadow-sm border-b-2 hover:border-gray-400 w-full px-4 py-2 border-gray-300"
      >
        <!-- <div class="border-b-2 "> -->
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
        <div
          :class="[
            report.tag == 'conditionReport' ? 'bg-red-300' : 'bg-green-300',
          ]"
        >
          #{{ report.tag }}
        </div>
      </router-link>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationMenu from "@/components/NavigationMenu";
export default {
  name: "Reports",
  components: {
    NavigationMenu,
  },
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
  grid-template-columns: 30px 150px auto 110px;
}

a:link {
  color: #000000;
}

/* visited link */
a:visited {
  color: #757575;
}
</style>