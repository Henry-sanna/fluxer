// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCoreStore = defineStore({
  id: 'user-module2',
  state: () => ({
    name: 'module2',
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(user: string, password: string) {
      this.$patch({
        ...this.state,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCoreStore, import.meta.hot))
}
