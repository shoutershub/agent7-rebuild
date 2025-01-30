<template>
    <div
        class="z-30 flex flex-col justify-between h-full px-3 py-5 overflow-y-auto w-30 dark:bg-gray-800 dark:border-gray-700"
      >
        <ul class="space-y-2">
          <template
            v-for="(navCategory, index) in navigationLinks"
            :key="index"
          >
            <li
            v-if="sidebarSize.getSideBarSize"
              class="text-slate-400 uppercase font-medium text-[11px] cursor-default inline-block mt-5 mb-2"
            >
              <span>{{ navCategory.category }}</span>
            </li>
  
            <li v-for="(item, index) in navCategory.items" :key="index">
              <router-link
                :to="{ name: item.routeName }"
                :class="linkWrapperClass(item.routeName)"
              >
                <span
                 :class="linkInnerClass(item.routeName)"
                >
                  <component size="18px" :is="item.icon" />
                </span>
                <span v-if="sidebarSize.getSideBarSize"
                  :class="linkTextClass(item.routeName)"
                >
                  {{ item.name }}
                </span>
              </router-link>
            </li>
        </template>
        </ul>
  
        <ul class="z-20 justify-center w-full text-center dark:bg-gray-800">
          <li>
            <sw-button @click="minimizeSidebar" color="none" buttonClass="text-slate-400" size="sm">
                <RiSkipLeftLine  v-if="sidebarSize.getSideBarSize" class="hover:text-custom-500"/>
                <RiSkipRightLine v-else  class="hover:text-custom-500"/>
            </sw-button>
          </li>
        </ul>
      </div>
  </template>
<script setup lang="ts">
  import {defineProps, } from "vue";
  import { SwButton } from "@/global";
  import { RiSkipLeftLine, RiSkipRightLine } from "@remixicon/vue";
  import { SideBarStore } from "@/store/SidebarStore/SidebarStore";
  
  import {NavigationTypes} from "./types"
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { RouteRecordNameGeneric, useRoute } from "vue-router";

  defineProps({
    navigationLinks: {
      type: Array<NavigationTypes>,
      required: true,
    },
  });

  const sidebarSize = SideBarStore()

  const minimizeSidebar = () => {
    sidebarSize.setSidebarSize(!sidebarSize.getSideBarSize)
  }

  const route = useRoute();
  const linkWrapperClass = (routeName: RouteRecordNameGeneric) => {
    const linkWrapperBaseClass = "flex items-center p-2 text-base font-normal transition-all duration-300 ease-in-out rounded-lg group";
    const miniVariantClass = "justify-center";
    const activeLinkClass = "bg-custom-50";
    const inactiveLinkClass = "text-slate-600 dark:text-white hover:bg-custom-50 group-hover:text-custom-500";
    return twMerge( classNames(
        linkWrapperBaseClass,
      { 
        [miniVariantClass]: !sidebarSize.getSideBarSize,
        [activeLinkClass]: routeName == route.name,
        [inactiveLinkClass]: routeName != route.name 
      },

    ))
  }

  const linkInnerClass = (routeName: RouteRecordNameGeneric) => {
    const linkWrapperBaseClass = "transition-all duration-300 ease-in-out";
    const activeLinkClass = "text-custom-500";
    const inactiveLinkClass = "text-slate-600 dark:text-white group-hover:text-custom-500";
    return twMerge( classNames(
        linkWrapperBaseClass,
      { 
        [activeLinkClass]: routeName == route.name,
        [inactiveLinkClass]: routeName != route.name 
      },

    ))
  }

  const linkTextClass = (routeName: RouteRecordNameGeneric) => {
    const linkWrapperBaseClass = "ml-3 text-sm transition-all duration-300 ease-in-out"
    const activeLinkClass = "text-custom-500";
    const inactiveLinkClass = "text-slate-600 dark:text-white group-hover:text-custom-500"
    return twMerge( classNames(
        linkWrapperBaseClass,
      { 
        [activeLinkClass]: routeName == route.name,
        [inactiveLinkClass]: routeName != route.name 
      },

    ))
  }

  </script>
  