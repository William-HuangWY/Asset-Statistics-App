<script setup>
const props = defineProps({
  header: { type: Array, required: true },
  body: { type: Array, default: [['nullptr', '-', 'xxxx/xx/xx', 'NA']] },
});
</script>

<template>
  <div class="p-4 rounded border bg-stone-50 dark:bg-slate-900 border-stone-300 dark:border-slate-600">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="flex items-center gap-1.5 text-base font-bold">
        <i class="fa-solid fa-table-list pr-1"></i>{{ $t('list.title') }}
      </h3>
      <button class="text-sm cursor-pointer text-violet-900 dark:text-violet-300 hover:underline">{{ $t('list.button') }}</button>
    </div>
    <table class="w-full table-auto">
      <thead>
        <tr class="text-sm font-normal text-stone-500 dark:text-stone-300">
          <th v-for="(item, index) in header" :key="index" class="text-start p-1.5">{{ item }}</th>
          <th class="w-8"></th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(row, rowIndex) in body"
          :key="rowIndex"
          :class="rowIndex % 2 ? 'text-sm' : 'bg-stone-100 dark:bg-slate-800 text-sm'"
        >
          <td v-for="(cellVal, cellIndex) in row" :key="cellIndex" class="p-1.5">
            <template v-if="cellIndex === 0">
              <a href="#" class="text-fuchsia-700 dark:text-fuchsia-400 flex items-center gap-1">
                <span class="underline">{{ cellVal ? `#${cellVal}` : '#'}}</span>
                <i class="fa-solid fa-arrow-turn-up"></i>
              </a>
            </template>
            <template v-else>
              <span :class="[
                cellVal.startsWith('+') ? 'text-green-700 dark:text-lime-600' : '',
                cellVal.startsWith('-') ? 'text-red-700 dark:text-red-600' : ''
              ]">
                {{ cellIndex !== 1 ? cellVal : $t(`list.type.${cellVal}`)  }}
              </span>
            </template>
          </td>
          <td class="w-8">
            <button class="text-sm size-8 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-slate-700 transition-colors gird place-content-center rounded">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>