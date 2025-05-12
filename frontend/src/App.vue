<script setup>
import { onMounted } from 'vue';
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'

onMounted(() => {
  const existingLocale = document.cookie
    .split('; ')
    .find(row => row.startsWith('locale='))
    .split('=')[1];
  if (existingLocale != null && existingLocale !== 'en' && existingLocale !== 'zh-TW') existingLocale = null;
  if (existingLocale == null) document.cookie = 'locale=en';
});
</script>

<template>
  <div id="app-wrapper" class="grid grid-cols-[260px_1fr] gap-4 p-4 font-sans font-normal">
    <SideBar />
    <div class="bg-white dark:bg-slate-900 rounded-lg pb-4 shadow h-[200vh]">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
