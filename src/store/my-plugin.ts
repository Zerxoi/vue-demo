import { PiniaPluginContext } from "pinia";

// 自定义 Pinia 插件
function MyPlugin(context: PiniaPluginContext) {
    const store = context.store;
    // 为了正确处理 SSR，需要确保没有覆盖现有值
    if (!store.$state.hasOwnProperty('foo')) {
        const foo = ref('bar')
        store.$state.foo = foo
    }
    // 需要将 ref 从 $state 传输到 store 以保证 store.hasError 和 store.$state.hasError 共享相同的变量
    store.hasError = toRef(store.$state, 'foo')
}

// 向 store 添加新属性时扩展 PiniaCustomProperties 接口
declare module 'pinia' {
    export interface PiniaCustomProperties {
        foo: string,
    }
}

export {
    MyPlugin
}