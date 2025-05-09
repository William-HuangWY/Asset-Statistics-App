<script setup>
import { ref } from 'vue';
const searchText = ref('');
</script>

<template>
  <div class="bg-stone-200 dark:bg-slate-900 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
    <i class="fas fa-search text-sm mr-2 text-gray-800 dark:text-gray-400"></i>
    <input 
      id="search-input" type="text" placeholder="Search" v-model="searchText"
      class="bg-transparent outline-none w-full text-sm text-gray-800 dark:text-gray-200" 
    />
    <span
      v-if="searchText.length" 
      @click="searchText = ''" 
      class="absolute right-2 text-gray-600 dark:text-gray-400"
    >
      <i class="fas fa-times"></i>
    </span>
  </div>
</template>