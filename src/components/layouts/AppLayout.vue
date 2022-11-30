<template>
  <v-app id="inspire">
    <app-header/>
    <app-body/>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppBody from "./AppBody.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter
  },

}
</script>
<style scoped>

</style>