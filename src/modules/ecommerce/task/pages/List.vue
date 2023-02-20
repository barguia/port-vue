<template>
  <app-card outlined class="mx-auto pa-3">
    <v-table v-if="this.getList && this.getList.length > 0">
      <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Task
        </th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(task, index) in this.getList ">
        <td>
          <router-link :to="{name: 'TaskEdit', params:{id: task.id}}">{{ task.id }}</router-link>
        </td>
        <td>{{ task.task }}</td>
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
    ...mapGetters('task', ['getList'])
  },
  methods: {
    ...mapActions('task', ['index'])
  }

}
</script>

<style scoped>

</style>