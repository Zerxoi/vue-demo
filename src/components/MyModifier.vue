<script setup lang="ts">
type Props = {
    modelValue: string,
    modelModifiers?: { capitalize: boolean },
    title: string,
    titleModifiers?: { upper: boolean }
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: "update:modelValue", s: string): void,
    (e: "update:title", s: string): void,
}>()

function emitValue(e: Event) {
    let value = (<HTMLInputElement>e.target).value
    if (props.modelModifiers?.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}

function emitTitle(e: Event) {
    let value = (<HTMLInputElement>e.target).value
    if (props.titleModifiers?.upper) {
        value = value.toUpperCase()
    }
    emit('update:title', value)
}
</script>

<template>
    <div>
        <input type="text" :value="modelValue" @input="emitValue" />
        <input type="text" :value="title" @input="emitTitle" />
    </div>
</template>

<style scoped lang="less">
</style>
