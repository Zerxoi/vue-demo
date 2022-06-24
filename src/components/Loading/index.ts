import { App, createVNode, render, VNode } from 'vue'
import Loading from './index.vue'

export default {
    install(app: App) {
        // 创建虚拟DOM
        const vnode: VNode = createVNode(Loading)
        // 将虚拟 DOM 渲染成真实 DOM
        render(vnode, document.body)
        // 将组件中定义的函数放入全局变量中供所有组件使用
        app.config.globalProperties.$loading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }
    }
}