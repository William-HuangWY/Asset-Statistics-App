<script setup>
import StatCard from './GridCards/StatCard.vue';
import OverviewGraphCard from './GridCards/OverviewGraphCard.vue';
import CompareGraphCard from './GridCards/CompareGraphCard.vue';
import InfoListCard from './GridCards/InfoListCard.vue';

let statsData = [ // temp stats data
  { val: 'NT$ 3,201,064', difference: 'vs. last month', point: 1.52, trend: 'up' },
  { val: 'NT$ 281,941', difference: 'vs. yesterday', point: 17.8, trend: 'up' },
  { val: 'NT$ 121,189', difference: 'vs. last year', point: 2.23, trend: 'down' },
];

// temp overview data
let overviewSequence = [2801234, 2912380, 3012309, 3210065, 2890125, 2913001];

// temp summary data
let summaryOfLastYear = [120, 50, 20, 0, 10];
let summaryOfThisYear = [140, 60, 30, 0, 15];

// temp transaction data
let transactions = [
  ['12947', 'expense', '2025/05/24', '-USD 1552.30'],
  ['12946', 'stock', '2025/05/07', '+USD 11.09'],
  ['12945', 'crypto', '2025/04/21', '+BTC 0.0345'],
  ['12944', 'stock', '2025/03/16', '-NTD 91000'],
  ['12943', 'income', '2025/01/03', '+USD 1321.69'],
  ['12942', 'others', '2024/12/31', ' NTD 2000'],
  ['12941', 'others', '2024/12/11', ' NTD 1000'],
  ['12940', 'estate', '2024/11/25', '-USD 481230.01'],
]
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
      class="col-span-12 c-lg:col-span-6 c-xlg:col-span-9" 
      :data="overviewSequence"
    />
    <CompareGraphCard 
      class="col-span-12 c-lg:col-span-6 c-xlg:col-span-3" 
      :dataLast="summaryOfLastYear" 
      :dataNow="summaryOfThisYear" 
    />

    <InfoListCard 
      class="col-span-12" 
      :header="$tm('list.header')"
      :body="transactions"
    />
  </div>
</template>