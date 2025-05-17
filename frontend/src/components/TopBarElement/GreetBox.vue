<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n' // <i class="fa-solid fa-mug-hot"></i> 🚀☕🌅☀️🌤️🌙

const { locale } = useI18n({ useScope: 'global' });
const currentDate = ref(new Date());
let intervalId = null;

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat(locale.value, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(currentDate.value);
});

const timePeriod = computed(() => {
  const hour = currentDate.value.getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  else if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
});

onMounted(() => {
  intervalId = setInterval(() => {
    currentDate.value = new Date();
  }, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div>
    <span class="text-[12px] sm:text-sm pt-[3px] sm:pt-0 text-gray-900 dark:text-gray-100 font-bold block">
      <i :class="$t(`topbar.greeting.${timePeriod}.icon`)"></i>
      &nbsp;
      {{ $t(`topbar.greeting.${timePeriod}.text`) + $t('sidebar.account').split('-').at(-1).trim(' ') }}!
    </span>
    <span class="text-[10px] sm:text-xs block pt-0.5 sm:pt-1 pb-0.5 sm:pb-0 text-stone-500 dark:text-gray-400">{{ formattedDate }}</span>
  </div>
</template>