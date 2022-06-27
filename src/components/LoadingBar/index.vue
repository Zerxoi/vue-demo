<script setup lang="ts">
const speed = ref(1)
const timer = ref(0)

const bar = ref<HTMLElement>()

const startLoading = () => {
    let dom = bar.value as HTMLElement
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value++
            dom.style.width = speed.value + '%'
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })
}

const endLoading = () => {
    let dom = bar.value as HTMLElement
    window.requestAnimationFrame(() => {
        speed.value = 100
        dom.style.width = speed.value + '%';
    })
}

// 挂在之后才能获取 DOM
// onMounted(() => {
//     startLoading()
//     endLoading()
// })

defineExpose({
    startLoading,
    endLoading
})
</script>

<template>
    <div class="wrap">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    .bar {
        height: 1px;
        width: 0;
        background: red;
    }
}
</style>
