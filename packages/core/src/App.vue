<template>
  <div>
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
    <Module1 :eventBus="eventBus" />
  </div>
</template>

<script setup>
import Module1 from 'module1';
import { ref, inject } from 'vue'
import * as stores from './stores/index'

const core = stores.core()
const itemName = ref('')
const eventBus = inject('eventBus')

const addItem = () => {
  if (!itemName.value) return
  core.addItem(itemName.value)
  itemName.value = ''
}

</script>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
