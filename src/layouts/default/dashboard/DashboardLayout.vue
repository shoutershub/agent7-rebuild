<template>
  <left-sidebar-navigation></left-sidebar-navigation>
  <router-view></router-view>
  <!-- <right-sidebar-navigation></right-sidebar-navigation> -->
</template>

<script setup lang="ts">
// import { onMounted } from "vue";

import LeftSidebarNavigation from "./components/LeftSidebarNavigation/LeftSidebarNavigation.vue";
// import { useRoute } from "vue-router";
// // import RightSidebarNavigation from './components/RightSidebarNavigation/RightSidebarNavigation.vue';

// const route = useRoute();
// onMounted(() => {
//   if ("groupName" in route.meta) {
//   }
// });
</script>
