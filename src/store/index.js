import createPersistedState from "vuex-persistedstate"
import { createStore } from 'vuex'
import login from '@/modules/app/login/store'
import user from '@/modules/app/user/store'
import task from '@/modules/workflow/task/store'
// Create a new index instance.
const store = createStore({
    modules: {
        login,
        user,
        task
    },
    plugins: [createPersistedState()],
})

export default store
export { store }
