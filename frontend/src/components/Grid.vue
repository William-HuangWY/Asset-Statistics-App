<script setup>
import StatCard from './GridCards/StatCard.vue';
import OverviewGraphCard from './GridCards/OverviewGraphCard.vue';

let statsData = [ // temp stats data
  { val: 'NT$ 3,201,064', difference: 'vs. last month', point: 1.52, trend: 'up' },
  { val: 'NT$ 281,941', difference: 'vs. yesterday', point: 17.8, trend: 'up' },
  { val: 'NT$ 121,189', difference: 'vs. last year', point: 2.23, trend: 'down' },
];

let overviewData = { // temp chart data
  sequence: [2801234, 2912380, 3012309, 3210065, 2890125, 2913001],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
}
</script>

<template>
  <div class="px-4 grid gap-3 grid-cols-12">
    <StatCard
      v-for="(stat, i) in statsData"
      :key="i"
      :class="i === 0 ? 'col-span-12 c-md:col-span-12 c-lg:col-span-6' : 'col-span-12 c-md:col-span-6 c-lg:col-span-3'" 
      :title="$tm('stats.titles')[i]"
      :value="stat.val"
      :subtitle="stat.difference"
      :point="stat.point"
      :trend="stat.trend"
    />
    <OverviewGraphCard 
      class="col-span-12 c-lg:col-span-9" 
      :data="overviewData.sequence"
      :categories="overviewData.labels"
    />
  </div>
</template>