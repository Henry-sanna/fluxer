<template>
  <div id="module2">
  </div>
</template>
<script setup>
import { ref, onMounted, createApp, inject } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'

onMounted(() => {
  const eventBus = inject('eventBus');
  const module2 = createApp(App)
  const pinia2 = createPinia()
  module2.use(pinia2)
  module2.provide('eventBus', eventBus)
  module2.mount('#module2')
});

</script>