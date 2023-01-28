<template>
  <v-card class="pa-8 ">

    <app-form @submit="atualizar" ref="User" class="w-50 ma-auto">
      <app-input
          label="Name"
          placeholder="Digit your name"
          type="text"
          name="name"
          v-model="user.name"
      />
      <app-input
          label="Email address"
          placeholder="your.email@gmail.com"
          type="email"
          name="email"
          v-model="user.email"
      />
      <app-input
          label="Password"
          placeholder="Digit your password"
          type="password"
          v-model="user.password"
      />
      <app-input
          label="Password confirmation"
          placeholder="Confirme your password"
          type="password"
          v-model="user.password_confirmation"
      />

      <app-button prepend-icon="mdi-account" color="blue-grey" @click="atualizar" >
        Atualizar
      </app-button>
    </app-form>
  </v-card>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

</style>