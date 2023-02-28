import { watch } from "vue"
const config = {
    name: 'module1',
    stores: [
    ],
    events: [
        {
            id: 'core/core:state',
            handler: (stores, payload) => {
                console.log("handler")
                const st = JSON.parse(JSON.stringify(payload))
                const core = stores.core1()
                core.$reset(st)
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
                emitter.emit(`${config.name}/${element.id}:state`, schema);
            },
            { deep: true }
        )
    });
}

export const initSubscribe = (stores, eventBus) => {
    // config.events.forEach(event => {
    //     eventBus.on(event.id, (payload) => {
    //         event.handler(stores, payload)
    //     })
    // });
}
