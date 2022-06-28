import { h } from 'vue'

type Props = {
    msg: string
}

// 直接返回 setup() 函数，函数中的第一个参数是 props。
export default (props: Props) => {
    return h('div', [h('div', `Hello, ${props.msg}!`)])
}
