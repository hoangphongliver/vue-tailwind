<template>
  <div class="home-page">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "HomePage",
  components: { HelloWorld },
  methods: {
    ...mapActions({
      testAction: "homePage/testAction",
    }),
  },
  computed: {
    ...mapState({
      nameTest: (state) => state.homePage.name,
    }),
    ...mapGetters({
      name: "homePage/name",
    }),
  },
  mounted() {
    this.testAction();
  },
};
</script>

<style>
</style>