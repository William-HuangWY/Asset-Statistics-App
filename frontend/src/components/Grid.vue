<script setup>
import StatCard from './GridCards/StatCard.vue';

let statsData = [ // temp data
  { val: 'NT$ 3,201,064', difference: 'vs. last month', point: 1.52, trend: 'up', span: 6},
  { val: 'NT$ 281,941', difference: 'vs. yesterday', point: 17.8, trend: 'up', span: 3},
  { val: 'NT$ 121,189', difference: 'vs. last year', point: 2.23, trend: 'down', span: 3},
];
</script>

<template>
  <div class="px-4 grid gap-3 grid-cols-12">
    <StatCard
      v-for="(stat, i) in statsData"
      :key="i"
      :class="`col-span-${stat.span}`"
      :title="$tm('stats.titles')[i]"
      :value="stat.val"
      :subtitle="stat.difference"
      :point="stat.point"
      :trend="stat.trend"
    />
  </div>
</template>