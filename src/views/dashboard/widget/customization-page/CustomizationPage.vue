<template>
  <div class="mt-[76px]">
    <div>
      <h2 class="text-xl font-bold">Customization</h2>

      <div class="mt-12">
        <h2 class="text-base font-bold">Customize Widget</h2>
        <p class="mt-2 text-sm text-gray-500">
          Customize the look and feel of your widget to match your brand
        </p>
      </div>
    </div>
    <div class="mt-12 w-[600px]">

      <sw-accordion :openFirstItem="false">
        <sw-accordion-panel>
          <chatbox-appearance></chatbox-appearance>
        </sw-accordion-panel>
        <sw-accordion-panel>
          <chatbox-visibility></chatbox-visibility>
        </sw-accordion-panel>
        <sw-accordion-panel>
          <chatbox-behaviour></chatbox-behaviour>
        </sw-accordion-panel>
        <sw-accordion-panel>
          <chatbox-restrictions></chatbox-restrictions>
        </sw-accordion-panel>
        <sw-accordion-panel>
          <chatbox-security></chatbox-security>
        </sw-accordion-panel>
      </sw-accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SwAccordion, SwAccordionPanel } from "@/global";
import ChatboxAppearance from "./components/ChatboxAppearance.vue";
import ChatboxVisibility from "./components/ChatboxVisibility.vue";
import ChatboxBehaviour from "./components/ChatboxBehaviour.vue";
import ChatboxRestrictions from "./components/ChatboxRestrictions.vue";
import ChatboxSecurity from "./components/ChatboxSecurity.vue";
</script>
