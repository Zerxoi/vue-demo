<!-- MittB.vue -->
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue"

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
