<script setup>
import  AccountBox  from './SideBarElement/AccountBox.vue';
import SearchBox from './SideBarElement/SearchBox.vue';
</script>

<template>
  <div>
    <div class="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
      <AccountBox />
      <SearchBox />
    </div>
  </div>
</template>
