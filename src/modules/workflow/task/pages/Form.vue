<template>
  <v-card class="pa-8">
    <app-form ref="User" class="w-50 ma-auto">
      <app-input
          label="Task"
          placeholder="Task"
          type="text"
          name="task"
          v-model="task.task"
      />
      <app-select
          label="Process"
          :items="getList"
          item_title="process"
          item_value="id"
          v-model="task.ctl_process_id"
      />

      <app-button prepend-icon="mdi-account" color="blue-grey" @click="atualizar()">
        <template v-if="task.id">Atualizar registro</template>
        <template v-else>Cadastrar novo</template>
      </app-button>
    </app-form>
  </v-card>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
  name: "Form",
  data() {
    return {
      task: {}
    }
  },

  created() {
    this.getItem({id: this.$route.params.id}).then(response => {
      this.task = response.data
    })
    this.index()
  },
  computed: {
    ...mapGetters('process', ['getList'])
  },
  methods: {
    ...mapActions('task', ['getItem', 'create', 'update']),
    ...mapActions('process', ['index']),
    atualizar() {
      if (this.task.id) {
        this.update(this.task)
        return
      }

      this.task.create(this.task)
    }
  }
}
</script>

<style scoped>

</style>