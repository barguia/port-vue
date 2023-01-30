<template>
  <v-select
      :label=label
      :item-title=item_title
      :item-value=item_value
      :items="items"
      v-bind="$attrs"
  ></v-select>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    items: Array,
    label: String,
    item_title: {
      type: String,
      default: 'label'
    },
    item_value: {
      type: String,
      default: 'id'
    }
  }
}
</script>

<style scoped>

</style>