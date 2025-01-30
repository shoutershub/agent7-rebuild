<template>
  <main :class="getDynamicContentSize">
    <left-sidebar-navigation></left-sidebar-navigation>     
    <top-nav-bar/>
    <router-view />
  </main>
</template>


<script setup lang="ts">
import { SideBarStore } from "@/store/SidebarStore/SidebarStore";
import LeftSidebarNavigation from "./components/LeftSidebarNavigation/LeftSidebarNavigation.vue";
import TopNavBar from "@/layouts/default/dashboard/components/TopNavbar/index.vue";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { computed, onMounted, onBeforeUnmount } from "vue";

const sidebarSize = SideBarStore();

const getDynamicContentSize = computed(() => {
  const baseClasses = "dark:bg-gray-900 h-full flex";
  const fullSidebarClass = "ml-[250px]";
  const miniSidebarClass = "ml-[100px]";

  return twMerge(
    classNames(
      baseClasses,
      { [fullSidebarClass]: sidebarSize.getSideBarSize },
      { [miniSidebarClass]: !sidebarSize.getSideBarSize }
    )
  );
});



onMounted(() => {
// Prevent scrolling on body
  // setAttribute("class", "light scroll-smooth group");
  document.body.setAttribute(
    "class",
    "text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800"
  );
  
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
