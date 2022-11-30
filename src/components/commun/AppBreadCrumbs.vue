<template>
  <v-breadcrumbs :items="itens" v-bind="$attrs"></v-breadcrumbs>
</template>

<script>
export default {
  name: "AppBreadcrumbs",
  props: {
    itens: Array
  }
}
</script>

<style scoped>

</style>