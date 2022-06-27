<script setup lang="ts">
import { FormInstance, FormRules, ElMessage } from 'element-plus'

const form = reactive({
    username: '',
    password: '',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: "请填写用户名", trigger: 'blur' }
    ],
    password: [
        { required: true, message: "请填写用户密码", trigger: 'blur' }
    ],
})

// 变量名要与 ref el-from 的 ref 属性保持一致
const formRef = ref<FormInstance>()
const router = useRouter()


const onSubmit = () => {
    formRef.value?.validate((validate) => {
        if (validate) {
            router.push("/user/1")
            localStorage.setItem("token", "KJB*T*LK7547FVJJ")
        } else {
            ElMessage.error('表单参数校验失败')
        }
    })
}
</script>

<template>
    <el-card class="card">
        <el-form ref="formRef" :rules="rules" :model="form" class="form">
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style scoped lang="less">
.card {
    width: 400px;
    margin: 20px;
}
</style>
