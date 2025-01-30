<template>
  <section
    class="w-[25%] h-[100vh]  border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <div class="mt-[70px]">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <SwSimpleTabs @update:modelValue="updateActiveTab" v-model:modelValue="activeTab" :tabs="tabs">
          <template #extra>
            <sidebar-search :placeholder="getPlaceholder" :type="activeTab"></sidebar-search>
          </template>
          <template #tab-content-conversation>
            <all-conversation-list/>
          </template>
          <template #tab-content-assigned>
            <assigned-list/>
          </template>
        </SwSimpleTabs>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import AllConversationList from "./components/all-conversation-list/AllConversationList.vue";
import AssignedList from "./components/assigned-list/AssignedList.vue";
import SidebarSearch from "./components/sidebar-search/SidebarSearch.vue";
import { SwSimpleTabs } from "@/global";

const activeTab = ref("conversation"); 
const tabs = [
  {
    value: "conversation",
    label: "All Conversation",
  },
  { value: "assigned", label: "Assigned to me" },
];

const getPlaceholder = computed(() => {
  return "Search " + activeTab.value
})

function updateActiveTab(event: any){
  activeTab.value = event
}
</script>
