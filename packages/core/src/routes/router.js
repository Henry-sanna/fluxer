import * as Modules from './install'
import { createWebHistory, createRouter } from "vue-router"
import RootLayout from '../components/RootLayout.vue'
import LoginLayout from '../components/LoginLayout.vue'
import LogoutLayout from '../components/LogoutLayout.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        component: RootLayout,
        children: []
    },
    {
        path: '/login',
        component: LoginLayout
    },
    {
        path: '/logout',
        component: LogoutLayout
    },
];

export const router = (eventBus) => {
    for (const key in Modules) {
        if (Modules[key] && Modules[key]['install'] && typeof Modules[key]['install'] === 'function') {
            const routeModule = Modules[key]['install']()
            if (routeModule.parent) {
                const route = routes.find((route) => route.name == routeModule.parent)
                route.children.push({ ...routeModule, props: { eventBus } })
            } else {
                routes.push({ ...Modules[key]['install'](), props: { eventBus } })
            }
        }
    }

    return createRouter({
        history: createWebHistory(),
        routes,
    })
};

export const menu = (router) => {
    const menus = []
    for (const key in Modules) {
        if (Modules[key] && Modules[key]['menu'] && typeof Modules[key]['menu'] === 'function') {
            const menuModule = Modules[key]['menu'](router)
            menus.push(menuModule)
        }
    }
    return menus
};



