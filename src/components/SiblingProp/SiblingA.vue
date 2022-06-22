<script setup lang="ts">
import { ref, watch } from "vue"

let text = ref("")

const emit = defineEmits<{
    (e: "on-change", text: string): void
}>()

watch(text, (newVal) => {
    emit("on-change", newVal)
})
</script>

<template>
    <div>
        <input v-model="text" type="text">
    </div>
</template>

<style scoped lang="less">
</style>
