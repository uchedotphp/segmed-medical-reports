<template>
  <div id="app">
    <LogoHeader />
    <PaginationHeader />
    <NavigationMenu />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LogoHeader from "@/components/LogoHeader";
import PaginationHeader from '@/components/PaginationHeader';
import NavigationMenu from "@/components/NavigationMenu";

export default {
  components: {
    LogoHeader,
    PaginationHeader,
    NavigationMenu
  },
}
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
