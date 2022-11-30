import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/pages/home/Home.vue"
import Login from "@/pages/login/Login.vue"
import User from "@/pages/user/User.vue"
const appRoutes = [
    {
        path: '/',
        component: Home ,
        name: 'HomePage'
    },
    {
        path: '/login',
        component: Login ,
        name: 'LoginPage'
    },
    {
        path: '/user',
        component: User,
        name: 'UserPage'
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