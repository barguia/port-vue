import createPersistedState from "vuex-persistedstate"
import { createStore } from 'vuex'
import login from '@/modules/app/login/store'
import user from '@/modules/app/user/store'
import task from '@/modules/ecommerce/task/store'
import process from '@/modules/ecommerce/process/store'
// Create a new index instance.
const store = createStore({
    modules: {
        login,
        user,
        task,
        process
    },
    plugins: [createPersistedState()],
})

export default store
export { store }
