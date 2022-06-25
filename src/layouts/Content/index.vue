<script setup lang="ts">
import "animate.css"
import gsap from "gsap"
import { useBase64 } from "../../utils"

import ContentA from "./ContentA.vue"
import ContentB from './ContentB.vue'
import ContentC from './ContentC.vue'

type Tab = {
    name: string,
    component: any
}

let tabs = reactive<Tab[]>([
    {
        name: "A",
        component: markRaw(ContentA)
    },
    {
        name: "B",
        component: markRaw(ContentB)
    },
    {
        name: "C",
        component: markRaw(ContentC)
    }
])

let current = reactive({
    component: tabs[0].component
})

let switchTab = (tab: Tab) => {
    current.component = tab.component
}

let Async = defineAsyncComponent(() => import("../../components/Async/index.vue"))

let flag = ref(true);

let num = reactive({
    current: 0,
    approximation: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        approximation: newVal
    })
})

let siblingText = ref("")

const onChange = (text: string) => {
    siblingText.value = text
}

let searchText = ref("")
let modelText = ref("")
let titleText = ref("")

useBase64({ el: "#img" }).then(res => console.log(res.baseUrl))

// getCurrentInstance 只能在 setup 或生命周期钩子中调用。
let instance = getCurrentInstance()

const showLoading = () => {
    instance?.appContext.config.globalProperties.$loading.show()
    setTimeout(() => {
        instance?.appContext.config.globalProperties.$loading.hide()
    }, 3000)
}
</script>

<template>
    <div class="content">
        <NextTick></NextTick>
        <ScopedStyle class="scoped">
            <div class="a">私人定制 DIV</div>
        </ScopedStyle>
        <button @click="showLoading">Loading</button>
        <div>{{ $filter.format("战五渣") }}</div>
        <div>{{ $env }}</div>
        <img id="img" src="../../assets/logo.png" alt="Vue Logo">
        <CustomDirect></CustomDirect>
        <MyModifier v-model.capitalize="modelText" v-model:title.upper="titleText"></MyModifier>
        <CustomInput v-model="searchText" />
        {{ searchText }}
        <div>
            <MittA></MittA>
            <MittB></MittB>
        </div>
        <div>
            <EventBusA></EventBusA>
            <EventBusB></EventBusB>
        </div>

        <div>
            <SiblingA @on-change="onChange"></SiblingA>
            <SiblingB :text="siblingText"></SiblingB>
        </div>

        <ProvideInject></ProvideInject>

        <input v-model="num.current" step="20" type="number">
        <div>{{ num.approximation.toFixed(0) }}</div>

        <button @click="flag = !flag">切换</button>
        <Transition enter-active-class="animate__animated animate__bounceInLeft"
            leave-active-class="animate__animated animate__bounceOutLeft">
            <div v-if="flag" class="box"></div>
        </Transition>

        <KeepAlive include="Login">
            <Login v-if="flag"></Login>
            <Register v-else></Register>
        </KeepAlive>

        <ModelButton></ModelButton>
        <Suspense>
            <Async></Async>

            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
        <DefaultSlot>
            <h1>小夫，我要进来咯</h1>
        </DefaultSlot>
        <button :key="tab.name" v-for="tab in tabs" @click="switchTab(tab)">{{ tab.name }}</button>
        <component :is="current.component"></component>
        <div class="content-item" :key="item" v-for="item in 100">
            <Card title="item"></Card>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid lightsalmon;
    overflow: auto;

    &-item {
        padding: 20px;
        border: 1px solid burlywood;
    }
}

.box {
    width: 200px;
    height: 200px;
    background: red;
}

.fade-enter-from,
.fade-leave-to {
    width: 0;
    height: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1.5s ease;
}

.scoped {
    :deep(input) {
        background: green;
    }
}
</style>