<!-- MittB.vue -->
<script setup lang="ts">
let text = ref("")

getCurrentInstance()?.proxy?.$Bus.on("change", (val) => {
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
