<template>
  <div class="flex w-full mt-[70px] p-4 container-fluid bg-gray-100">
    <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
      <div class="xl:col-span-12">
        <div class="card" id="usersTable">
          <div class="card-body">
            <div class="flex items-center">
              <h6 class="text-15 grow">All team members (200)</h6>
              <div class="shrink-0">
                <sw-button @click="showNewUserModal">
                  <template #prefix>
                    <ri-add-line />
                  </template>
                  Add new user
                </sw-button>
              </div>
            </div>
          </div>
          <div
            class="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500"
          >
            <form action="#" method="GET">
              <label for="users-search" class="sr-only">Search </label>
              <div class="relative mt-1">
                <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
                  <div class="relative xl:col-span-2">
                    <sw-input
                      type="text"
                      name="email"
                      id="users-search"
                      class="bg-white text-gray-900 !border-gray-200 sm:text-sm rounded-lg block w-full"
                      placeholder="Search user"
                      size="sm"
                    >
                      <template #prefix>
                        <div
                          class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
                        >
                          <search-icon></search-icon>
                        </div>
                      </template>
                    </sw-input>
                  </div>
                  <div class="xl:col-span-2">
                    <sw-dropdown
                      button-color="alternative"
                      button-class="border-2 border-custom-500 !focus:none ring-none hover:text-gray-400"
                      :outline="true"
                      :close-inside="false"
                    >
                      <template #title>
                        <button type="button" class="pr-5 text-xs">
                          With Selected
                        </button>
                      </template>
                      <template #default>
                        <div>
                          <sw-input
                            type="search"
                            class="border-gray-100 rounded-none border-1 focus:border-1 focus:border-gray-100 focus:ring-0"
                            size="xs"
                            name="search_terms"
                            autocomplete="off"
                            autocapitalize="none"
                            spellcheck="false"
                            role="textbox"
                            placeholder=""
                          />
                          <div role="listbox">
                            <div
                              class="pl-2 pr-1 py-1.5 text-base text-gray-700 cursor-text bg-gray-100"
                              role="option"
                            >
                              Select Status
                            </div>
                            <div
                              class="pl-2 pr-1 py-1.5 text-base text-gray-900 cursor-pointer hover:bg-gray-100"
                            >
                              Hidden
                            </div>
                            <div
                              class="pl-2 pr-1 py-1.5 text-base text-gray-900 cursor-pointer hover:bg-gray-100"
                            >
                              Rejected
                            </div>
                            <div
                              class="pl-2 pr-1 py-1.5 text-base text-gray-900 cursor-pointer hover:bg-gray-100"
                            >
                              Verified
                            </div>
                            <div
                              class="pl-2 pr-1 py-1.5 text-base text-gray-900 cursor-pointer hover:bg-gray-100"
                            >
                              Waiting
                            </div>
                          </div>
                        </div>
                      </template>
                    </sw-dropdown>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!--end card-->
          <div class="card-body">
            <div class="-mx-5">
              <sw-simple-table
                :config="tableConfig"
                :headerItems="usersListDataHeader"
                :items="displayedLists"
                :trClass="`relative rounded-md after:absolute after:border-l-2 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600`"
                theadClass="text-left bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                paginationClass="px-5"
                @onSelectAll="onSelectAll"
              >
                <template #isActive="{ value }">
                  <sw-simple-checkbox
                    v-model="value.isActive"
                    variant="outlined"
                    class="justify-center !gap-0"
                  />
                </template>
                <template #userId="{ value }">
                  <a
                    href="#!"
                    class="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600 user-id"
                  >
                    {{ value.userId }}
                  </a>
                </template>

                <template #name="{ value }">
                  <div class="flex items-center gap-2">
                    <div
                      class="flex items-center justify-center font-medium rounded-full size-10 shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600"
                    >
                      <img
                        v-if="value.img"
                        :src="value.img"
                        alt=""
                        class="h-10 rounded-full"
                      />
                      <div
                        v-else-if="value.div"
                        class="flex items-center justify-center font-medium rounded-full size-10 shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600"
                      >
                        {{ value.div }}
                      </div>
                    </div>
                    <div class="grow">
                      <h6>
                        <a href="#!" class="name">{{ value.name }}</a>
                      </h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        {{ value.designation }}
                      </p>
                    </div>
                  </div>
                </template>

                <template #status="{ value }">
                  <sw-label
                    v-if="value.status === 'Waiting'"
                    class="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent status"
                  >
                    <sw-spinner class="size-3 mr-1.5" />
                    {{ value.status }}
                  </sw-label>
                  <sw-label
                    v-else-if="value.status === 'Verified'"
                    class="px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent inline-flex items-center status"
                  >
                    <ri-checkbox-circle-line class="size-3 mr-1.5" />
                    {{ value.status }}
                  </sw-label>
                  <sw-label
                    v-else-if="value.status === 'Rejected'"
                    class="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent status"
                  >
                    <RiCloseLine class="size-3 mr-1.5" />
                    {{ value.status }}
                  </sw-label>
                </template>

                <template #action="{}">
                  <sw-list :items="cardAction" @onSelect="onSelect">
                    <template #title>
                      <sw-button
                        class="p-0 !w-[30px] !h-[30px]"
                        color="slate"
                        variant="slate"
                      >
                        <ri-more-line class="mx-auto size-4" />
                      </sw-button>
                    </template>
                    <template #default="{ data }">
                      <span class="flex items-center gap-1">
                        <span class="align-middle">{{ data.title }}</span>
                      </span>
                    </template>
                  </sw-list>
                </template>
              </sw-simple-table>
            </div>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
  </div>

  <sw-modal
    v-if="newUserModalIsActive"
    :notEscapable="false"
    :persistent="false"
    :disabled="sendingInvitationRequest"
    size="lg"
    :onClose="hideNewUserModal"
  >
    <template #header>
      <div class="text-xl font-bold">
        {{ $t("teamMembers.addOrEditModal.title") }}
      </div>
    </template>
    <template #body>
      <!-- Loading Skeleton -->
      <!-- <div v-if="loadingRequest" role="status" class="animate-pulse">
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5"
        ></div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"
        ></div>
        <div class="flex items-center mt-4">
          <svg
            class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
            />
          </svg>
          <div
            class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"
          ></div>
          <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div> -->

      <p class="mb-3 text-sm text-gray-600">
        {{ $t("teamMembers.addOrEditModal.description") }}
      </p>

      <div class="mt-10">
        <div class="grid items-center grid-cols-12 gap-1 mt-5">
          <div class="col-span-12">
            <sw-input
              :placeholder="$t('teamMembers.addOrEditModal.field.name')"
              type="text"
              class="w-auto"
              required
            >
              <template #prefix>
                <ri-user-line class="size-4 text-text-600" />
              </template>
            </sw-input>
          </div>
          <div class="col-span-12 mt-5">
            <sw-simple-select :items="adminRole"></sw-simple-select>
          </div>
          <div class="col-span-12 mt-5">
            <sw-input
              :placeholder="$t('teamMembers.addOrEditModal.field.email')"
              type="text"
              class="w-auto"
              required
            >
              <template #prefix>
                <ri-at-line class="size-4 text-text-600" />
              </template>
            </sw-input>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div
        class="flex flex-row items-center justify-between justify-space-between"
      >
        <div class="flex">
          <sw-button
            class="w-[200px] p-3 mr-5"
            :loading="sendingInvitationRequest"
            :disabled="sendingInvitationRequest"
            @click="sendEmailInvitation"
            >{{ $t("teamMembers.addOrEditModal.button.send") }}</sw-button
          >
        </div>
      </div>
    </template>
  </sw-modal>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import {
  SwInput,
  SwButton,
  SearchIcon,
  SwDropdown,
  SwSimpleTable,
  SwSpinner,
  SwLabel,
  SwList,
  SwModal,
  SwSimpleSelect
} from "@/global";
import { UserListViewData } from "./utils.ts";
import {
  RiAtLine,
  RiUserLine,
  RiAddLine,
  RiCheckboxCircleLine,
  RiCloseLine,
  RiMoreLine,
} from "@remixicon/vue";
import { useRouter } from "vue-router";
import { SwSimpleCheckbox } from "@/global";
const router = useRouter();


