<script setup>
const Route = (selected = false, icon = '', title = '') => {
  const isSelected = (selected === true || selected === 'true');
  const iconColor = isSelected ? 'text-[rgb(255,86,86)] dark:text-[rgb(255,90,90)]' : '';
  const classes = isSelected 
    ? 'bg-white dark:bg-slate-500 text-stone-950 dark:text-stone-100 shadow'
    : 'hover:bg-stone-200 dark:hover:bg-slate-700 bg-trabsparent text-stone-500 dark:text-stone-300 shadow-none';

  return `<button class="flex items-center justify-start cursor-pointer px-2 py-1.5 gap-2 w-full rounded text-sm transition-[box-shadow,_background-color,_color] duration-200 ease-in-out ${classes}">
    <div class="w-6 h-6 flex items-center justify-center">
      ${icon ? `<i class="${icon} mr-2 ${iconColor}"></i>` : ''}
    </div>
    <span class="font-medium">
      ${title}
    </span>
  </button>`;
};
</script>

<template>
  <div class="space-y-1">
    <div
      v-for="(item, index) in $tm('sidebar.links')"
      :key="index"
      v-html="Route(false, item.icon, item.label)"
    ></div>
  </div>
</template>