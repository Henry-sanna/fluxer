<template>
    <aside class="hidden xl:col-span-4 xl:block">
        <div class="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
                <div class="rounded-lg bg-white shadow">
                    <div class="p-6">
                        <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">Who to follow
                        </h2>
                        <div class="mt-6 flow-root">
                            <ul role="list" class="-my-4 divide-y divide-gray-200">
                                <li v-for="user in whoToFollow" :key="user.handle" class="flex items-center space-x-3 py-4">
                                    <div class="flex-shrink-0">
                                        <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a :href="user.href">{{ user.name }}</a>
                                        </p>
                                        <p class="text-sm text-gray-500">
                                            <a :href="user.href">{{ '@' + user.handle }}</a>
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <button type="button"
                                            class="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                                            <PlusIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            Follow
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6">
                            <a href="#"
                                class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">View
                                all</a>
                        </div>
                    </div>
                </div>
            </section>
            <section aria-labelledby="trending-heading">
                <div class="rounded-lg bg-white shadow">
                    <div class="p-6">
                        <h2 id="trending-heading" class="text-base font-medium text-gray-900">Trending</h2>
                        <div class="mt-6 flow-root">
                            <ul role="list" class="-my-4 divide-y divide-gray-200">
                                <li v-for="post in trendingPosts" :key="post.id" class="flex space-x-3 py-4">
                                    <div class="flex-shrink-0">
                                        <img class="h-8 w-8 rounded-full" :src="post.user.imageUrl" :alt="post.user.name" />
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <p class="text-sm text-gray-800">{{ post.body }}</p>
                                        <div class="mt-2 flex">
                                            <span class="inline-flex items-center text-sm">
                                                <button type="button"
                                                    class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                    <ChatBubbleLeftEllipsisIcon class="h-5 w-5" aria-hidden="true" />
                                                    <span class="font-medium text-gray-900">{{ post.comments
                                                    }}</span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6">
                            <a href="#"
                                class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">View
                                all</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </aside>
</template>
<script setup>
import {
    ChatBubbleLeftEllipsisIcon,
    PlusIcon,
} from '@heroicons/vue/20/solid'

const whoToFollow = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]
const trendingPosts = [
    {
        id: 1,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
        comments: 291,
    },
    // More posts...
]
</script>