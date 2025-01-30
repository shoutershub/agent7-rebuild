<template>
  <sw-dropdown
    :buttonclass="buttonClass"
    placement="top"
    :buttonColor="buttonColor"
    :closeInside="true"
    :show-drop-down-arrow="props.showArrow"
  >
    <template #title>
      <div>
        <flag
          class="w-5 h-5 bg-cover rounded-full lead-0"
          :iso="defaultLanguage.flag"
          v-bind:squared="false"
        />
        <span v-if="props.position == 'default'">{{
          defaultLanguage.title
        }}</span>
      </div>
    </template>
    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[133px] dark:bg-gray-700"
    >
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li
          class="flex items-center pt-2 pb-2 rounded cursor-pointer hover:bg-slate-100"
          v-for="entry in availableLanguages"
          @click="changeLanguageOption(entry)"
        >
          <flag
            class="w-5 h-5 ml-3 mr-2 bg-cover rounded-full lead-0"
            :iso="entry.flag"
            v-bind:squared="false"
          />
          <div
            v-if="showNameInDropdown"
            class="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {{ entry.title }}
          </div>
        </li>
      </ul>
    </div>
  </sw-dropdown>
</template>

<script setup lang="ts">
import { SwDropdown } from "@/global";
import { computed } from "vue";
import { availableLanguages } from "@/store/LanguageStore/AvailableLanguages";
import { languageStore } from "@/store/LanguageStore/LangugageStore";
import { LanguageTypes } from "@/store/LanguageStore/types";
import { TranslatorPositionType } from "./types";
import { ButtonVariant } from "../SwButton/types";

const languageOption = languageStore();

function changeLanguageOption(option: LanguageTypes) {
  languageOption.changeCurrentLanguage(option);
}

const defaultLanguage = computed(() => {
  return languageOption.getCurrentLanguage;
});

interface TranslatorProps {
  position?: TranslatorPositionType;
  showArrow?: boolean;
  showNameInDropdown?: boolean;
  buttonColor?: ButtonVariant;
  buttonClass?: string
}

const props = withDefaults(defineProps<TranslatorProps>(), {
  position: "default",
  showArrow: true,
  showNameInDropdown: true,
  buttonColor: "alternative",
  buttonClass: ""
});
</script>

<style scoped>
.fi {
  line-height: 1.9;
}
</style>