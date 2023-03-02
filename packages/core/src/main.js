import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { initPublish, initSubscribe } from './core/config'
import mitt from './utils/mitt'
import * as stores from "./stores/index"

const emitter = mitt()
const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.provide('eventBus', emitter)
initPublish(pinia, stores, emitter)
initSubscribe(pinia, stores, emitter)
app.mount('#app')
