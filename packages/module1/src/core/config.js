import { watch } from "vue"
import { getActivePinia, setActivePinia } from "pinia"
const config = {
    name: 'module1',
    stores: [
    ],
    events: [
        {
            id: 'core/core:get',
            handler: (pinia, stores, payload) => {
                const st = JSON.parse(JSON.stringify(payload))
                setActivePinia(pinia)
                const core = stores.core()
                core.$patch(st)
            }
        }
    ]
}

export const initPublish = (stores, emitter) => {
    config.stores.forEach(element => {
        const st = stores[element.id];
        watch(
            st,
            (state) => {
                const schema = element.exportAll ? state[element.id] : {}
                emitter.emit(`${config.name}/${element.id}:get`, schema);
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
