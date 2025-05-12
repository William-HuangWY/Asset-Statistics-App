<script setup>
import AccountBox  from './SideBarElement/AccountBox.vue';
import SearchBox from './SideBarElement/SearchBox.vue';
import RouteLinks from './SideBarElement/RouteLinks.vue';
import FooterBox from './SideBarElement/FooterBox.vue';
</script>

<template>
  <div>
    <div class="overflow-y-scroll z-[100] sticky top-4 h-[calc(100vh-32px-48px)]">
      <AccountBox />
      <SearchBox />
      <RouteLinks />
    </div>
    <FooterBox />
  </div>
</template>
