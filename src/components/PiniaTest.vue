<script setup lang="ts">
import { useMainStore } from '../store';

const main = useMainStore()
</script>

<template>
    <div>
        <button @click="main.getLoginInfo">Login</button>
        <div>{{ main.counter }}</div>
        <div>{{ main.name }}</div>
        <div>{{ main.doubleCount }}</div>
        <div>{{ main.doubleCountPlusOne }}</div>
    </div>
</template>
