import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref } from 'vue'

export const countries = defineStore('countries', () => {
    const selected = ref(null)
    return { selected }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(countries, import.meta.hot))
}
