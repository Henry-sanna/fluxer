<template>
    <div id="accessControl"></div>
</template>
<script setup>
import mitt from './utils/mitt'
import { onMounted, createApp, inject } from 'vue'
import { createPinia } from 'pinia'
import * as stores from './stores/index'
import App from './App.vue'
import { initPublish, initSubscribe } from './core/config'

const emitter = mitt()
onMounted(() => {
    const eventBus = inject('eventBus') || emitter
    const app = createApp(App)
    const pinia = createPinia()

    app.provide('eventBus', eventBus)
    app.provide('pinia', pinia)
    app.provide('stores', stores)
    initPublish(pinia, stores, eventBus)
    initSubscribe(pinia, stores, eventBus)
    app.mount('#accessControl')
})
</script>
