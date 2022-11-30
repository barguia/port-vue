import createPersistedState from "vuex-persistedstate"
import { createStore } from 'vuex'
import login from '@/pages/login/store'
import user from '@/pages/user/store'
// Create a new index instance.
const store = createStore({
    modules: {
        login,
        user
    },
    plugins: [createPersistedState()],
})

export default store
export { store }
