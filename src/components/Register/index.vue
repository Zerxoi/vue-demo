<script setup lang="ts">
let form = reactive({
    username: "",
    password: ""
})

const submit = () => {
    console.log(form);
}
</script>

<script lang="ts">
export default {
    name: "Register"
}
</script>

<template>
    <div>
        <table>
            <tr>
                <td>用户名</td>
                <td><input v-model="form.username" type="text"></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input v-model="form.password" type="text"></td>
            </tr>
            <button @click="submit">注册</button>
        </table>
    </div>
</template>

<style scoped lang="less">
</style>
