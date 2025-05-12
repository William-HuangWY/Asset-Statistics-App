<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { toggleTheme } from '../../theme.js';
const languageMenuOpen = ref(false);
const isDark = ref(localStorage.getItem('theme') === 'dark')

function filterLanguage(language) {
  if (language === 'English' || language === '英文') return 'en';
  if (language === 'Chinese' || language === '中文') return 'zh-TW';
  return language;
}

function saveLanguage(lang) {
  document.cookie = `locale=${lang}`;
}

const handleEscape = (e) => {
  if (e.key === 'Escape') languageMenuOpen.value = false;
}
watch(languageMenuOpen, (open) => {
  if (open) window.addEventListener('keydown', handleEscape);
  else window.removeEventListener('keydown', handleEscape);
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="flex items-center gap-3.5">
    <label class="group relative inline-block cursor-pointer w-16 h-7 align-middle select-none" :title="$tm('topbar.style.tip')">
      <input
        id="theme-toggle"
        type="checkbox"
        class="sr-only peer"
        @change="isDark = toggleTheme()"
        :checked="isDark"
      />
      <div
        class="block w-full h-full rounded-full transition-colors duration-200
          bg-stone-200 group-hover:bg-stone-300 peer-checked:bg-slate-800 dark:group-hover:bg-slate-700"
      ></div>
      <div
        class="absolute top-0.5 left-1 w-6 h-6 rounded-full bg-white dark:bg-stone-200 
          flex items-center justify-center transition-all duration-200 peer-checked:translate-x-8"
      >
        <i :class="[ 
          isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun',
          'text-gray-500 dark:text-gray-600 transition-colors duration-200',
          ]"
        ></i>
      </div>
    </label>

    <div class="relative inline-block text-left">
      <div v-if="languageMenuOpen" @click="languageMenuOpen = false" class="fixed inset-0 z-20 bg-transparent"></div>
      <button
        @click="languageMenuOpen = !languageMenuOpen" :title="$tm('topbar.language.tip')"
        class="relative flex items-center gap-1 px-3 py-[5px] w-25 rounded-md cursor-pointer focus-visible:outline-none
          bg-stone-200 dark:bg-slate-800 hover:bg-stone-300 dark:hover:bg-slate-700 
          text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-blue-200 transition-colors"
      >
        <i class="fa-solid fa-globe pr-1"></i>
        <span class="text-sm font-medium">
          {{ $i18n.locale === 'en' ? 'EN' : '中文' }}
        </span>
        <i class="fa-solid fa-chevron-down ml-auto transition-transform duration-200" :class="{ 'rotate-180': languageMenuOpen }"></i>
      </button>
      <div 
        v-if="languageMenuOpen" 
        @click="languageMenuOpen = false" 
        class="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-50"
      >
        <div class="capitalize px-4 py-2 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-300 font-semibold">
          {{ $t('topbar.language.prompt') }}
        </div>
        <ul>
          <li
            v-for="lang in $tm('topbar.language.options')" :key="lang"
            @click="() => {
              lang = filterLanguage(lang);
              $i18n.locale = lang;
              saveLanguage(lang);
              languageMenuOpen = false;
            }"
            class="px-4 py-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center justify-between"
          >
            <span class="capitalize">{{ lang }}</span>
            <i v-if="filterLanguage(lang) === $i18n.locale" class="fa-solid fa-check text-blue-600 dark:text-sky-400"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>