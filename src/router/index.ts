import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Login",
        component: () => import("../components/Router/RouterLogin.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../components/Router/RouterRegister.vue")
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("../components/Router/RouterDetail.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router