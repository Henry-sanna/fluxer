<template>
    <div class="main">
        <div>
            <div>
                <input type="text" v-model="itemName" />
                <button @click="addItem">Add</button>
                <button @click="updateParent">Update</button>
            </div>

            <ul data-testid="items">
                <li v-for="item in core.items" :key="item.name">
                    {{ item.name }} ({{ item.amount }})
                    <button @click="core.removeItem(item.name)" type="button">
                        X
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from "vue"
import * as stores from "./stores/index"

const core = stores.core()
const itemName = ref("")
const eventBus = inject("eventBus")

const addItem = () => {
    if (!itemName.value) return
    core.addItem(itemName.value)
    itemName.value = ""
};

const updateParent = () => {
    if (!itemName.value) return;
    eventBus.emit("core/core:update", { rawItems: [itemName.value] })
    itemName.value = ""
};
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
