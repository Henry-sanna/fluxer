import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { initPublish, initSubscribe } from './core/config'
import mitt from './utils/mitt'
import * as stores from "./stores/index"
import { router } from './routes/router'

const emitter = mitt()
const app = createApp(App);
const pinia = createPinia()
app.use(pinia).use(router(emitter))

app.provide('eventBus', emitter)
app.provide('router', router)
initPublish(pinia, stores, emitter)
initSubscribe(pinia, stores, emitter)
app.mount('#app')
