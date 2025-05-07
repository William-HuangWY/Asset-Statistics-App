<script setup>
import { onMounted } from 'vue';
import SideBar from './components/SideBar.vue'

onMounted(() => {
  document.cookie = 'locale=zh-TW';
});
</script>

<template>
  <div id="app-wrapper" class="grid grid-cols-[220px_1fr] gap-4 p-4 ">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped>
</style>
