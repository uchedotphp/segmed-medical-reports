<template>
  <div class="my-4 ml-20 mr-10">
    <div class="flex justify-between">
      <div class="">
        <span class="text-2xl">
            {{ reportDetail.title }}
        </span>
        <span class="bg-green-300 pl-2 py-1 ml-2 text-sm rounded">
          #{{ reportDetail.tag }}
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
      <div class="font-bold text-lg">Uchechukwu Prince Nwulu</div>
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
    {{ reportDetail.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportDetail",
  props: {
    reportDetail: {
      type: Object,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>