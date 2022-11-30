import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const useVuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            fa,
            mdi,
        }
    },
    components,
    directives,
    ssr: true,
})