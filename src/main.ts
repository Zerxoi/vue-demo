import App from './App.vue'

import Card from './components/Card/index.vue'
import mitt, { Emitter } from 'mitt'
import Loading from './components/Loading'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import LoadingBar from './components/LoadingBar'

import './styles/main.css'
import 'element-plus/dist/index.css'
import { MyPlugin, StoragePlugin } from './store';
import router from './router'

// 为时间设置泛型以获得改进的 mitt 实例方法的类型推断。
type Events = {
    change: string
}

// 自定义$Bus全局属性添加到组件
const emitter = mitt<Events>()
declare module 'vue' {
    interface ComponentCustomProperties {
        $Bus: Emitter<Events>,
        $filter: { format: (str: string) => string }
        $env: "dev",
        $loading: {
            show: () => void,
            hide: () => void
        },
        $bar: {
            startLoading: () => void,
            endLoading: () => void
        }
    }
}

declare module 'vue-router' {
    interface RouteMeta {
        // 是可选的
        title?: string,
        transition?: string
    }
}

const whiteList = ['/']
router.beforeEach((to, from) => {
    app.config.globalProperties.$bar.startLoading()
    document.title = to.meta.title || "Vue Demo"
    if (whiteList.includes(to.path) || localStorage.getItem('token')) {
        return true
    } else {
        return '/'
    }
})

router.afterEach((to, from) => {
    app.config.globalProperties.$bar.endLoading()
})

let app = createApp(App)

app.config.globalProperties.$Bus = emitter
app.config.globalProperties.$filter = {
    format(str: string): string {
        return `真.${str}`
    }
}
app.config.globalProperties.$env = "dev"
app.use(ElementPlus)
    // Vue 安装 Pinia 插件
    .use(
        // Pinia 安装 MyPlugin 插件
        createPinia().use(MyPlugin).use(StoragePlugin({ key: "__pinia__" }))
    )
    // 安装 Router 插件
    .use(router)
    // 注：Loading 和 LoadingBar 插件都绑定在 document.body 同一时间只能使用一个
    .use(Loading)
    // .use(LoadingBar)
app.component("Card", Card).mount('#app')
