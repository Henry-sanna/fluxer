<template>
  <div class="main">
    <div>
      <form @submit.prevent="addItem" data-testid="add-items">
        <input type="text" v-model="itemName" />
        <button>Add</button>
      </form>

      <ul data-testid="items">
        <li v-for="item in core.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="core.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>
    </div>

  </div>
</template>
              
<script setup>
import { ref, inject } from 'vue'
import { core1 } from './stores/core';

const core = core1()
const eventBus = inject('eventBus')
const itemName = ref('')

function addItem() {
  if (!itemName.value) return
  core.addItem(itemName.value)
  itemName.value = ''
}

eventBus.on('core/core:state', (payload) => {
  console.log('update')
  const st = JSON.parse(JSON.stringify(payload))
  core.$patch(st)
})

</script>
              
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
              