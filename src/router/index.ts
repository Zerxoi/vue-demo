import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Login",
        meta: {
            title: '登录',
            transition: "animate__fadeInUp",
        },
        component: () => import("../components/Router/RouterLogin.vue")
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            title: '注册',
            transition: "animate__bounceIn",
        },
        component: () => import("../components/Router/RouterRegister.vue")
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("../components/Router/RouterDetail.vue")
    },
    {
        path: "/user/:id",
        component: () => import("../components/Router/User.vue"),
        children: [
            // 当 /user/:id 匹配成功
            // UserHome 将被渲染到 User 的 <router-view> 内部
            {
                path: '',
                component: () => import("../components/Router/UserHome.vue")
            },
            {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                components: {
                    default: () => import("../components/Router/UserProfile.vue"),
                    header: () => import("../components/Router/RouterHeader.vue")
                }
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: 'posts',
                component: () => import("../components/Router/UserPosts.vue"),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router