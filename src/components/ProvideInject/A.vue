<script setup lang="ts">
import { provide, ref } from "vue";
import B from "./B.vue"

let data = ref(true);

provide("data", data)
</script>

<template>
    <div class="a">
        <h1>A</h1>
        <div> {{ data }}</div>
        <B></B>
    </div>
</template>

<style scoped lang="less">
.a {
    width: 300px;
    height: 300px;
    background: red;
    color: white;
}
</style>
