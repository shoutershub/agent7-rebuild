<template>
  <perfect-scrollbar v-once class="scrollarea">
    <div>
      <ul class="flex flex-col gap-1" id="chatList">
        <li class="px-5">
          <p
            class="text-slate-400 uppercase font-medium text-[11px] cursor-default inline-block mt-5 mb-2"
          >
            Recent Chats
          </p>
        </li>
        <transition-group name="fade" tag="div">
          <li
            class="cursor-pointer select-none"
            v-for="(item) in conversationList.recentChats"
            :key="item.id"
          >
            <div
              @click="openMessage(item, 'recent')"
              :class="getConversationWrapperClass(item)"
            >
              <div
                class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 dark:text-zink-200 size-9 bg-slate-100 dark:bg-zink-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H7Z"></path></svg>
                <span
                  class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-white dark:border-zink-700 rounded-full group-[.online]/item:bg-green-400 group-[.offline]/item:bg-slate-400 dark:group-[.offline]/item:bg-zink-500 bg-red-500"
                ></span>
              </div>
              <div class="overflow-hidden grow">
                <h6 class="mb-1">{{ item.name }}</h6>
                <p class="text-xs truncate text-slate-500 dark:text-zink-200">
                  {{ item.lastMessage }}
                </p>
              </div>
              <div class="self-start shrink-0 text-slate-500 dark:text-zink-200">
                <small>{{ item.lastMessageTime }}</small>
              </div>
            </div>
          </li>
        </transition-group>
        <li class="px-5">
          <p
            class="text-slate-400 uppercase font-medium text-[11px] cursor-default inline-block mt-5 mb-2"
          >
            Previous Chats
          </p>
        </li>
        <transition-group name="fade" tag="div">
          <li
            class="cursor-pointer select-none"
            v-for="(item) in conversationList.otherConversation"
            :key="item.id"
          >
            <div
              @click="openMessage(item, 'others')"
              :class="getConversationWrapperClass(item)"
            >
              <div
                class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 dark:text-zink-200 size-9 bg-slate-100 dark:bg-zink-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H7Z"></path></svg>
                <span
                  class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-white dark:border-zink-700 rounded-full group-[.online]/item:bg-green-400 group-[.offline]/item:bg-slate-400 dark:group-[.offline]/item:bg-zink-500 bg-red-500"
                ></span>
              </div>
              <div class="overflow-hidden grow">
                <h6 class="mb-1">{{ item.name }}</h6>
                <p class="text-xs truncate text-slate-500 dark:text-zink-200">
                  {{ item.lastMessage }}
                </p>
              </div>
              <div class="self-start shrink-0 text-slate-500 dark:text-zink-200">
                <small>{{ item.lastMessageTime }}</small>
              </div>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
import { Ref, inject, ref, computed } from "vue";
import ItemsType from "../../types";
import {
  ConversationInterface,
  ConversationSource,
  GenericChatInterface,
} from "./types";

import { twMerge } from "tailwind-merge";
import classNames from "classnames";

const emit = defineEmits(["click:open-chat"]);
 
const activeItemId = ref("1");

function openMessage(item: ItemsType, source: ConversationSource) {
  console.log(item);
  toggleActiveClassBetweenList(item, source);
  activeItemId.value = item.id; 
  emit("click:open-chat", item);
}

function toggleActiveClassBetweenList(activeConversation: ItemsType, source: ConversationSource) {
  const { recentChats, otherConversation } = conversationList;

  const deactivateAll = (items: ItemsType[]) => {
    items.forEach((item) => (item.isActive = false));
  };

  deactivateAll(recentChats);
  deactivateAll(otherConversation);

  const targetList = source === "recent" ? recentChats : otherConversation;

  const targetItem = targetList.find((item) => item.id === activeConversation.id);
  if (targetItem) {
    targetItem.isActive = true;
  }
}

const conversationList: ConversationInterface = {
  recentChats: [
    {
      id: "1",
      name: "Marie Prohaska",
      avatar: "/avatars/marie.png",
      lastMessage: "I will purchase it for support",
      lastMessageTime: "2 min ago",
      isOnline: true,
    },
    {
      id: "2",
      name: "Kara Miller",
      avatar: "/avatars/kara.png",
      lastMessage: "Hey, how's it going?",
      lastMessageTime: "02:57 PM",
      isOnline: false,
    },
    {
      id: "3",
      name: "Mark Walton",
      avatar: "/avatars/mark.png",
      lastMessage: "Hey, how's it going?",
      lastMessageTime: "Yesterday",
      isOnline: true,
    },
    {
      id: "7",
      name: "John Doe",
      avatar: "/avatars/john.png",
      lastMessage: "Let's catch up soon!",
      lastMessageTime: "10 min ago",
      isOnline: true,
    },
    {
      id: "8",
      name: "Jane Smith",
      avatar: "/avatars/jane.png",
      lastMessage: "I'll send you the details.",
      lastMessageTime: "1 hour ago",
      isOnline: false,
    },
  ],
  otherConversation: [
    {
      id: "4",
      name: "Aurore Maggio",
      avatar: "/avatars/aurore.png",
      lastMessage: "Let's discuss the project.",
      lastMessageTime: "1 Year ago",
      isOnline: false,
    },
    {
      id: "5",
      name: "Mark Walton",
      avatar: "/avatars/mark.png",
      lastMessage: "Here's the updated design.",
      lastMessageTime: "7 months ago",
      isOnline: false,
    },
    {
      id: "6",
      name: "Daniel Miller",
      avatar: "/avatars/daniel.png",
      lastMessage: "I'll fix the bug soon.",
      lastMessageTime: "2 months ago",
      isOnline: false,
    },
    {
      id: "9",
      name: "Emily Johnson",
      avatar: "/avatars/emily.png",
      lastMessage: "Thanks for the help!",
      lastMessageTime: "3 weeks ago",
      isOnline: true,
    },
    {
      id: "10",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "11",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "12",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "13",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "14",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "15",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "16",
      name: "Chris Brown",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
    {
      id: "17",
      name: "Chris Brey Lasty",
      avatar: "/avatars/chris.png",
      lastMessage: "Let's meet tomorrow.",
      lastMessageTime: "1 month ago",
      isOnline: false,
    },
  ],
};

const getConversationWrapperClass = computed(() => (item: GenericChatInterface) => {
  const defaultWrapperClass =
    "flex items-center gap-3 px-5 py-2 group/item [&.active]:bg-slate-50 dark:[&.active]:bg-zink-600";
  const activeClass = "active";
  const isOnlineClass = "online";

  return twMerge(
    defaultWrapperClass,
    classNames({
      [activeClass]: item.id === activeItemId.value,
      [isOnlineClass]: item.isOnline,
    })
  );
});
</script>

<style scoped>
.scrollarea {
  position: relative;
  height: calc(100vh - 240px); /* or max-height: 400px; */
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>