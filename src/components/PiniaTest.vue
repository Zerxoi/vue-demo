<script setup lang="ts">
import { useMainStore } from '../store';

const main = useMainStore()
</script>

<template>
    <div>
        <div>{{ main.counter }}</div>
        <div>{{ main.name }}</div>
        <div>{{ main.doubleCount }}</div>
    </div>
</template>
