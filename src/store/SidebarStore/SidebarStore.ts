import { defineStore } from 'pinia';
import { SideBarSize } from './types';
import { useStorage } from '@vueuse/core';

const storageName = import.meta.env.VITE_STORAGE_UTIL_SIDEBAR;

export const SideBarStore = defineStore("sidebar-store", {
  state: () =>
  ({
    isFull: useStorage(storageName, false as SideBarSize)
  }),
  getters: {
    getSideBarSize: (state) => state.isFull,
  },
  actions: {
    setSidebarSize(size: boolean) {
      this.isFull = size
    },
  },
});