<script setup lang="ts">
let isShow = ref<boolean>(false)

function show() {
    isShow.value = true
}

function hide() {
    isShow.value = false
}

defineExpose({
    show,
    hide
})
</script>

<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">Loading</div>
    </div>
</template>

<style scoped lang="less">
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    &-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>
