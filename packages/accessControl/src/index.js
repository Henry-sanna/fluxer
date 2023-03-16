import { HomeIcon } from '@heroicons/vue/24/outline'
import Module from './Module.vue'
export const install = () => {
    return {
        path: '/home',
        name: 'home',
        //parent: 'root',
        components: {
            default: Module,
        },
    }
}

export const menu = (router) => {
    return {
        name: 'Access Control',
        href: '#',
        icon: HomeIcon,
        current: true,
        onClick: () => {
            router.push({
                path: '/home',
            })
        },
    }
}
