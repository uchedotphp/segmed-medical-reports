<template>
  <div class="flex justify-between py-1 pr-2 pl-16 border-b border-gray-300">
    <div class="" v-if="$route.name !== 'ReportDetail'">
      <input type="checkbox" class="mr-3" />
      <!-- <svg class="h-3 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>ionicons-v5-b</title>
        <path
          d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z"
        />
      </svg> -->
      <button
        @click="reload"
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          class="h-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-b</title>
          <path
            d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <polyline
            points="256 58 336 138 256 218"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 32px;
            "
          />
        </svg>
      </button>

      <button
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          class="h-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-f</title>
          <circle
            cx="256"
            cy="256"
            r="32"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <circle
            cx="256"
            cy="416"
            r="32"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <circle
            cx="256"
            cy="96"
            r="32"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
        </svg>
      </button>
    </div>
    <div v-else>
      <button @click="$router.go(-1)"
        class="hover:bg-gray-200 rounded-full p-2 text-sm ml-2 mr-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5"
          viewBox="0 0 512 512"
        >
          <title>Arrow Back</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      </button>
      <button
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5"
          viewBox="0 0 512 512"
        >
          <title>Archive</title>
          <path
            d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect
            x="48"
            y="64"
            width="416"
            height="80"
            rx="28"
            ry="28"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M320 304l-64 64-64-64M256 345.89V224"
          />
        </svg>
      </button>
      <button
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5"
          viewBox="0 0 512 512"
        >
          <title>Trash</title>
          <path
            d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M80 112h352"
          />
          <path
            d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </button>
      <button
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5"
          viewBox="0 0 512 512"
        >
          <title>Time</title>
          <path
            d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 128v144h96"
          />
        </svg>
      </button>
      <button
        class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5"
          viewBox="0 0 512 512"
        >
          <title>Pricetags</title>
          <path
            d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z" />
          <path
            d="M230 480l262-262a13.81 13.81 0 004-10V80"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </button>
    </div>
    <div>
      <button
        class="hover:bg-gray-200 rounded px-2 py-2 text-sm mr-8 focus:outline-none"
      >
        {{ page }} - 20 of {{ reportsCount }}
      </button>
      <router-link
        tag="button"
        :disabled="page == 1"
        :to="{ name: 'AllReports', query: { page: page - 1 } }"
        rel="prev"
        class="rounded-full px-2 py-2 mr-2 focus:outline-none"
        :class="[page == 1 ? 'hover:bg-white' : 'hover:bg-gray-200']"
      >
        <svg
          class="h-4 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="328 112 184 256 328 400"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 48px;
            "
          />
        </svg>
      </router-link>
      <router-link
        tag="button"
        :disabled="reportsCount <= page * 20"
        :class="[
          reportsCount <= page * 20 ? 'hover:bg-white' : 'hover:bg-gray-200',
        ]"
        :to="{ name: 'AllReports', query: { page: page + 1 } }"
        rel="next"
        class="rounded-full px-2 py-2 focus:outline-none"
      >
        <!-- bg-gray-200 -->
        <svg
          class="h-4 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="184 112 328 256 184 400"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 48px;
            "
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "PaginationHeaderComponent.vue",
  data() {
    return {
      pageCount: 1,
    };
  },
  watch: {
    page(newValue, oldValue) {
      console.log("value of old: ", oldValue, " and value of new: ", newValue);
      this.pageCount = newValue + 10;
    },
  },
  mounted() {
    console.log("reports count: ", this.reportsCount);
  },
  created() {
    this.$store.dispatch("fetchReports", this.page);
  },
  methods: {
    reload() {
      location.reload();
    },
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapGetters(["reportsCount", "fetchAllReports"]),
    ...mapState(["reports"]),
  },
};
</script>

<style lang="scss" scoped>
</style>