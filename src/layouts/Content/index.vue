<script setup lang="ts">
import A from "./A.vue"
import B from './B.vue'
import C from './C.vue'
import ProvideInject from "../../components/ProvideInject/A.vue"

import "animate.css"
import Card from '../../components/Card/index.vue';
import { defineAsyncComponent, markRaw, reactive, ref, watch } from "vue";
import DefaultSlot from "../../components/Slot/DefaultSlot.vue";
import ModelButton from "../../components/ModelButton/index.vue";
import Login from "../../components/Login/index.vue";
import Register from "../../components/Register/index.vue";
import gsap from "gsap"
import SiblingA from "../../components/SiblingProp/SiblingA.vue"
import SiblingB from "../../components/SiblingProp/SiblingB.vue"
import EventBusA from "../../components/EventBus/EventBusA.vue"
import EventBusB from "../../components/EventBus/EventBusB.vue"
import MittA from "../../components/MittProp/MittA.vue"
import MittB from "../../components/MittProp/MittB.vue"

type Tab = {
    name: string,
    component: any
}

let tabs = reactive<Tab[]>([
    {
        name: "A",
        component: markRaw(A)
    },
    {
        name: "B",
        component: markRaw(B)
    },
    {
        name: "C",
        component: markRaw(C)
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

</script>

<template>
    <div class="content">
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
</style>