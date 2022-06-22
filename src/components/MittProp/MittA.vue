<!-- MittA.vue -->
<script setup lang="ts">
import { ref, getCurrentInstance, watch } from "vue"

let text = ref("")

// Tips: getCurrentInstance 不能写在回调函数内
const instance = getCurrentInstance()
console.log(instance);

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
