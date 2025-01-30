<template>
  <section
    id="secondary-sidenav"
    class="w-[50%] h-[100vh] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <div class="mt-[70px]">
      <div class="flex flex-col justify-between">
        <header-area></header-area>
        <div>
          <message-list-area></message-list-area>
          <text-area></text-area>
        </div>
      </div>
    </div>
    <!-- <header-area></header-area>
    <div class="flex flex-col justify-between h-[calc(100vh-155px)]">
      <message-list-area></message-list-area>
      <text-area></text-area>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import HeaderArea from "./components/message-header-area/MessageHeaderArea.vue";
import MessageListArea from "./components/message-list-area/MessageListArea.vue";
import TextArea from "./components/text-area/TextArea.vue";
</script>
