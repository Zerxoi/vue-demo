<script setup lang="ts">

</script>

<template>
    <div>
        <h2>User {{ $route.params.id }}</h2>
        <RouterView name="header"></RouterView>
        <RouterView></RouterView>
    </div>
</template>

<style scoped lang="less">
</style>
