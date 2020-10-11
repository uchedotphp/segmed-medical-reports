<template>
  <div
    class="flex justify-between items-baseline py-2 px-4 border-b border-gray-300"
  >
    <div class="flex-1">
      <button
        class="hover:bg-gray-200 focus:outline-none rounded-full px-2 py-2 mr-4"
      >
        <svg
          class="h-6 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-j</title>
          <line
            x1="80"
            y1="160"
            x2="432"
            y2="160"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <line
            x1="80"
            y1="256"
            x2="432"
            y2="256"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <line
            x1="80"
            y1="352"
            x2="432"
            y2="352"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
        </svg>
      </button>
      <img
        src="./../assets/logo+black.png"
        class="h-10 inline-block mr-24"
        alt=""
        srcset=""
      />
      <div class="relative inline-block w-2/5">
        <div class="w-fullshadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-6 absolute boxxy"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
          <!-- <input type="button" class="cursor-default relative w-full rounded-md border border-red-500 bg-gray-200 pl-3 pr-10 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150"> -->
          <input v-model="searchQuery"
            @focus="isOpen = !isOpen"
            @blur="isOpen = !isOpen"
            @keypress="touch"
            type="text"
            class="rounded-md bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md py-3 pl-16 pr-5 placeholder-gray-600 w-full"
            placeholder="Search reports"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg" class="h-4 absolute boxxy2"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5-b</title>
            <path
              d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z"
            />
          </svg>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100 transform"
          enter-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75 transform"
          leave-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            class="absolute -mt-1 w-full bg-white shadow-lg"
            v-show="isOpen"
          >
            <ul v-if="showSearch"
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="max-h-56 rounded-b-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
            >
              <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
              <li v-for="report in search" :key="report.id"
                id="listbox-item-0"
                role="option"
                class="text-gray-900 cursor-default relative py-2 pl-5 pr-9 hover:bg-gray-200 border-l-2 border-white hover:border-red-500"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    class="ionicon flex-shrink-0 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Mail Open</title>
                    <path
                      d="M441.6 171.61L266.87 85.37a24.57 24.57 0 00-21.74 0L70.4 171.61A40 40 0 0048 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 00-22.44-35.78z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      d="M397.33 368L268.07 267.46a24 24 0 00-29.47 0L109.33 368M309.33 295l136-103M61.33 192l139 105"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                  <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                  <span class="px-3 block truncate"> {{ report.body }} </span>
                </div>

                <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                  <!-- Heroicon name: check -->
                  <!-- Oct 10 -->
                </span>
              </li>

              <!-- <li
                id="listbox-item-0"
                role="option"
                class="text-gray-900 cursor-default relative py-2 pl-5 pr-9 mb-1 hover:bg-gray-200 border-l-2 border-white hover:border-red-500"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    class="ionicon flex-shrink-0 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Mail Open</title>
                    <path
                      d="M441.6 171.61L266.87 85.37a24.57 24.57 0 00-21.74 0L70.4 171.61A40 40 0 0048 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 00-22.44-35.78z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      d="M397.33 368L268.07 267.46a24 24 0 00-29.47 0L109.33 368M309.33 295l136-103M61.33 192l139 105"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                  <span class="pl-3 block truncate"> Zenith Transaction </span>
                </div>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                  Oct 10
                </span>
              </li> -->

              <!-- More options... -->
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="">
      <button
        class="hover:bg-gray-200 focus:outline-none rounded-full px-2 py-2"
      >
        <svg
          class="h-6 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-e</title>
          <path
            d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <path
            d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 28px;
            "
          />
          <circle cx="250" cy="348" r="20" />
        </svg>
      </button>
      <button
        class="hover:bg-gray-200 focus:outline-none rounded-full px-2 py-2 ml-2"
      >
        <svg
          class="h-6 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-q</title>
          <path
            d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z"
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
        class="hover:bg-gray-200 focus:outline-none rounded-full px-2 py-2 ml-2"
      >
        <svg
          class="h-6 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-h</title>
          <rect
            x="64"
            y="64"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="216"
            y="64"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="368"
            y="64"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="64"
            y="216"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="216"
            y="216"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="368"
            y="216"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="64"
            y="368"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="216"
            y="368"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
          <rect
            x="368"
            y="368"
            width="80"
            height="80"
            rx="40"
            ry="40"
            style="
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 32px;
            "
          />
        </svg>
      </button>
      <button class="rounded-full focus:outline-none pl-4 py-2">
        <svg
          class="h-10 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-j</title>
          <path
            d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM385.32,375.25a4,4,0,0,1-6.14-.32,124.27,124.27,0,0,0-32.35-29.59C321.37,329,289.11,320,256,320s-65.37,9-90.83,25.34a124.24,124.24,0,0,0-32.35,29.58,4,4,0,0,1-6.14.32A175.32,175.32,0,0,1,80,259C78.37,161.69,158.22,80.24,255.57,80S432,158.81,432,256A175.32,175.32,0,0,1,385.32,375.25Z"
          />
          <path
            d="M256,144c-19.72,0-37.55,7.39-50.22,20.82s-19,32-17.57,51.93C191.11,256,221.52,288,256,288s64.83-32,67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39,151.44,275.59,144,256,144Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "LogoHeaderComponent",
  data() {
    return {
      isOpen: false,
      showSearch: false,
      searchStarted: false,
      searchQuery: '',
      page: 1
    };
  },
  mounted () {
    return this.$store.dispatch('fetchReports', this.page)
  },
  methods: {
    touch() {
      // if (this.searchQuery.length) {
        // this.showSearch = false
      // } else {
        // this.showSearch = true
      // }
      // if (this.showSearch == '') {
      //   this.showSearch = false
      // }
      if (this.showSearch.length > 1) {
        this.showSearch = false;
      }else{
        this.showSearch = true;
      }
      console.log('the search length: ',this.searchQuery.length)
      // this.showSearch = true
      this.search;
    }
  },
  computed: {
    ...mapGetters(["fetchAllReports"]),
    search() {
      console.log('the search: ',this.searchQuery)
      console.log('showSearch value: ',this.showSearch)
      console.log('the search computed length: ',this.searchQuery.length)
      return this.fetchAllReports.filter( report => {
        return report.body.toLowerCase().includes(this.searchQuery.toLowerCase())
      } )
    }
  },
};
</script>

<style lang="scss" scoped>
.boxxy {
  top: 10px;
  left: 18px;
}

.boxxy2 {
  top: 16px;
  right: 18px;
}
</style>