<script setup>
import { onMounted } from 'vue';
import SideBar from './components/SideBar.vue'

onMounted(() => {
  document.cookie = 'locale=en';
});
</script>

<template>
  <div id="app-wrapper" class="grid grid-cols-[250px_1fr] gap-4 p-4 font-sans font-normal">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped>
</style>
