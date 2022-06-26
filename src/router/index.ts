import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../components/Router/RouterLogin.vue")
    }, {
        path: "/register",
        component: () => import("../components/Router/RouterRegister.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router