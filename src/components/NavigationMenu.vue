<template>
  <div class="flex px-8 border-b border-gray-300">
    <span class="text-xs mr-3 self-center text-gray-600"> S/N </span>
    <router-link exact-active-class="report-badge-all"
      class="w-1/5 mx-3 pt-4 hover:bg-gray-200 text-red-500 font-bold"
      :to="{ name: 'AllReports' }"
    >
      <svg
        class="h-6 px-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>ionicons-v5-i</title>
        <path
          d="M384,80H128c-26,0-43,14-48,40L48,272V384a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V272L432,120C427,93,409,80,384,80Z"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
        <line
          x1="48"
          y1="272"
          x2="192"
          y2="272"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
        <line
          x1="320"
          y1="272"
          x2="464"
          y2="272"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
        <path
          d="M192,272a64,64,0,0,0,128,0"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
        <line
          x1="144"
          y1="144"
          x2="368"
          y2="144"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
        <line
          x1="128"
          y1="208"
          x2="384"
          y2="208"
          style="
            fill: none;
            stroke: #d93925;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
      </svg>
      <span class="text-sm"> All Reports (100) </span>
    </router-link>
    <!-- <router-link exact-active-class="report-badge-good"
      class="w-1/5 mx-3 pt-4 hover:bg-gray-200 font-bold"
      :to="{ name: 'GoodReports' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon h-6 px-4 inline-block"
        viewBox="0 0 512 512"
      >
        <title>Accessibility</title>
        <circle
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          cx="256"
          cy="56"
          r="40"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"
        />
      </svg>
      <span class="text-sm bg-green-300"> #Good Report(12) </span>
    </router-link>
    <router-link exact-active-class="report-badge-present"
      class="w-1/5 mx-3 pt-4 hover:bg-gray-200 font-bold"
      :to="{ name: 'ConditionReports' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon h-6 px-4 inline-block"
        viewBox="0 0 512 512"
      >
        <title>Medkit</title>
        <rect
          x="32"
          y="112"
          width="448"
          height="352"
          rx="48"
          ry="48"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
      <span class="text-sm bg-red-300"> #Condition Present(12) </span>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "NavigationMenuComponent.vue"
};
</script>

<style lang="scss" scoped>
.report-badge-all::after {
  content: "";
  display: block;
  width: 100%;
  background-color: red;
  height: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 15px;
}

.report-badge-good::after {
  content: "";
  display: block;
  width: 100%;
  background-color: green;
  height: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 15px;
}

.report-badge-present::after {
  content: "";
  display: block;
  width: 100%;
  background-color: blue;
  height: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 15px;
}
</style>