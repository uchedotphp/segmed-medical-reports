<template>
  <div class="flex px-8 border-b border-gray-300">
    <span class="text-xs mr-3 self-center text-gray-600">
        S/N
      </span>
    <router-link
      class="report-badge-all w-1/5 px-3 pt-4 hover:bg-gray-200 text-red-500 font-bold"
      to="/"
    >
      <svg
        class="h-6 pr-4 pl-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>ionicons-v5-i</title>
        <path
          d="M384,80H128c-26,0-43,14-48,40L48,272V384a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V272L432,120C427,93,409,80,384,80Z"
          style="fill:none;stroke:#D93925;stroke-linejoin:round;stroke-width:32px"
        />
        <line
          x1="48"
          y1="272"
          x2="192"
          y2="272"
          style="fill:none;stroke:#D93925;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <line
          x1="320"
          y1="272"
          x2="464"
          y2="272"
          style="fill:none;stroke:#D93925;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M192,272a64,64,0,0,0,128,0"
          style="fill:none;stroke:#D93925;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <line
          x1="144"
          y1="144"
          x2="368"
          y2="144"
          style="fill:none;stroke:#D93925;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <line
          x1="128"
          y1="208"
          x2="384"
          y2="208"
          style="fill:none;stroke:#D93925;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
      <span class="text-sm">
        All Reports
      </span>
    </router-link>
    <router-link
      class="report-badge-good w-1/5 px-3 pt-4 hover:bg-gray-200 font-bold"
      to="/"
    >
      <svg
        class="h-6 pr-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>ionicons-v5-a</title>
        <path
          d="M434.8,137.65,285.44,69.55c-16.19-7.4-42.69-7.4-58.88,0L77.3,137.65c-17.6,8-17.6,21.09,0,29.09l148,67.5c16.89,7.7,44.69,7.7,61.58,0l148-67.5C452.4,158.74,452.4,145.64,434.8,137.65Z"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M160,308.52,77.3,345.63c-17.6,8-17.6,21.1,0,29.1l148,67.5c16.89,7.69,44.69,7.69,61.58,0l148-67.5c17.6-8,17.6-21.1,0-29.1l-79.94-38.47"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M160,204.48,77.2,241.64c-17.6,8-17.6,21.1,0,29.1l148,67.49c16.89,7.7,44.69,7.7,61.58,0l148-67.49c17.7-8,17.7-21.1.1-29.1L352,204.48"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
      <span class="text-sm bg-green-300">
        #Good Report(12)
      </span>
    </router-link>
    <router-link
      class="report-badge-present w-1/5 px-3 pt-4 hover:bg-gray-200 font-bold"
      to="/"
    >
      <svg
        class="h-6 pr-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>ionicons-v5-a</title>
        <path
          d="M434.8,137.65,285.44,69.55c-16.19-7.4-42.69-7.4-58.88,0L77.3,137.65c-17.6,8-17.6,21.09,0,29.09l148,67.5c16.89,7.7,44.69,7.7,61.58,0l148-67.5C452.4,158.74,452.4,145.64,434.8,137.65Z"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M160,308.52,77.3,345.63c-17.6,8-17.6,21.1,0,29.1l148,67.5c16.89,7.69,44.69,7.69,61.58,0l148-67.5c17.6-8,17.6-21.1,0-29.1l-79.94-38.47"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M160,204.48,77.2,241.64c-17.6,8-17.6,21.1,0,29.1l148,67.49c16.89,7.7,44.69,7.7,61.58,0l148-67.49c17.7-8,17.7-21.1.1-29.1L352,204.48"
          style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
      <span class="text-sm bg-red-300">
        #Condition Present(12)
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationMenuComponent.vue"
};
</script>

<style lang="scss" scoped>
  .report-badge-all::after {
    content: '';
    display: block;
    width: 100%;
    background-color: red;
    height: 4px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 15px;
  }

  .report-badge-good::after {
    content: '';
    display: block;
    width: 100%;
    background-color: green;
    height: 4px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 15px;
  }

  .report-badge-present::after {
    content: '';
    display: block;
    width: 100%;
    background-color: blue;
    height: 4px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 15px;
  }
</style>