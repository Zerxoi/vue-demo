import { PiniaPluginContext } from "pinia"

const __piniaKey = '__PINIAKEY__'

// 定义入参类型
type Options = {
    key?: string
}

// 将数据存在本地
const setStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
}


// 存缓存中读取
const getStorage = (key: string) => {
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

const StoragePlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context;
        const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`)
        store.$subscribe(() => {
            setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state));
        })
        return data
    }
}

export {
    StoragePlugin
}