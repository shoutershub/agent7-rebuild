<template>
  <aside
    id="sidebar-double"
    :class="getsizeBarSize"
    aria-label="Sidebar"
  >
    <div class="pt-10">
      <img v-if="sidebarSize.getSideBarSize" class="w-[150px] m-auto" src="@/assets/images/logo-light.png" />
      <img v-else  class="w-[28px] m-auto" src="@/assets/images/logo-sm.png"/>
    </div>
    <div
      class="z-30 flex flex-col justify-between h-full px-3 py-5 overflow-y-auto w-30 dark:bg-gray-800 dark:border-gray-700"
    >
      <sw-sidebar-links :navigationLinks="navLinks" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { SwSidebarLinks } from "@/global";
import { navigationLinks } from "../../composables/navigationList";
import { SideBarStore } from "@/store/SidebarStore/SidebarStore";
import { computed } from "vue";
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

const navLinks = navigationLinks.filter((item) => {
  return item.section == "top";
});

const sidebarSize = SideBarStore()

const getsizeBarSize = computed(() => {
  const baseClasses = "flex flex-col z-40 fixed left-0 h-full transition-transform -translate-x-full lg:translate-x-0 border-r bg-white border-gray-200 w-[250px]"
  const miniSidebarClass = "w-[100px]"

  return twMerge(
    classNames(
      baseClasses,
      { [miniSidebarClass]: !sidebarSize.getSideBarSize },
    ),
  )
})


</script>
