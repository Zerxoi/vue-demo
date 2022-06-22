<script setup lang="ts">
type Props = {
    title?: string,
    subTitle?: string,
    content?: string
}

withDefaults(defineProps<Props>(), {
    title: "主标题",
    subTitle: "副标题",
    content: "内容"
}) 
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div>{{ title }}</div>
            <div>{{ subTitle }}</div>
        </div>
        <div class="card-content">
            {{ content }}
        </div>
    </div>
</template>

<style lang="less" scoped>
@border: #ccc;

.card {
    border: 1px solid @border;

    &:hover {
        box-shadow: 0 0 10px @border;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid @border;
    }

    &-content {
        padding: 10px;
    }
}
</style>