<template>
  <div
    class="overflow-y-auto sticky px-3 w-64 h-[100vh] bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between left-0 top-0"
  >
    <div class="mt-[70px]">
      <div>
        <h5 class="p-2 mt-4 mb-2 text-sm font-bold text-gray-900">
          Setup & Customization
        </h5>
        <ul>
          <li v-for="item in widgetNavList">
            <router-link
              :to="{ name: item.routeName }"
              class="flex items-center w-full p-2 text-base font-medium text-gray-600 cursor-pointer whitespace-nowrap dark:text-white hover:text-gray-900"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pt-4 pl-8">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { widgetNavList } from "./types";
import { widgetDataInterFace } from "@/views/dashboard/widget/types";

const data = ref<widgetDataInterFace>({
  propertyId: "c34e1c7e4e0d8bf091f59fc0ef75d800",
  widgetCode:
    '&#x3C;script src="/js/widget.min.js" data-hash="c34e1c7e4e0d8bf091f59fc0ef75d800" data-mode="version-1"&#x3E; &#x3C;/script&#x3E;',
    

  // DOne  
  widgetSettings: {
    theme: [
      {
        id: 1,
        name: "Gray",
        colorCode: "#ccc",
      },
      {
        id: 2,
        name: "Red",
        colorCode: "red",
      },
      {
        id: 2,
        name: "Black",
        colorCode: "#000",
      },
      {
        id: 2,
        name: "Blue",
        colorCode: "blue",
      },
    ],
    activeTheme: {
      id: 1,
      name: "Gray",
      colorCode: "#ccc",
    },
  },
  themeText: {
    data: [
      {
        id: 1,
        value: "Question ? chat with us",
      },
      {
        id: 2,
        value: "2 Question ? chat with us ",
      },
    ],
    active: {
      id: 1,
      value: "Question ? chat with us",
    },
  },
  wellcomeMessage: {
    data: [
      {
        id: 1,
        value: "Sample 1",
      },
      {
        id: 2,
        value: "Sample Question 334 ",
      },
    ],
    active: {
      id: 1,
      value: "Sample 1",
    },
  },
  backgroundImage: {
    data: [
      {
        id: 1,
        name: "Background 1",
        src: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Background 2",
        src: "https://picsum.photos/200",
      },
      {
        id: 3,
        name: "Background 2",
        src: "https://picsum.photos/200",
      },
    ],
    active: {
      id: 3,
      name: "Background 3",
      src: "https://picsum.photos/200",
    },
  },
  visibility: {
    reverseChatBoxPosition: true,
    showOnDesktop: true,
    showOnTablet: true,
    showOnMobile: false,
    showRepProfileImage: true,
  },
  behavior: {
    hideIfAway: false,
    askForEmail: true,
    askForPhone: true,
    forceVisitorIdentity: false,
    enableMediaUpload: false,
    showReadReceipts: false,
    deleteChatHistoryAfterOneDay: false,
    showVisitorMessageRealTime: false,
  },
  security: {
    lockDomain: false,
  },
  countries: [
    {
      name: "Afghanistan",
      code: "AF",
    },
    {
      name: "Aland Islands",
      code: "AX",
    },
    {
      name: "Albania",
      code: "AL",
    },
    {
      name: "Algeria",
      code: "DZ",
    },
    {
      name: "American Samoa",
      code: "AS",
    },
    {
      name: "Andorra",
      code: "AD",
    },
    {
      name: "Angola",
      code: "AO",
    },
    {
      name: "Anguilla",
      code: "AI",
    },
  ],
  restricted: {
    restrictedCountries: ["AF", "DZ"],
    allowedCountries: ["AX", "AS"],
    restrictedPages: [],
    restrictedIP: []
  },
});

provide("data", data);
</script>
