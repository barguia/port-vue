<template>
  <app-card outlined class="mx-auto pa-3" max-width="500">
    <h1>Login</h1>
    <app-input
        label="Email address"
        placeholder="your.email@gmail.com"
        type="email"
        name="email"
        v-model="user.email"
    />
    <app-input
        label="Password"
        placeholder="Your password"
        type="password"
        v-model="user.password"
    />
    <app-button prepend-icon="mdi-account" color="blue-grey" @click="logar" >
      Logar
    </app-button>
  </app-card>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  created() {
    if (this.usuarioLogado) {
      this.$router.push('/')
    }
  },
  computed:{
    ...mapGetters('login', ['logando', 'usuarioLogado'])
  },

  methods: {
    ...mapActions('login', ['logarUsuario']),
    async logar() {
      await this.logarUsuario(this.user)
    }
  }
}
</script>

<style scoped>

</style>