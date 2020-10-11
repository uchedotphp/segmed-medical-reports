<template>
  <div id="app">
    <LogoHeader />
    <PaginationHeader />
    <NavigationMenu />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import LogoHeader from "@/components/LogoHeader";
import PaginationHeader from "@/components/PaginationHeader";
import NavigationMenu from "@/components/NavigationMenu";

export default {
  components: {
    LogoHeader,
    PaginationHeader,
    NavigationMenu,
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
