import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/modules/app/home/Home.vue"
import Login from "@/modules/app/login/Login.vue"
import UserRoutes from "@/modules/app/user/routes"
import List from "@/modules/workflow/task/pages/List.vue";
import TaskFormEdit from "@/modules/workflow/task/pages/Form.vue";

const appRoutes = [
    {
        path: '/',
        component: Home ,
        name: 'Aplication'
    },
    {
        path: '/login',
        component: Login,
        name: 'LoginPage'
    },
    ...UserRoutes,
    {
        path: '/wf/task',
        component: List,
        name: 'TaskList'
    },
    {
        path: '/wf/task/:id',
        component: TaskFormEdit,
        name: 'TaskEdit'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes,
    linkExactActiveClass: "activess" // active class for *exact* links.
});

router.beforeEach(async (to, from, next) =>  {
    let user = sessionStorage.getItem('user')
    if (!user && to.name !== `LoginPage`) next({name: 'LoginPage'})
    else next()
})

export default router