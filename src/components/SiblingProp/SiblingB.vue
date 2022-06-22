<!-- SiblingB.vue -->
<script setup lang="ts">
type SiblingText = {
    text: string
}

defineProps<SiblingText>()
</script>

<template>
    <div>
        {{ text }}
    </div>
</template>

<style scoped lang="less">
</style>
