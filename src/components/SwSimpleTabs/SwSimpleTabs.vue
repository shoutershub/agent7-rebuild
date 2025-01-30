<template>
  <div>
    

    <div class="bg-white rounded-md shadow-md dark:bg-zink-600">
      <!-- Tabs Navigation -->
      <div class="p-4 border-b border-slate-200 dark:border-zink-500">
        <h5 class="mb-4 text-lg font-bold">
      {{ activeHeader }} <span>(15)</span>
    </h5>
        <ul
          class="flex flex-wrap w-full p-1 mb-2 text-sm font-medium text-center rounded-md filter-btns text-slate-500 bg-slate-100 nav-tabs dark:bg-zink-500 dark:text-zink-200"
        >
          <li class="grow" v-for="tab in tabs" :key="tab.value">
            <button
              @click="setActiveTab(tab.value)"
              role="tab"
              :class="[
                'inline-block nav-link px-1.5 w-full py-1 text-xs transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent',
                activeTab === tab.value
                  ? 'bg-white text-custom-500 dark:bg-zink-600'
                  : 'hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:[&.active]:bg-zink-600',
              ]"
            >
              {{ tab.label }}
            </button>
          </li>
        </ul>
      <slot name="extra"/>

      </div>
      <!-- Tabs Content -->
      <div>
        <slot :name="`tab-content-${activeTab}`">
          <!-- Default content if no slot is provided -->
          <div
            v-for="tab in tabs"
            :key="tab.value"
            v-if="activeTab === tab.value"
          >
            {{ tab.content }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { filter } from "lodash";
import { map } from "lodash";
import { ref, watch } from "vue";

// Define props
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((tab) => tab.value && tab.label);
    },
  },
});

const emit = defineEmits(["update:modelValue"]);
const activeTab = ref(props.modelValue);
const activeHeader = ref("");

watch(
  () => props.modelValue,
  (newValue) => {
    activeTab.value = newValue;
    const matchedTab = props.tabs.find((item) => item.value === newValue);
    if (matchedTab) {
      activeHeader.value = matchedTab.label;
    } else {
      activeHeader.value = ""; 
    }
  },
  { immediate: true }
);

watch(activeTab, (newValue) => {
  const matchedTab = props.tabs.find((item) => item.value === newValue);
  if (matchedTab) {
    activeHeader.value = matchedTab.label; 
  } else {
    activeHeader.value = ""; 
  }
});

const setActiveTab = (value) => {
  activeTab.value = value;
  emit("update:modelValue", value);
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
