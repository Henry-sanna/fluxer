<template>
  <div id="module1">
  </div>
</template>
<script setup>
import mitt from 'mitt'
import { onMounted, createApp, inject } from 'vue'
import { createPinia } from 'pinia';
import * as stores from './stores/index'
import App from './App.vue'
import { initPublish, initSubscribe } from './core/config';
const emitter = mitt()

onMounted(() => {
  console.log('mounted')
  const eventBus = inject('eventBus') || emitter;
  const app = createApp(App)
  const pinia = createPinia()
  app.use(pinia)
  app.provide('eventBus', eventBus)
  initPublish(stores, eventBus)
  initSubscribe(stores, eventBus)
  app.mount('#module1')

});

</script>