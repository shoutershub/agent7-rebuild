<template>
  <div class="h-[75px] relative z-[9999]  border-b border-gray-100">
    <div class="flex justify-between pl-4 pr-4 mt-4">
      <h5 class="text-lg font-bold text-gray-900">
        {{ activeOperator.name }}
      </h5>
      <button>
        <cancel-icon></cancel-icon>
      </button>
    </div>

    <div
      class="flex pb-4 pl-4 pr-4 text-sm font-medium text-gray-400 cursor-pointer item-center hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 hover:text-gray-600"
    >
      Chat on website • alawi.ng Chat on website • alawi.ng
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { activeOperatorInterface } from "../../../types";
import { CancelIcon } from "@/global";
const activeOperator = inject("activeOperator") as activeOperatorInterface;
</script>
