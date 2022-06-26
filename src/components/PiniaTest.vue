<script setup lang="ts">
import { useMainStore } from '../store';

const main = useMainStore()
</script>

<template>
    <div>
        <button @click="main.getLoginInfo">Login</button>
        <div class="counter">
            <button @click="main.counter--">-</button>
            <div>counter : {{ main.counter }}</div>
            <button @click="main.counter++">+</button>
        </div>

        <div>name : {{ main.name }}</div>
        <div>doubleCount : {{ main.doubleCount }}</div>
        <div>doubleCountPlusOne : {{ main.doubleCountPlusOne }}</div>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
}
</style>