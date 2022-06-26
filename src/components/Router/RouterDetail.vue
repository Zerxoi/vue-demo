<script setup lang="ts">
import { data } from "../../assets/list.json"

const router = useRouter()
const route = useRoute()

type Item = {
    name: string;
    price: number;
    id: number;
}

type Data = {
    item: Item | undefined
}

const itemInfo = reactive<Data>({
    item: data.find(item => item.id === Number(route.params.id))
})

watch(() => route.params.id, (val) => {
    itemInfo.item = data.find(item => item.id === Number(val))
})
</script>

<template>
    <div>
        <h2>详情页</h2>
        <table>
            <tr>
                <td>ID</td>
                <td>{{ itemInfo.item?.id }}</td>
            </tr>
            <tr>
                <td>品牌</td>
                <td>{{ itemInfo.item?.name }}</td>
            </tr>
            <tr>
                <td>价格</td>
                <td>{{ itemInfo.item?.price }}</td>
            </tr>
        </table>
        <button @click="router.back">返回</button>
    </div>
</template>

<style scoped lang="less">
</style>
