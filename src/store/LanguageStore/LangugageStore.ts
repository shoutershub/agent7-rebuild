import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { LanguageTypes } from "./types";
import i18n from "@/plugins/languagePlugin/languagePlugin";
import {defaultLanguage} from "./AvailableLanguages";
const storageName = import.meta.env.VITE_STORAGE_NAME;


export const languageStore = defineStore({
  id: "language",
  state: () => ({
    language: useStorage(storageName, defaultLanguage as LanguageTypes),
  }),
  getters: {
    getCurrentLanguage: (state) => {
      return state.language
    },
  },
  actions: {
    setLanguage(){
      this.language = defaultLanguage;
      i18n.global.locale.value = defaultLanguage.language;
    },
    getLanguage(language: any) {
      this.language = language;
    },
    changeCurrentLanguage(item: any) {
      this.language = item;
      i18n.global.locale.value = item.language.toLocaleLowerCase()
    },
  },
});
