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

export const initPublish = (stores, eventBus) => {
    config.stores.forEach(element => {
        const st = stores[element.id];
        watch(
            st,
            (state) => {
                console.log("EMITTER")
                const schema = state.$state
                eventBus.emit(`${config.name}/${element.id}:state`, schema);
            },
            { deep: true }
        )
    });
}

export const initSubscribe = (store, eventBus) => {
    config.events.forEach(event => {
        eventBus.on(event.id, (payload) => {
            console.log("jonas")
        })
    });
}
