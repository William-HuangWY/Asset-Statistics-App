<template>
  <div class="border-b mb-4 mt-2 pb-4 border-stone-300 dark:border-slate-700">
    <button class="flex p-0.5 hover:bg-stone-200 rounded dark:hover:bg-slate-800
    transition-colors relative gap-2 w-full items-center"
    >
      <img src="../../assets/CodeYing-AssetStats.svg" 
      alt="avatar" class="size-8 rounded shrink-0 bg-[rgb(48,47,47)] shadow"
      >
      <div class="text-start">
        <span class="text-sm text-gray-800 dark:text-gray-200 font-bold block">
          {{ $t('sidebar.account') }}
        </span>
        <span class="text-xs text-gray-500 dark:text-gray-400 font-normal block">
          codeying@weiyinghuang.com
        </span>
        <i class="fa-solid fa-chevron-down absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-[9px] text-gray-600 dark:text-gray-300"></i>
        <i class="fa-solid fa-chevron-up absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-[9px] text-gray-600 dark:text-gray-300"></i>
      </div>
    </button>
  </div>
</template>