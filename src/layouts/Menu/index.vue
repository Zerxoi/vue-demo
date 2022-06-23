<script setup lang="ts">
import Tree from '../../components/Tree/index.vue';

type Props = {
    title?: string
    list?: number[]
}

withDefaults(defineProps<Props>(), {
    title: "想念你白色袜子",
    list: () => [7, 4, 7, 5, 1]
})

let emit = defineEmits(['on-click', 'on-tap'])
let clickTap = (clickOrTap: "on-click" | "on-tap") => {
    emit(clickOrTap, reactive([6, 6, 6]), true)
}

let data = {
    name: "lucy",
    age: 17
}

defineExpose({
    data
})

type TreeNode = {
    name: string,
    icon?: string,
    children?: TreeNode[]
}

const treeList = reactive<TreeNode[]>([
    {
        name: "1",
        children: [
            {
                name: "1-1",
                children: [
                    {
                        name: "1-1-1",
                    }
                ]
            }
        ]
    },
    {
        name: "2",
        children: [
            {
                name: "2-1",
            },
            {
                name: "2-2",
            }
        ]
    },
    {
        name: "3"
    }
])

const receiveNode = (node: TreeNode) => {
    console.log(node);
}
</script>

<template>
    <div class="menu">
        菜单区域
        <div>{{ title }}</div>
        <div>{{ list }}</div>
        <button @click="clickTap('on-click')">click</button>
        <button @click="clickTap('on-tap')">tap</button>
        <Tree :node-list="treeList" @on-click="receiveNode"></Tree>
    </div>
</template>

<style lang="less" scoped>
.menu {
    width: 200px;
    border-right: 1px solid;
}
</style>