import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, Ref } from 'vue';

export const core = defineStore('core', () => {
  const rawItems: Ref<string[]> = ref([]);
  const items = computed(() =>
    rawItems.value.reduce((items: Array<any>, item) => {
      const existingItem = items.find((it) => it.name === item)
      if (!existingItem) {
        items.push({ name: item, amount: 1 })
      } else {
        existingItem.amount++
      }
      return items
    }, []));

  const addItem = (name: string) => {
    rawItems.value.push(name)
  };

  const removeItem = (name: string) => {
    const i = rawItems.value.lastIndexOf(name)
    if (i > -1) rawItems.value.splice(i, 1)
  };
  return { rawItems, addItem, removeItem, items };
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(core, import.meta.hot))
}
