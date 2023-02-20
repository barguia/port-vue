<template>
  <app-container>

    <v-system-bar>
      <v-spacer></v-spacer>
      <app-icon icon="mdi-square"></app-icon>
      <app-icon icon="mdi-circle">mdi-circle</app-icon>
      <app-icon icon="mdi-triangle"/>
    </v-system-bar>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-microsoft-xbox-controller-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <app-list density="compact" nav>
        <template v-if="usuarioLogado">
          <router-link to="/">
            <app-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></app-list-item>
          </router-link>
          <router-link to="/ecommerce/task">
            <app-list-item prepend-icon="mdi-view-dashboard" title="Task" value="Tasks"></app-list-item>
          </router-link>
          <router-link to="/ecommerce/process">
            <app-list-item prepend-icon="mdi-view-dashboard" title="Process" Process="Process"></app-list-item>
          </router-link>
          <app-list-item  prepend-icon="mdi-account" title="Logout" value="logout" @click="efetuarLogout()"/>
        </template>
        <template v-else>
          <router-link to="/login">
            <app-list-item prepend-icon="mdi-account" title="Login" value="login"></app-list-item>
          </router-link>
        </template>
      </app-list>
    </v-navigation-drawer>
  </app-container>
</template>
<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AppHeader",
  data: () => ({ drawer: null }),
  computed: {
    ...mapGetters('login', ['usuarioLogado']),
    getBreadCrumbs() {
      console.log(this.$router.currentRoute)
      return this.$router.breadCrumbs
    },
  },
  methods: {
    ...mapActions('login', ['deslogarUsuario']),
    efetuarLogout() {
      this.deslogarUsuario().then(() => {
        this.$toast.success(`Logout efetuado com sucesso`);
        this.$router.push('/login')
      })
    }
  }
}
</script>