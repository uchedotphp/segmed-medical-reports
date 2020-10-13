<template>
  <div class="my-4 ml-20 mr-10">
    <div class="flex justify-between">
      <div class="">
        <span class="text-2xl">
          {{ reportDetail.title }}
        </span>
        <span
          v-if="receivedTag"
          :class="[
            receivedTag == 'conditionReport' ? 'bg-red-300' : 'bg-green-300',
          ]"
          class="pl-2 py-1 ml-2 text-sm rounded"
        >
          #{{ receivedTag }}1
          <button class="hover:bg-black hover:text-white px-2">x</button>
        </span>
        <span
          v-else
          :class="[
            reportDetail.tag == 'conditionReport'
              ? 'bg-red-300'
              : 'bg-green-300',
          ]"
          class="pl-2 py-1 ml-2 text-sm rounded"
        >
          #{{ reportDetail.tag }}2
          <button class="hover:bg-black hover:text-white px-2">x</button>
        </span>
      </div>
      <div>
        <button class="hover:bg-gray-200 rounded-full p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-6"
            viewBox="0 0 512 512"
          >
            <title>Print</title>
            <path
              d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <rect
              x="128"
              y="240"
              width="256"
              height="208"
              rx="24.32"
              ry="24.32"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle cx="392" cy="184" r="24" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex justify-between my-6">
      <div class="">
        <span class="font-bold text-lg"> Uchechukwu Prince Nwulu </span>
        [Note: <span class="text-red-500"> clicking label </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5 inline-block"
          viewBox="0 0 512 512"
        >
          <title>Pricetags</title>
          <path
            d="M448 183.8v-123A44.66 44.66 0 00403.29 16H280.36a30.62 30.62 0 00-21.51 8.89L13.09 270.58a44.86 44.86 0 000 63.34l117 117a44.84 44.84 0 0063.33 0l245.69-245.61A30.6 30.6 0 00448 183.8zM352 144a32 32 0 1132-32 32 32 0 01-32 32z"
          />
          <path
            d="M496 64a16 16 0 00-16 16v127.37L218.69 468.69a16 16 0 1022.62 22.62l262-262A29.84 29.84 0 00512 208V80a16 16 0 00-16-16z"
          />
        </svg>
        <span class="text-red-500">
          above would allow you change the label </span
        >]
      </div>
      <div>
        <button class="hover:bg-gray-200 rounded-full p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-5"
            viewBox="0 0 512 512"
          >
            <title>Star</title>
            <path
              d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </button>
        <button
          class="hover:bg-gray-200 rounded-full p-2 ml-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-5"
            viewBox="0 0 512 512"
          >
            <title>Arrow Undo</title>
            <path
              d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </button>
        <button
          class="hover:bg-gray-200 rounded-full p-2 ml-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-5"
            viewBox="0 0 512 512"
          >
            <title>Ellipsis Vertical</title>
            <circle
              cx="256"
              cy="256"
              r="32"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <circle
              cx="256"
              cy="416"
              r="32"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <circle
              cx="256"
              cy="96"
              r="32"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-7/12">
      <span>
        {{ reportDetail.body }}
      </span>
      <span class="block mt-4 underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-5 inline-block no-underline mr-1 text-red-500"
          viewBox="0 0 512 512"
        >
          <title>Warning</title>
          <path
            d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z" />
        </svg>
        Pardon me i am still fixing the label button to refresh the label's tag
        in the body
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportDetail",
  props: {
    reportDetail: {
      type: Object,
      required: true,
    },
    receivedTag: {
      type: String,
    },
  },
  mounted() {
    // console.log("tag: ", this.receivedTag);
  },
  // beforeRouteEnter(to, from, next) {
  //   // this.receivedTag = this.reportDetail.tag
  //   next();
  // },
};
</script>

<style lang="scss" scoped>
</style>