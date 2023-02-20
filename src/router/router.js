import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/modules/app/home/Home.vue"
import Login from "@/modules/app/login/Login.vue"
import UserRoutes from "@/modules/app/user/routes"
import TaskList from "@/modules/ecommerce/task/pages/List.vue";
import TaskFormEdit from "@/modules/ecommerce/task/pages/Form.vue";
import ProcessList from "@/modules/ecommerce/process/pages/List.vue";
import ProcessFormEdit from "@/modules/ecommerce/process/pages/Form.vue";

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
        path: '/ecommerce/task',
        component: TaskList,
        name: 'TaskList'
    },
    {
        path: '/ecommerce/task/:id',
        component: TaskFormEdit,
        name: 'TaskEdit'
    },
    {
        path: '/ecommerce/task/create',
        component: TaskFormEdit,
        name: 'TaskCreate'
    },

    {
        path: '/ecommerce/process',
        component: ProcessList,
        name: 'ProcessList'
    },
    {
        path: '/ecommerce/process/:id',
        component: ProcessFormEdit,
        name: 'ProcessEdit'
    },
    {
        path: '/ecommerce/process/create',
        component: ProcessFormEdit,
        name: 'ProcessCreate'
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