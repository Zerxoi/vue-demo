<script setup lang="ts">
import { Ref } from 'vue';

let data = inject<Ref<boolean>>("data", ref(false))

const toggle = () => {
    data.value = !data.value
}
</script>

<template>
    <div class="c">
        <h3>C</h3>
        <button @click="toggle">Toggle</button>
        <div>{{ data }}</div>
    </div>
</template>

<style scoped lang="less">
.c {
    width: 200px;
    height: 200px;
    background: green;
    color: white;
}
</style>
