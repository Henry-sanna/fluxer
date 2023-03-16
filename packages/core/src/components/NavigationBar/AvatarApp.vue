<template>
    <Menu as="div" class="relative inline-block px-3 text-left">
        <div>
            <MenuButton
                class="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
                <span class="flex w-full items-center justify-between">
                    <span
                        class="flex min-w-0 items-center justify-between space-x-3"
                    >
                        <img
                            class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            alt=""
                        />
                        <span class="flex min-w-0 flex-1 flex-col">
                            <span
                                class="truncate text-sm font-medium text-gray-900"
                                >Jessy Schwarz</span
                            >
                            <span class="truncate text-sm text-gray-500"
                                >@jessyschwarz</span
                            >
                        </span>
                    </span>
                    <ChevronUpDownIcon
                        class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                </span>
            </MenuButton>
        </div>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >View profile</a
                        >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >Settings</a
                        >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >Notifications</a
                        >
                    </MenuItem>
                </div>
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >Get desktop app</a
                        >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >Support</a
                        >
                    </MenuItem>
                </div>
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >Logout</a
                        >
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { Bars4Icon, ClockIcon, HomeIcon } from "@heroicons/vue/24/outline";
import {
    ChevronUpDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/vue/20/solid";

const navigation = [
    { name: "Home", href: "#", icon: HomeIcon, current: true },
    { name: "My tasks", href: "#", icon: Bars4Icon, current: false },
    { name: "Recent", href: "#", icon: ClockIcon, current: false },
];
const teams = [
    { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
    { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
    { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];
const projects = [
    {
        id: 1,
        title: "GraphQL API",
        initials: "GA",
        team: "Engineering",
        members: [
            {
                name: "Dries Vincent",
                handle: "driesvincent",
                imageUrl:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Lindsay Walton",
                handle: "lindsaywalton",
                imageUrl:
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Courtney Henry",
                handle: "courtneyhenry",
                imageUrl:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            {
                name: "Tom Cook",
                handle: "tomcook",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        ],
        totalMembers: 12,
        lastUpdated: "March 17, 2020",
        pinned: true,
        bgColorClass: "bg-pink-600",
    },
    // More projects...
];
</script>
