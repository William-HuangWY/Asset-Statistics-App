<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import ApexCharts from 'apexcharts';

const props = defineProps({
  dataLast: { type: Array, required: true },
  dataNow: { type: Array, required: true },
});

const { tm, locale } = useI18n({ useScope: 'global' });
const chartEl = ref(null), chart = ref(null);
const isDark = ref(false);

function getOptions() {
  return {
    chart: {
      type: 'radar', height: 300,
      toolbar: { show: false }, zoom: { enabled: false },
      background: 'transparent', fontFamily: 'inherit',
      parentHeightOffset: 10, offsetX: 10, offsetY: -5,
    },
    markers: {
      size: 3,
      fillOpacity: 1,
      hover: { size: 4.5 },
      strokeColors: [isDark.value ? '#A1B8DB' : '#3C4450', isDark.value ? '#3CABFF' : '#3576E5'], // marker outline
    },
    legend: {
      labels: { colors: isDark.value ? '#e2e8f0' : '#1c1917' }, // label text
      markers: { strokeWidth: 0 },
    },
    plotOptions: {
      radar: {
        size: 110,
        polygons: {
          strokeColors: isDark.value ? '#475569' : '#d6d3d1', // pentagon grid
          connectorColors: isDark.value ? '#64748b' : '#a8a29e', // pentagon diagonal
        }
      }
    },
    stroke: { width: 1.5 },
    tooltip: { theme: isDark.value ? 'dark' : 'light' },
    colors: [isDark.value ? '#94A8C6' : '#434D5B', isDark.value ? '#0091FF' : '#3b82f6'], // dot & line & area
    

    series: [
      { name: tm('compare.dataLabels')[0], data: props.dataLast },
      { name: tm('compare.dataLabels')[1], data: props.dataNow },
    ],
    xaxis: {
      categories: tm('compare.categories'),
      labels: { style: { fontWeight: 500 } },
    },
    yaxis: { show: false },
  }
};

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');

  chart.value = new ApexCharts(chartEl.value, getOptions());
  chart.value.render();

  const observer = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark');
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  onBeforeUnmount(() => {
    chart.value?.destroy();
    observer.disconnect();
  });
});

watch([isDark, locale], () => {
  chart.value?.updateOptions(getOptions(), true);
});
</script>

<template>
  <div class="overflow-hidden rounded border bg-stone-50 dark:bg-slate-900 border-stone-300 dark:border-slate-600">
    <div class="px-4 pt-4 text-base font-bold text-stone-800 dark:text-slate-300">
      <h3><i class="fa-regular fa-folder-open pr-2"></i>{{ $t('compare.title') }}</h3>
    </div>
    <div ref="chartEl" class="w-full h-full px-4 pb-4"></div>
  </div>
</template>