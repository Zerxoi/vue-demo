<script setup lang="ts">
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