const adminRole  = [
  { title: "Select user role", disabled: true},
  { value: "1", title: "One" },
  { value: "2", title: "Two" },
  { value: "3", title: "Three" }
];
const cardAction = [{ title: "Edit user" }, { title: "Delete user" }];
const tableConfig = {
  page: 1,
  itemsPerPage: 10,
};

const isAllChecked = ref(false);
// const defaultChoices = ref<any>(null);

const usersListDataHeader = [
  { value: "isActive", type: "check", align: "center", justifyCenter: true },
  { title: "Name", value: "name" },
  { title: "Permission", value: "permission" },
  { title: "Email", value: "email" },
  { title: "Member since", value: "memberSince" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" },
];

const mappedData = UserListViewData.map((data) => {
  return {
    ...data,
    isActive: false,
  };
});

const displayedLists = ref(mappedData);
const deleteDialog = ref(false);
const createEditDialog = ref(false);

// onMounted(() => {
//   const defaultElement: any = document.querySelector("#choices-single-default");
//   defaultChoices.value = new Choices(defaultElement, {
//     allowHTML: true,
//     searchEnabled: false
//   });
// });

// onBeforeUnmount(() => {
//   defaultChoices.value.destroy();
// });

const onSelectAll = () => {
  isAllChecked.value = !isAllChecked.value;
  displayedLists.value = displayedLists.value.map((data) => {
    return {
      ...data,
      isActive: isAllChecked.value,
    };
  });
};

const onSelect = (data: any) => {
  if (data.title === "Overview") {
    router.push("/pages/account");
  } else if (data.title == "Edit") {
    createEditDialog.value = true;
  } else if (data.title == "Delete") {
    deleteDialog.value = true;
  }
};

const newUserModalIsActive = ref(false);
const sendingInvitationRequest = ref(false);

function showNewUserModal() {
  newUserModalIsActive.value = !newUserModalIsActive.value;
}

function hideNewUserModal() {
  newUserModalIsActive.value = false;
  sendingInvitationRequest.value = false;
}

function sendEmailInvitation() {}
</script>
