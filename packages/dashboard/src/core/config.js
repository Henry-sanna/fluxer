import { watch } from 'vue'
import { getActivePinia, setActivePinia } from 'pinia'
const config = {
    name: 'dashboard',
    stores: [],
    events: [
        {
            id: 'accessControl/countries:get',
            handler: (pinia, stores, payload) => {
                console.log('ACCESS CONTROL')
                const st = JSON.parse(JSON.stringify(payload))
                setActivePinia(pinia)
                const countries = stores.countries()
                countries.$patch(st)
            },
        },
    ],
}

export const initPublish = (stores, emitter) => {
    config.stores.forEach((element) => {
        const st = stores[element.id]
        watch(
            st,
            (state) => {
                const schema = element.exportAll ? state[element.id] : {}
                emitter.emit(`${config.name}/${element.id}:get`, schema)
            },
            { deep: true }
        )
    })
}

export const initSubscribe = (pinia, stores, eventBus) => {
    config.events.forEach((event) => {
        eventBus.on(event.id, (payload) => {
            event.handler(pinia, stores, payload)
        })
    })
}
