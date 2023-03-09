import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref } from 'vue';

export const core = defineStore('core', () => {
    const credentials: Ref<any> = ref({
        "access_token": null,
        "token_type": null,
        "expires_in": null,
        "refresh_token": null,
        "scope": null
    })

    return { credentials };
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(core, import.meta.hot))
}
