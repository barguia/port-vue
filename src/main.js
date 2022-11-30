import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import App from '@/App.vue'
import {useVuetify} from "@/plugins/vuetify";
import appComponentes from "@/plugins/appComponentes"
import router from "@/router/router"
import store from  "@/store"
import Toaster from '@meforma/vue-toaster'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(useVuetify)
app.use(appComponentes)
app.use(Toaster)

app.mount('#app')