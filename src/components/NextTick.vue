<script setup lang="ts">
import { ref, nextTick } from 'vue';

const text = ref('小满开飞机')
const dom = ref<HTMLElement>()

const change = async () => {
    text.value = '小满不开飞机'
    console.log(dom.value?.innerText) //小满开飞机
    await nextTick();
    console.log(dom.value?.innerText) //小满不开飞机
}
</script>

<template>
    <div>
        <div ref="dom">
            {{ text }}
        </div>
        <button @click="change">change div</button>
    </div>
</template>
