<!-- MittA.vue -->
<script setup lang="ts">
let text = ref("")

// Tips: getCurrentInstance 不能写在回调函数内
const instance = getCurrentInstance()

watch(text, (newVal) => {
    instance?.proxy?.$Bus.emit("change", newVal)
})
</script>

<template>
    <div>
        <input v-model="text" type="text">
    </div>
</template>

<style scoped lang="less">
</style>
