import { watch } from "vue"
const config = {
    name: 'core',
    stores: [
        {
            id: "core",
        }
    ],
    events: []
}

export const initPublish = (pinia, stores, eventBus) => {
    config.stores.forEach(element => {
        const st = stores[element.id];
        watch(
            st,
            (state) => {
                const schema = state.$state
                eventBus.emit(`${config.name}/${element.id}:state`, schema);
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
