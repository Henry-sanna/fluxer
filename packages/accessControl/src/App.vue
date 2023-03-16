<template>
    <div class="mt-4 px-8 sm:px-6 lg:px-8">
        <!-- Projects table (small breakpoint and up) -->
        <div class="mt-8 hidden sm:block">
            <div
                class="inline-block min-w-full border-b border-gray-200 align-middle"
            >
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <h1
                                class="text-base font-semibold leading-6 text-gray-900"
                            >
                                REST COUNTRY
                            </h1>
                            <p class="mt-2 text-sm text-gray-700">
                                A list of all region in the World
                            </p>
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                class="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add Region
                            </button>
                        </div>
                    </div>
                    <div class="mt-8 flow-root">
                        <div
                            class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
                        >
                            <div
                                class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                            >
                                <table
                                    class="min-w-full divide-y divide-gray-300"
                                >
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                            >
                                                <span class="sr-only"
                                                    >View</span
                                                >
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 bg-white"
                                    >
                                        <tr
                                            v-for="person in people"
                                            :key="person.email"
                                        >
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0"
                                            >
                                                <div class="flex items-center">
                                                    <div
                                                        class="h-10 w-10 flex-shrink-0"
                                                    >
                                                        <img
                                                            class="h-10 w-10 rounded-full"
                                                            :src="person.image"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="ml-4">
                                                        <div
                                                            class="font-medium text-gray-900"
                                                        >
                                                            {{ person.name }}
                                                        </div>
                                                        <div
                                                            class="text-gray-500"
                                                        >
                                                            {{ person.email }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                            >
                                                <div class="text-gray-900">
                                                    {{ person.title }}
                                                </div>
                                                <div class="text-gray-500">
                                                    {{ person.department }}
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                            >
                                                <span
                                                    class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                                                    >Active</span
                                                >
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                            >
                                                {{ person.role }}
                                            </td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                                            >
                                                <a
                                                    href="#"
                                                    class="text-indigo-600 hover:text-indigo-900"
                                                    @click.prevent="
                                                        onClickView(person.name)
                                                    "
                                                    >View<span class="sr-only"
                                                        >,
                                                        {{ person.name }}</span
                                                    ></a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { inject } from 'vue'
const stores = inject('stores')
const countries = stores.countries()
const onClickView = (region) => {
    console.log('REGION')
    countries.$patch({
        selected: region,
    })
}

const people = [
    {
        name: 'Europe',
        title: 'Region Europe',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Europe',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg',
    },
    {
        name: 'America',
        title: 'Region America',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'America',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg',
    },
    {
        name: 'Oceania',
        title: 'Region Oceania',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Oceania',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg',
    },
    {
        name: 'Africa',
        title: 'Region Africa',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg',
    },
    {
        name: 'Asia',
        title: 'Region Asia',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Asia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg',
    },
]
</script>
<style scoped>
@import url('./../dist/css/base.css');
</style>
