import App from './App.vue'

import Card from './components/Card/index.vue'
import mitt, { Emitter } from 'mitt';
import Loading from './components/Loading'
import ElementPlus from 'element-plus'

import './styles/main.css'
import 'element-plus/dist/index.css'

// 为时间设置泛型以获得改进的 mitt 实例方法的类型推断。
type Events = {
    change: string
}

// 自定义$Bus全局属性添加到组件
const emitter = mitt<Events>()

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $Bus: Emitter<Events>,
        $filter: { format: (str: string) => string }
        $env: "dev",
        $loading: {
            show: () => void,
            hide: () => void
        }
    }
}

let app = createApp(App)

app.config.globalProperties.$Bus = emitter
app.config.globalProperties.$filter = {
    format(str: string): string {
        return `真.${str}`
    }
}
app.config.globalProperties.$env = "dev"
app.use(Loading)
app.use(ElementPlus)
app.component("Card", Card).mount('#app')
