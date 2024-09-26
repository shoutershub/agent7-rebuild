<script setup lang="ts">
import { ref } from "vue";
import DynamicSnackbarIcon from "@/components/SwIcons/DynamicSnackbarIcon.vue";
import _ from "lodash";
import "animate.css";
import { ToastType } from "./types";
import { twMerge } from "tailwind-merge";

const showSnackbar = ref<any>(false);
const snackBarMessage = ref();
const snackBarTypeClass = ref();
const snackBarIconColorType = ref();

const colorCodes = {
  success: "#0CA81D",
  danger: "#CB334D",
  warning: "#EDBA13",
  empty: "#8C8C8C",
};

const typeClassesMap: Record<ToastType, string> = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning:
    "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
};

const show = (type: ToastType, message: string): void => {
  showSnackbar.value = true;
  snackBarMessage.value = message;
  snackBarTypeClass.value = twMerge(
    typeClassesMap[type],
    "flex items-center w-full max-w-xs p-4 rounded-lg fixed top-0 right-5 z-10"
  );
  snackBarIconColorType.value = colorCodes[type];
  checkSnackTimer();
};

function checkSnackTimer() {
  setTimeout(() => {
    showSnackbar.value = false;
  }, 5000);
}

defineExpose({
  show,
});
</script>

<template>
  <transition
    enterActiveClass="animate__animated animate__bounce"
    leaveActiveClass="animate__animated animate__backOutRight"
  >
    <div 
      v-if="showSnackbar"
     id="toast-default" :class="snackBarTypeClass" role="alert">
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8"
      >
        <DynamicSnackbarIcon :color="snackBarIconColorType" />
      </div>
      <div class="ms-3 text-sm font-normal" v-text="snackBarMessage"></div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        @click="showSnackbar = false"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>
