<script setup lang="ts">
interface Props {
    msg: string,
    count?: number
    foo?: string
}

// const { msg, count, foo } = defineProps<Props>()

// const {
//     msg,
//     // 默认值正常可用
//     count = 1,
//     // 解构时命别名也可用
//     // 这里我们就将 `props.foo` 命别名为 `bar`
//     foo: bar
// } = defineProps<Props>()

const props = defineProps<Props>()
const msg = ref(props.msg)
const count = ref(props.count ?? 1)
const foo = ref(props.foo)
const bar = foo
watch(() => props.msg, (newVal) => {
    msg.value = newVal
})
watch(() => props.count, (newVal) => {
    newVal && (count.value = newVal)
})
watch(() => props.foo, (newVal) => {
    newVal && (foo.value = newVal)
})
</script>

<template>
    <div>
        <input v-model="msg" type="text">
        {{ msg }}
        <input v-model="count" type="text">
        {{ count }}
        <input v-model="foo" type="text">
        {{ foo }}
    </div>

</template>

<style scoped lang="less">
</style>
