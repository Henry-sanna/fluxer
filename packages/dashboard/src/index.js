import { HomeIcon, HeartIcon } from '@heroicons/vue/24/outline'
import Module from "./Module.vue";
export const install = () => {
    return {
        path: "/dashboard",
        parent: 'root',
        component: Module
    }
}

export const menu = (router) => {
    return {
        name: 'Dashboard',
        href: '#',
        icon: HeartIcon,
        current: false,
        onClick: () => {
            router.push({
                path: '/dashboard',
            })
        }
    }
}