<template>
    <div class="flex flex-col lg:pl-64">
        <HeaderResponsive />
        <main class="flex-1">
            <!-- Page title & actions -->
            <Header />
            <router-view />
            <router-view name="slidePanel" />
        </main>
    </div>
</template>
<script setup>
import Header from './Header.vue'
import HeaderResponsive from './HeaderResponsive.vue'
</script>
