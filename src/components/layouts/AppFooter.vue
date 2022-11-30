<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters >
      <app-button
        v-for="link in links"
        :key="link"
        color="primary"
        variant="text"
        rounded="rounded"
      >
        {{ link }}
      </app-button>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  components: {},

  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>
