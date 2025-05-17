<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'

const isSidebarOpen = ref(false);
let mediaQuery = null;

const handleResize = () => {
  if (mediaQuery?.matches) isSidebarOpen.value = false;
}

onMounted(() => {
  const cookieLocaleRow = document.cookie
    .split('; ')
    .find(row => row.startsWith('locale='))
    .split('=')[1];
  let existingLocale = cookieLocaleRow ? cookieLocaleRow.split('=')[1] : null;
  if (existingLocale != null && existingLocale !== 'en' && existingLocale !== 'zh-TW') existingLocale = null;
  if (existingLocale == null) document.cookie = 'locale=en';

  mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', handleResize);
})
</script>

<template>
  <div id="app-wrapper" class="grid md:grid-cols-[260px_1fr] grid-cols-1 gap-4 p-4 font-sans font-normal">
    <SideBar 
      :class="[
        'bg-stone-100 dark:bg-slate-950 z-[100]',
        'md:px-0 md:static md:translate-x-0 md:block',
        'fixed left-0 transition-transform duration-100',
        isSidebarOpen ? 'top-0 px-3 h-[100vh] translate-x-0' : '-translate-x-full',
      ]"
    />
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/30 z-50 md:hidden"
      @click="isSidebarOpen = false"
    ></div>

    <div class="bg-white dark:bg-slate-900 rounded-lg pb-4 shadow h-[100vh]">
      <TopBar @toggle-sidebar="isSidebarOpen = !isSidebarOpen"/>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
