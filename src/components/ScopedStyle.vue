<template>
    <div class="example">
        hello
        <input />
        <slot></slot>
    </div>
</template>

<style scoped lang="less">
.example {
    color: red;

    :slotted(.a) {
        color: green;
    }
}
</style>