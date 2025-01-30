<template>
  <nav class="fixed bg-white left-0 z-10 w-full border-b-2 h-[70px]">
    <div class="flex mx-auto">
      <div class="w-full mr-5">
        <ul
          class="flex flex-col justify-end items-center h-[70px] w-full mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <sw-translator
              button-class="px-0 py-0 border-none"
              buttonColor="transparent"
              :show-name-in-dropdown="true"
              :show-arrow="false"
              position="sidebar"
            />
          </li>
          <li>
            <sw-dropdown
              buttonclass="flex text-sm !py-0 !px-0 rounded-full !hover:bg-transparent hover:text-custom-500"
              button-color="transparent"
              :show-drop-down-arrow="false"
              :closeInside="true"
              placement="bottom-start"
            >
              <template #title>
                <ri-sun-line class="w-5 h-5" />
              </template>
              <template #default>
                <div id="user-dropdown">
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white"
                      >Bonnie Green</span
                    >
                    <span
                      class="block text-sm text-gray-500 truncate dark:text-gray-400"
                      >name@flowbite.com</span
                    >
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </template>
            </sw-dropdown>
          </li>
          <li>
            <sw-dropdown
              buttonclass="flex text-sm !py-0 !px-0 rounded-full !hover:bg-transparent hover:text-custom-500"
              button-color="transparent"
              :show-drop-down-arrow="false"
              :closeInside="true"
              placement="bottom-start"
            >
              <template #title>
                <ri-notification-line class="w-5 h-5" />
              </template>
              <template #default>
                <div>
                    <div
                  class="flex flex-col gap-1 w-[400px]"
                  id="notification-list"
                >
                  <h6 class="p-4 text-16">
                    Notifications
                    <span
                      class="inline-flex items-center justify-center w-5 h-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-orange-500 border-orange-500"
                      >15</span
                    >
                  </h6>
                  <div>
                    <PerfectScrollbar ref="scrollbar" class="h-[350px]">
                      <a
                        href="#!"
                        class="flex gap-3 p-4 overflow-hidden product-item hover:bg-slate-50 dark:hover:bg-zink-500 follower"
                      >
                        <div class="w-10 h-10 rounded-md shrink-0 bg-slate-100">
                          <img
                            src="./assets/images/avatar-3.png"
                            alt=""
                            class="rounded-md"
                          />
                        </div>
                        <div class="grow">
                          <h6 class="mb-1 font-medium">
                            <b>@willie_passem</b> followed you
                          </h6>
                          <p
                            class="mb-0 text-xs text-slate-500 dark:text-zink-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="clock"
                              class="lucide lucide-clock inline-block w-3.5 h-3.5 mr-1"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span class="align-middle">Wednesday 03:42 PM</span>
                          </p>
                        </div>
                        <div
                          class="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300"
                        >
                          <div
                            class="w-1.5 h-1.5 bg-custom-500 rounded-full"
                          ></div>
                          4 sec
                        </div>
                      </a>
                      <a
                        href="#!"
                        class="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 mention"
                      >
                        <div
                          class="w-10 h-10 bg-yellow-100 rounded-md shrink-0"
                        >
                          <img
                            src="./assets/images/avatar-5.png"
                            alt=""
                            class="rounded-md"
                          />
                        </div>
                        <div class="grow">
                          <h6 class="mb-1 font-medium">
                            <b>@caroline_jessica</b> commented on your post
                          </h6>
                          <p
                            class="mb-3 text-xs text-slate-500 dark:text-zink-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="clock"
                              class="lucide lucide-clock inline-block w-3.5 h-3.5 mr-1"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span class="align-middle">Wednesday 03:42 PM</span>
                          </p>
                          <div
                            class="p-2 text-xs rounded bg-slate-100 text-slate-500 dark:bg-zink-500 dark:text-zink-300"
                          >
                            Amazing! Fast, to the point, professional and really
                            amazing to work with them!!!
                          </div>
                        </div>
                        <div
                          class="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300"
                        >
                          <div
                            class="w-1.5 h-1.5 bg-custom-500 rounded-full"
                          ></div>
                          15 min
                        </div>
                      </a>
                      <a
                        href="#!"
                        class="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 invite"
                      >
                        <div
                          class="flex items-center justify-center w-10 h-10 bg-red-100 rounded-md shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            data-lucide="shopping-bag"
                            class="w-5 h-5 text-red-500 lucide lucide-shopping-bag fill-red-200"
                          >
                            <path
                              d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                            ></path>
                            <path d="M3 6h18"></path>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                        </div>
                        <div class="grow">
                          <h6 class="mb-1 font-medium">
                            Successfully purchased a business plan for
                            <span class="text-red-500">$199.99</span>
                          </h6>
                          <p
                            class="mb-0 text-xs text-slate-500 dark:text-zink-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="clock"
                              class="lucide lucide-clock inline-block w-3.5 h-3.5 mr-1"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span class="align-middle">Monday 11:26 AM</span>
                          </p>
                        </div>
                        <div
                          class="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300"
                        >
                          <div
                            class="w-1.5 h-1.5 bg-custom-500 rounded-full"
                          ></div>
                          Yesterday
                        </div>
                      </a>
                      <a
                        href="#!"
                        class="flex gap-3 p-4 product-item hover:bg-slate-50 dark:hover:bg-zink-500 mention"
                      >
                        <div class="relative shrink-0">
                          <div class="w-10 h-10 bg-pink-100 rounded-md">
                            <img
                              src="./assets/images/avatar-7.png"
                              alt=""
                              class="rounded-md"
                            />
                          </div>
                          <div
                            class="absolute text-orange-500 -bottom-0.5 -right-0.5 text-16"
                          >
                            <i class="ri-heart-fill"></i>
                          </div>
                        </div>
                        <div class="grow">
                          <h6 class="mb-1 font-medium">
                            <b>@scott</b> liked your post
                          </h6>
                          <p
                            class="mb-0 text-xs text-slate-500 dark:text-zink-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="clock"
                              class="lucide lucide-clock inline-block w-3.5 h-3.5 mr-1"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span class="align-middle">Thursday 06:59 AM</span>
                          </p>
                        </div>
                        <div
                          class="flex items-center self-start gap-2 text-xs text-slate-500 shrink-0 dark:text-zink-300"
                        >
                          <div
                            class="w-1.5 h-1.5 bg-custom-500 rounded-full"
                          ></div>
                          1 Week
                        </div>
                      </a>
                    </PerfectScrollbar>
                  </div>
                </div>
                <div
                  class="flex items-center gap-2 p-4 border-t border-slate-200 dark:border-zink-500"
                >
                  <div class="grow">
                    <a class="text-base" href="#!">Manage Notification</a>
                  </div>
                  <div class="shrink-0">
                    <sw-button
                      type="button"
                      class="px-2 py-1.5 rounded-md text-xs text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100"
                    >
                      View All Notification
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="move-right"
                        class="lucide lucide-move-right inline-block w-3.5 h-3.5 ml-1"
                      >
                        <path d="M18 8L22 12L18 16"></path>
                        <path d="M2 12H22"></path>
                      </svg>
                    </sw-button>
                  </div>
                </div>
                </div>
              </template>
            </sw-dropdown>
          </li>

          <li>
            <sw-dropdown
              buttonclass="flex text-sm !py-0 !px-0 rounded-full focus:ring-4 focus:ring-gray-300 "
              button-color="transparent"
              :show-drop-down-arrow="false"
              :closeInside="true"
              placement="bottom-start"
            >
              <template #title>
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </template>
              <template #default>
                <div class="p-4 w-[330px]">
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="flex group flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5"
                      >
                        <div
                          class="flex items-center justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-user-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-sm text-text-600 group-hover:text-custom-500"
                          >
                            Profile
                          </div>
                          <span
                            class="text-xs text-text-400 group-hover:text-custom-500"
                            >Change profile name, password etc.</span
                          >
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex group flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5"
                      >
                        <div
                          class="flex items-center justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-settings-5-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-sm text-text-600 group-hover:text-custom-500"
                          >
                            Account settings
                          </div>
                          <span
                            class="text-xs text-text-400 group-hover:text-custom-500"
                            >Customize widget, change widget color etc.</span
                          >
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex group flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5"
                      >
                        <div
                          class="flex items-center justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-user-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-sm text-text-600 group-hover:text-custom-500"
                          >
                            Support
                          </div>
                          <span
                            class="text-xs text-text-400 group-hover:text-custom-500"
                            >Trouble using the platform ? Leave a message
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex group flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5"
                      >
                        <div
                          class="flex items-center group-hover:text-custom-500 justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-user-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-sm text-text-600 group-hover:text-custom-500"
                          >
                            Faq
                          </div>
                          <span
                            class="text-xs text-text-400 group-hover:text-custom-500"
                            >How to implement the property code ?
                          </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5 opacity-50"
                      >
                        <div
                          class="flex items-center justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-user-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div class="text-sm text-text-600">
                            <span class="line-through">Billing</span>
                            <span>Free for all</span>
                          </div>
                          <span class="text-xs text-text-400"
                            >Free for all (<a class="text-custom-500" href="#"
                              >see why</a
                            >)
                          </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="flex flex-row items-center border-b border-dashed border-b-gray-100 pb-2.5 mb-2.5"
                      >
                        <div
                          class="flex items-center justify-center w-[40px] h-[40px] mr-3 bg-custom-100 rounded-md"
                        >
                          <ri-logout-box-r-line
                            class="w-[20px] h-[20px] text-custom-500"
                          />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-sm text-text-600 group-hover:text-custom-500"
                          >
                            Sign Out
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </template>
            </sw-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { SwDropdown } from "@/global";
import {
  RiNotificationLine,
  RiSunLine,
  RiUserLine,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "@remixicon/vue";

import { SwTranslator, SwButton } from "@/global";
</script>
