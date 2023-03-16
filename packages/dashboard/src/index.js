import { HomeIcon, HeartIcon } from '@heroicons/vue/24/outline'
import Module from './Module.vue'
export const install = () => {
    return {
        // path: "dashboard",
        // name: "dashboard",
        // parent:'root',
        // components: {
        //     default: Module,
        // },
        merge: 'home',
        components: {
            slidePanel: Module,
        },
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
        },
    }
}
