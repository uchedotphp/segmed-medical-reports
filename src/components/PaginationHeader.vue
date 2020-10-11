<template>
  <div class="flex justify-between py-1 pr-2 pl-16 border-b border-gray-300">
    <div class="">
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
      <button class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none">
        <svg
          class="h-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-b</title>
          <path
            d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <polyline
            points="256 58 336 138 256 218"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          />
        </svg>
      </button>

      <button class="hover:bg-gray-200 rounded-full p-2 text-sm mr-4 focus:outline-none">
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
            style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
          />
          <circle
            cx="256"
            cy="416"
            r="32"
            style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
          />
          <circle
            cx="256"
            cy="96"
            r="32"
            style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
          />
        </svg>
      </button>
    </div>
    <div>
      <button class="hover:bg-gray-200 rounded px-2 py-2 text-sm mr-8 focus:outline-none">
        {{ page }} - 20 of {{ reportsCount }}
      </button>
      <router-link tag="button" :disabled="page == 1" :to="{ name: 'AllReports', query:{ page: page - 1} }"
      rel="prev" 
      class="rounded-full px-2 py-2 mr-2 focus:outline-none"  :class="[page == 1 ? 'hover:bg-white' : 'hover:bg-gray-200']">
        <svg
          class="h-4 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="328 112 184 256 328 400"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
          />
        </svg>
      </router-link>
      <router-link tag="button" :disabled='reportsCount <= page * 20' :class="[reportsCount <= page * 20 ? 'hover:bg-white' : 'hover:bg-gray-200'] " :to="{ name: 'AllReports', query:{ page: page + 1} }"
      rel="next" 
      class="rounded-full px-2 py-2 focus:outline-none">
        <!-- bg-gray-200 -->
        <svg
          class="h-4 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="184 112 328 256 184 400"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
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
      pageCount: 1
    }
  },
  watch: {
    page(newValue, oldValue) {
      console.log('value of old: ',oldValue,' and value of new: ',newValue)
      this.pageCount = newValue + 10
    }
  },
  mounted () {
    console.log('reports count: ',this.reportsCount)
  },
  created () {
    this.$store
      .dispatch("fetchReports", 
        this.page,
      )
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapGetters(["reportsCount", "fetchAllReports"]),
    ...mapState(['reports'])
  }
};
</script>

<style lang="scss" scoped>
</style>