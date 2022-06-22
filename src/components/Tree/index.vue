<script setup lang="ts">
type TreeNode = {
    name: string,
    icon?: string,
    children?: TreeNode[]
}

type Props = { nodeList: TreeNode[] }

defineProps<Props>()

const emit = defineEmits<{
    (e: "on-click", node: TreeNode): void
}>()

const clickNode = (node: TreeNode) => {
    emit("on-click", node)
}
</script>

<script lang="ts">
export default {
    name: "Tree"
}
</script>

<template>
    <div :key="index" v-for="(node, index) in nodeList" @click.stop="clickNode(node)">
        <div>{{ node.name }}</div>
        <Tree v-if="node?.children?.length" :node-list="node.children" @on-click="clickNode"></Tree>
    </div>
</template>

<style scoped lang="less">
</style>
