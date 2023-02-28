<template>
  <div>
    <div style="margin: 1rem 0;">

    </div>

    <h2>Hello {{ core.name }}</h2>

    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>

      <button :disabled="!core.name">Buy</button>
      <button :disabled="!cart.items.length" @click="clearCart" type="button" data-testid="clear">Clear the cart</button>
    </form>
  </div>
</template>
              
<script setup>
import PiniaLogo from './components/PiniaLogo.vue'
import { ref, inject } from 'vue'
import { useCoreStore } from './stores/core'
import { useCartStore } from './stores/cart'

const core = useCoreStore()
const cart = useCartStore()
const eventBus = inject('eventBus')
const itemName = ref('')

function addItemToCart() {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

eventBus.on('cart:state', (payload) => {
  const st = JSON.parse(JSON.stringify(payload))
  cart.$patch(st)
})

function clearCart() {
  if (window.confirm('Are you sure you want to clear the cart?')) {
    cart.rawItems = []
  }
}

async function buy() {
  const n = await cart.purchaseItems()
  cart.rawItems = []
}
</script>
              
<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
              