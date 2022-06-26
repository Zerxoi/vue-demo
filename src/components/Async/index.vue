<script setup lang="ts">
import { axios } from "./server"

const list = await axios("/data.json")
</script>

<template>
    <div>
        <div :key="index" v-for="(item, index) in list">
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped lang="less">
</style>
