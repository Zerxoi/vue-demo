<script setup lang="ts">
type Props = {
    msg: string
}

defineProps<Props>()
</script>

<template>
    <div>
        <div>Hello, {{ msg }} </div>
    </div>
</template>
