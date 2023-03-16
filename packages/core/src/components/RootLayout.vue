<template>
    <div class="min-h-full">
        <!-- Static sidebar for desktop -->
        <NavigationBar />
        <!-- Main column -->
        <MainPanel />
    </div>
</template>

<script setup>
import NavigationBar from './NavigationBar/NavigationBar.vue'
import MainPanel from './MainPanel/MainPanel.vue'
</script>
