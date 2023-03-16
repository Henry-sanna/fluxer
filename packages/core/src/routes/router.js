import * as Modules from './install'
import { createWebHistory, createRouter } from 'vue-router'
import RootLayout from '../components/RootLayout.vue'
import LoginLayout from '../components/LoginLayout.vue'
import LogoutLayout from '../components/LogoutLayout.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        components: {
            default: RootLayout,
        },
        children: [],
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: LoginLayout,
        },
        children: [],
    },
    {
        path: '/logout',
        name: 'logout',
        components: {
            default: LogoutLayout,
        },
        children: [],
    },
]

const addParentRouter = (routeModule, eventBus) => {
    if (routeModule.parent) {
        const route = routes.find((route) => route.name == routeModule.parent)
        route && route.children.push({ ...routeModule, props: { eventBus } })
    } else {
        routes.push({
            ...Modules[key]['install'](),
            props: { eventBus },
        })
    }
}

const merge = (routeModule, eventBus) => {
    const nameMerge = routeModule.merge
    const route = findRoute(routes, 'name', nameMerge)
    route.components = { ...route.components, ...routeModule.components }
    console.log('merge', routes)
}

const findRoute = (obj, prop, value) => {
    if (!obj) {
        return undefined
    }
    if (obj.hasOwnProperty(prop) && obj[prop] == value) {
        return obj
    }
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            const res = findRoute(obj[key], prop, value)
            if (res !== undefined) {
                return res
            }
        }
    }
    return undefined
}

export const menu = (router) => {
    const menus = []
    for (const key in Modules) {
        if (
            Modules[key] &&
            Modules[key]['menu'] &&
            typeof Modules[key]['menu'] === 'function'
        ) {
            const menuModule = Modules[key]['menu'](router)
            menus.push(menuModule)
        }
    }
    return menus
}

export const router = (eventBus) => {
    for (const key in Modules) {
        if (
            Modules[key] &&
            Modules[key]['install'] &&
            typeof Modules[key]['install'] === 'function'
        ) {
            const routeModule = Modules[key]['install']()
            console.log('ROUTERR')
            routeModule.hasOwnProperty('parent') &&
                addParentRouter(routeModule, eventBus)
            routeModule.hasOwnProperty('merge') && merge(routeModule, eventBus)
        }
    }

    return createRouter({
        history: createWebHistory(),
        routes,
    })
}
