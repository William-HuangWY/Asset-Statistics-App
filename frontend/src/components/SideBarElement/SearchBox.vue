<script setup>
import { ref } from 'vue';
import CommandMenu from './CommandMenu.vue';
const searchText = ref('');
</script>

<template>
  <div>
    <div class="bg-stone-200 dark:bg-slate-800 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
      <i class="fas fa-search text-sm mr-2 text-gray-800 dark:text-gray-400"></i>
      <input 
        id="search-input" name="search" type="text" :placeholder="$i18n.locale === 'zh-TW' ? '搜尋' : 'Search'" v-model="searchText" 
        class="z-50 bg-transparent outline-none w-full text-sm text-gray-800 dark:text-gray-200" 
      />
      <span
        v-if="searchText.length" 
        @click="searchText = ''" 
        class="absolute z-51 right-2 text-gray-600 dark:text-gray-400"
      >
        <i class="fas fa-times cursor-pointer"></i>
      </span>
    </div>

    <CommandMenu v-model="searchText" />
  </div>
</template>