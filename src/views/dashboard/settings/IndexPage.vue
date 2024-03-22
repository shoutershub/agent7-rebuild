<template>
  <div>
    <main class="dark:bg-gray-900 ml-[105px] h-full flex">
      <div
        id="secondary-sidenav"
        class="overflow-y-auto sticky px-3 w-64 h-[100ch] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
      >
        <h5 class="text-sm font-medium uppercase text-gray-500 p-2 mt-4 mb-3">
          Settings
        </h5>
        <ul>
          <li v-for="item in settingsNavList">
            <router-link
            :to="{name: item.routeName}"
              class="flex items-center p-2 w-full text-base font-medium text-gray-500 rounded-lg transition whitespace-nowrap dark:text-white hover:text-gray-900 cursor-pointer"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <!-- Router view goes here -->
        <div>hello</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
type settingsNavListType = {
  name: string;
  routeName: string;
};

const settingsNavList: settingsNavListType[] = [
  {
    name: "General Settings",
    routeName: "dashboard.settings",
  },
  {
    name: "Account Settings",
    routeName: "dashboard.settings",
  },
  {
    name: "Widget Settings",
    routeName: "dashboard.settings",
  },
  {
    name: "Helpdesk Settings",
    routeName: "dashboard.settings",
  },
];
</script>
