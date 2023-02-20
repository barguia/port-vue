<template>
  <v-card class="pa-8">
    <app-form ref="User" class="w-50 ma-auto">
      <app-input
          label="Process"
          placeholder="Process"
          type="text"
          name="process"
          v-model="process.process"
      />
      <app-select
          label="Process"
          :items="listProcess"
          item_title="process"
          item_value="id"
          v-model="process.ctl_process_id"
      />

      <app-button prepend-icon="mdi-account" color="blue-grey" @click="atualizar()">
        <template v-if="process.id">Atualizar registro</template>
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
      process: {},
      listProcess: []
    }
  },

  created() {
    console.log(this.$route.params)
    if (this.$route.params.id) {
      this.getItem({id: this.$route.params.id}).then(response => {
        this.process = response.data
      })
    }

    this.index().then(() => {
      this.listProcess =  this.getList.filter(item => {
        if (item.id != this.$route.params.id) {
          return item
        }
      })
      this.listProcess .unshift({id: '', process: 'N/A'})
    })
  },
  computed: {
    ...mapGetters('process', ['getList']),
    getProcessList() {
      return this.getList.filter(item => {
        if (item.id != this.$route.params.id) {
          return item
        }
      }).unshift({id: '', process: ''})

    }
  },
  methods: {
    ...mapActions('process', ['getItem', 'create', 'update']),
    ...mapActions('process', ['index']),
    atualizar() {
      if (this.process.id) {
        this.update(this.process).
          then(response => {
            this.process = response.data.data
            this.$toast.success('Dados atualiizados.')
          })
        return
      }

      this.create(this.process).then(response => {
        this.$toast.success('Cadastro realizado com sucesso.')
        this.process = {}
      })
    }
  }
}
</script>

<style scoped>

</style>