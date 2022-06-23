<!-- EventBusB.vue -->
<script setup lang="ts">
import EventBus from "../../EventBus";

let text = ref("")

EventBus.on("on-change", (val: string) => {
    text.value = val
})
</script>

<template>
    <div>
        {{ text }}
    </div>
</template>

<style scoped lang="less">
</style>
