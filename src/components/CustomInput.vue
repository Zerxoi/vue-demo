<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{
    (e: "update:modelValue", s: string): void
}>()
</script>

<template>
    <div>
        <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<style scoped lang="less">
</style>
