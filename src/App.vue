<template>
  <div id="app">
    <div class="sticky top-0 bg-white">
      <LogoHeader />
      <PaginationHeader @changeTagStuff="sendTag" />
    </div>
    <router-view :receivedTag="receivedTag" :key="$route.fullPath" />
  </div>
</template>

<script>
import LogoHeader from "@/components/LogoHeader";
import PaginationHeader from "@/components/PaginationHeader";

export default {
  components: {
    LogoHeader,
    PaginationHeader,
  },
  data() {
    return {
      receivedTag: "",
    };
  },
  methods: {
    sendTag(value) {
      this.receivedTag = value;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap");

body {
  font-family: "Roboto Condensed", sans-serif;
}

* {
  margin: 0;
  padding: 0;
}
</style>
