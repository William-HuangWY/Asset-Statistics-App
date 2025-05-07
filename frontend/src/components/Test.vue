<script setup>
import { ref, onMounted } from 'vue'
import { toggleTheme } from '../theme.js'

const isDark = ref(false);

function handleToggle() {
  toggleTheme();
  isDark.value = document.documentElement.classList.contains('dark');  
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
})
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-navbar shadow-sm border-b border-gray-300">
    <!-- Left: Logo / App Name -->
    <div class="text-2xl font-semibold text-primary tracking-wide">
      AssetStats
    </div>

    <!-- Center: Nav Links -->
    <div class="hidden md:flex space-x-6 text-sm font-medium">
      <router-link to="/" class="text-navlink hover:text-accent transition-colors duration-200">Overview</router-link>
      <router-link to="/" class="text-navlink hover:text-accent transition-colors duration-200">Assets</router-link>
      <router-link to="/" class="text-navlink hover:text-accent transition-colors duration-200">Reports</router-link>
    </div>

    <!-- <button @click="handleToggle"  class="p-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200">
      {{ isDark ? 'Dark Mode' : 'Light Mode' }}
    </button> -->

    <!-- Right: User Avatar / Menu -->
    <div class="flex items-center space-x-4">
      <span>
        {{ $t('test') }}
      </span>
      <select v-model="$i18n.locale" name="language">
        <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
          {{ lang }}
        </option>
      </select>
      <button class="text-navlink hover:text-accent">
        ⚙️
      </button>
      <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs">
        U
      </div>
    </div>
  </nav>
</template>
