<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue';

type DirectiveValue = {
    background?: string
}

const vCustomDirect: Directive = (el: HTMLElement, binding: DirectiveBinding<DirectiveValue>, vnode, prevVNode) => {
    if (binding.arg === 'style') {
        if (binding.value.background) {
            el.style.background = binding.value.background;
        }
    }

    if (binding.modifiers.focus) {
        el.focus()
    }
}
</script>

<template>
    <div>
        <input type="text" v-custom-direct:style.focus="{ background: 'red' }">
    </div>
</template>

<style scoped lang="less">
</style>
