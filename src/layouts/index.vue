<script setup lang="ts">
import { reactive, ref } from '@vue/reactivity';
import Content from './Content/index.vue'
import Header from './Header/index.vue'
import Menu from './Menu/index.vue'

let list = reactive([1, 2, 3])

let menu = ref(null)

let receiveEmit = (list: number[], bool: boolean) => {
    console.log(list)
    console.log(bool)
    console.log(menu)
}
</script>

<template>
    <div class="layout">
        <!-- :list="list" title="衣服裤子袜子" -->
        <Menu ref="menu" @on-click="receiveEmit" @on-tap="receiveEmit"></Menu>
        <div class="layout-right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<style lang="less" scoped>
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;

    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>