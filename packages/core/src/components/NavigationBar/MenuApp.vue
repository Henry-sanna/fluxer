<template>
    <nav class="mt-6 px-3">
        <div class="space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" @click="item.onClick"
                :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon"
                    :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']"
                    aria-hidden="true" />
                {{ item.name }}
            </a>
        </div>
        <div class="mt-8">
            <!-- Secondary navigation -->
            <h3 class="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">Teams</h3>
            <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                <a v-for="team in teams" :key="team.name" :href="team.href"
                    class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    <span :class="[team.bgColorClass, 'mr-4 h-2.5 w-2.5 rounded-full']" aria-hidden="true" />
                    <span class="truncate">{{ team.name }}</span>
                </a>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { menu } from './../../routes/router'
const router = useRouter()
const navigation = menu(router)
const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
</script>