<template>
  <div id="app">
    <Nav class="mb-6" />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style scoped>
@import "./assets/styles/index.css";

@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato/Lato-Regular.eot");
  src: url("assets/fonts/Lato/Lato-Regular.woff") format("woff"),
    url("assets/fonts/Lato/Lato-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>