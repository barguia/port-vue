<template>
  <app-card outlined class="mx-auto pa-3">
    <v-table v-if="this.getList && this.getList.length > 0">
      <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Process
        </th>
        <th class="text-left">
          Hierarchy
        </th>
        <th class="text-left">
          Macro-process
        </th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(process, index) in this.getList ">
        <td>
          <router-link :to="{name: 'ProcessEdit', params:{id: process.id}}">{{ process.id }}</router-link>
        </td>
        <td>{{ process.process }}</td>
        <td>{{ process.hierarchy.hierarchy }}</td>
        <td>
          <span v-if="process.macro_process">
            {{ process.macro_process.process }}
          </span>
          <span v-else>N/A</span>
        </td>
      </tr>
      </tbody>
    </v-table>

    <app-alert v-if="this.getList === false"
        text="Efetuando busca dos dados"
        type="info"
        variant="tonal"/>

    <app-alert v-if="this.getList && this.getList.length == 0"
               text="Nenhum registro foi encontrado"
               type="warning"
               variant="tonal"/>


  </app-card>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
  name: "List",
  created() {
    this.index()
  },
  computed: {
    ...mapGetters('process', ['getList'])
  },
  methods: {
    ...mapActions('process', ['index'])
  }

}
</script>

<style scoped>

</style>