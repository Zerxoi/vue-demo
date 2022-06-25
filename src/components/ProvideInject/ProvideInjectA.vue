<script setup lang="ts">
import { Ref } from "vue";

let data = inject<Ref<boolean>>("data", ref(false))
</script>

<template>
    <div class="b">
        <h2>B</h2>
        <div>{{ data }}</div>
        <ProvideInjectB></ProvideInjectB>
    </div>
</template>

<style scoped lang="less">
.b {
    width: 250px;
    height: 250px;
    background: blue;
    color: white;
}
</style>
