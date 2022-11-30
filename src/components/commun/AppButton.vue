<template>
  <v-btn
    :color="color"
    :variant="variant"
    :rounded="rounded"
    v-bind="$attrs"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: "AppButton",

  props: {
    variant: {
      type: String,
      default: 'elevated'
    },
    color: {
      type: String,
      default: 'white'
    },
    rounded: {
      type: String,
      default: '0'
    },
    size: String
  },
}
</script>

<style scoped>

</style>