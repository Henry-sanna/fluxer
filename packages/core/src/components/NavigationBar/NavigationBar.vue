<template>
    <div
        class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"
    >
        <div class="flex flex-shrink-0 items-center px-6">
            <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                alt="Your Company"
            />
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            <!-- User account dropdown -->
            <AvatarApp />
            <!-- Sidebar Search -->
            <div class="mt-5 px-3">
                <label for="search" class="sr-only">Search</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        aria-hidden="true"
                    >
                        <MagnifyingGlassIcon
                            class="h-4 w-4 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        class="block w-full rounded-md border-0 py-1.5 pl-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                    />
                </div>
            </div>
            <!-- Navigation -->
            <MenuApp />
        </div>
    </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import AvatarApp from "./AvatarApp.vue";
import MenuApp from "./MenuApp.vue";
</script>
