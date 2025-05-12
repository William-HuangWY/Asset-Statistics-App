<script setup>
function openWebsite(url) {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="z-30 flex sticky top-[calc(100vh-48px-16px)] flex-col h-12 border-t px-2 border-stone-300 dark:border-slate-700 justify-end text-xs">
    <div class="flex items-center justify-between">
      <div>
        <p class="pb-0.5 font-bold text-gray-950 dark:text-gray-50">{{ $t('sidebar.role.admin') }}</p>
        <p class="text-stone-500 dark:text-stone-300">{{ $t('sidebar.advertisement.content') }}</p>
      </div>
      <button @click="openWebsite('https://weiyinghuang.com')" class="px-2 py-1.5 mt-1 font-bold cursor-pointer bg-stone-200 hover:bg-stone-300 transform-color dark:bg-slate-700 dark:hover:bg-slate-600 rounded-md text-xs text-gray-900 dark:text-gray-50">
        {{ $t('sidebar.advertisement.button') }} &nbsp;
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    </div>
  </div>
</template>