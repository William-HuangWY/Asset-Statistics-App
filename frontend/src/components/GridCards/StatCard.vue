<script setup>
const props = defineProps({
  title: { type: String, default: 'StatCard' },
  value: { type: String, default: 'N/A' },
  subtitle: { type: String, default: 'period' },
  point: { type: Number, default: 0 },
  trend: { type: String, default: 'up', validator: (val) => ['up', 'down'].includes(val) },
});
</script>

<template>
  <div class="p-4 rounded border bg-stone-50 dark:bg-slate-900 border-stone-300 dark:border-slate-600">
    <div class="flex mb-8 items-start justify-between">
      <div>
        <h3 class="text-stone-500 dark:text-slate-400 mb-2 text-sm font-[500]">{{ title }}</h3>
        <p class="text-stone-900 dark:text-slate-100 text-3xl font-semibold">{{ value }}</p>
      </div>
      <div>
        <span 
          :class="[ 
            'text-xs flex items-center gap-1 font-medium px-2 py-1 rounded',
            trend === 'up' ? 'bg-green-100 dark:bg-green-300 text-green-700 dark:text-green-900' : 'bg-red-100 dark:bg-red-300 text-red-700 dark:text-red-900',
          ]"
        >
          <i :class="`fa-solid fa-arrow-trend-${trend}`"></i>
          {{ point }}%
        </span>
      </div>
    </div>
    <p class="text-xs text-stone-500 dark:text-slate-400">- {{ subtitle }} -</p>
  </div>
</template>