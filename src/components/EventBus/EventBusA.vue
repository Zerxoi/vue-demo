<!-- EventBusA.vue -->
<script setup lang="ts">
import { ref, watch } from "vue"
import EventBus from "../../EventBus"

let text = ref("")

watch(text, (newVal) => {
    EventBus.emit("on-change", newVal)
})
</script>

<template>
    <div>
        <input v-model="text" type="text">
    </div>
</template>

<style scoped lang="less">
</style>
