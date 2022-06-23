<script lang="ts" setup>
const open = ref(false)
</script>

<template>
    <div>
        <button @click="open = true">Open Modal</button>

        <Teleport to="body">
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    border: 1px solid;
    top: 50%;
    left: 50%;
    z-index: 999;
}
</style>