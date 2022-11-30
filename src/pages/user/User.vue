<template>
  <v-card>

    <app-form @submit="cadastrar" ref="User">
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

      <app-button prepend-icon="mdi-account" color="blue-grey" @click="cadastrar" >
        Cadastrar
      </app-button>
    </app-form>
    {{ getList }} teste
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "User",
  components: {},
  data() {
    return {
      user: {},
      snackbar: false
    }
  },
  created() {
    this.index()
  },

  computed: {
    ...mapGetters('user', ['getList'])
  },
  methods: {
    ...mapActions('user', ['create', 'index']),
    cadastrar() {
      console.log(this.create(this.user))
    }
  }


}
</script>

<style scoped>

</style>