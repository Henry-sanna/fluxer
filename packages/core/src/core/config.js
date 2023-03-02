import { watch } from "vue"
import { setActivePinia } from "pinia"
const config = {
    name: 'core',
    stores: [
        {
            id: "core",
        }
    ],
    events: [
        {
            id: 'core/core:update',
            handler: (pinia, stores, payload) => {
                const st = JSON.parse(JSON.stringify(payload))
                setActivePinia(pinia)
                const core = stores.core()
                core.$patch(st)
            }
        }
    ]
}

export const initPublish = (pinia, stores, eventBus) => {
    config.stores.forEach(element => {
        const st = stores[element.id];
        watch(
            st,
            (state) => {
                const schema = state.$state
                eventBus.emit(`${config.name}/${element.id}:get`, schema);
            },
            { deep: true }
        )
    });
}

export const initSubscribe = (pinia, stores, eventBus) => {
    config.events.forEach(event => {
        eventBus.on(event.id, (payload) => {
            event.handler(pinia, stores, payload)
        })
    });
}
