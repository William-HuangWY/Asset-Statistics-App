<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import ApexCharts from 'apexcharts';

const props = defineProps({
  data: { type: Array, required: true },
});

const { t, tm, locale } = useI18n({ useScope: 'global' });
const chartEl = ref(null), chart = ref(null);
const isDark = ref(false);

function getOptions() {
  return {
    chart: {
      type: 'area', height: 280,
      toolbar: { show: false }, zoom: { enabled: false },
      background: 'transparent', fontFamily: 'inherit',
    },
    markers: {
      size: 4,
      fillOpacity: 1,
      hover: { size: 6 },
      strokeColors: isDark.value ? '#BFA4FF' : '#7373D5', // marker outline
    },
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    tooltip: { theme: isDark.value ? 'dark' : 'light' },
    colors: [isDark.value ? '#a684ff' : '#908FDE'], // line & area
    grid: { borderColor: isDark.value ? '#45556c' : '#d6d3d1' }, // grid lines

    series: [{
      name: t('overview.nodeName'),
      data: props.data,
    }],
    xaxis: {
      categories: tm('overview.ylabels'),
      labels: { style: { colors: isDark.value ? '#e2e8f0' : '#1c1917' } }, // x-label-text
      axisBorder: { color: isDark.value ? '#475569' : '#d6d3d1' }, // horizontal border
      axisTicks: { color: isDark.value ? '#475569' : '#d6d3d1' }, // x-tick
    },
    yaxis: {
      labels: { style: { colors: isDark.value ? '#e2e8f0' : '#1c1917' } }, // y-label-text
    },
  };
}

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
    <div class="p-4 text-base font-bold text-stone-800 dark:text-slate-300">
      <h3><i class="fa-solid fa-chart-line pr-2"></i>{{ $t('overview.title') }}</h3>
    </div>
    <div ref="chartEl" class="w-full h-full px-4 pb-6"></div>
  </div>
</template>
