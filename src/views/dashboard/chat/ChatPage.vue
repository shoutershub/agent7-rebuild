<template>
  <div>
    <main class="dark:bg-gray-900 ml-[105px] h-full flex">
      <chat-side-bar></chat-side-bar>

      <div>
        <!-- Router view goes here -->
        <div>hello</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, provide } from "vue";
import ChatSideBar from "./components/ChatSideBar.vue";
import ItemsType from "./types";
import { useImageUrl } from "@/utils/helpers";

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl('profile-picture-1.jpg');
const imageUrlEx2 = getImageUrl('profile-picture-2.jpg');
const imageUrlEx3 = getImageUrl('profile-picture-3.jpg');
const imageUrlEx4 = getImageUrl('profile-picture-4.jpg');
const imageUrlEx5 = getImageUrl('profile-picture-5.jpg');

//Todo: remove test data
const items: Ref<ItemsType[]> = ref([
  {
    id: 1,
    name: "Neon Emmanuel",
    email: "neonemmanuel@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 10,
  },
  {
    id: 2,
    name: "Cady Joe",
    email: "neonemmanuel@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Auditor",
    unReadMessages: 0,
  },
  {
    id: 3,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 4,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 5,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx5,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 6,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 7
  },
  {
    id: 7,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 8,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 9,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 1
  },
  {
    id: 10,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx5,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 11,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 13,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
  {
    id: 14,
    name: "Jane Joe The last",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0
  },
]);

provide('items', items)
</script>
