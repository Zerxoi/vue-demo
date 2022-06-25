<script setup lang="ts">
let data = ref(true);

provide("data", data)
</script>

<script lang="ts">
export default {
    name: 'ProvideInject'
}
</script>

<template>
    <div class="a">
        <h1>A</h1>
        <div> {{ data }}</div>
        <ProvideInjectA></ProvideInjectA>
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
