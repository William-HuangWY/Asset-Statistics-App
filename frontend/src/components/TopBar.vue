<script setup>
import ToolButtons from './TopBarElement/ToolButtons.vue';
import GreetBox from './TopBarElement/GreetBox.vue';
</script>

<template>
  <div class="border-b px-4 pb-3 mb-4 mt-2 border-stone-200 dark:border-slate-700">
    <div class="flex items-center justify-between p-0.5">
      <GreetBox />
      <ToolButtons />
    </div>
  </div>
</template>