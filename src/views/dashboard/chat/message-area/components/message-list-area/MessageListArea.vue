<template>
  <div>
    <PerfectScrollbar
      :options="{ suppressScrollX: true }"
      ref="scrollbar"
      class="w-full scrollarea"
    >
      <!-- Loop through each time group -->
      <div v-for="(timeGroup, timeIndex) in groupedMessages" :key="timeIndex">
        <!-- Display the timestamp for the group -->
        <div
          class="my-2 text-center text-slate-400 uppercase font-medium text-[11px] cursor-default mt-5 mb-2"
        >
          {{ formatTimestamp(timeGroup.timestamp) }}
        </div>

        <!-- Loop through each user group within the time group -->
        <div
          v-for="(userGroup, userIndex) in timeGroup.userGroups"
          :key="userIndex"
          :class="activeOperatorClass(userGroup.userId)"
        >
          <!-- Avatar -->
          <div class="ml-2 mr-4">
            <img
              class="w-[30px] h-[30px] max-w-[30px] rounded-full"
              :src="userGroup.avatar"
            />
          </div>

          <!-- User name and messages -->
          <div class="flex flex-col">
            <!-- User name and timestamp -->
            <div class="flex items-center">
              <div :class="activeOperatorNameClass(userGroup.userId)">
                {{ userGroup.name }}
              </div>
            </div>

            <!-- Loop through each message from the user -->
            <div
              v-for="(message, msgIndex) in userGroup.messages"
              :key="msgIndex"
            >
              <div v-if="message.isDeleted">
                <div class="text-sm italic">Message removed</div>
              </div>
              <div v-else>
                <div v-if="message.type == 'image'" class="text-gray-900">
                  <div class="mt-4" @click="enlargeImage(message.content)">
                    <img
                      class="object-cover object-center rounded-md"
                      :src="message.content"
                      :alt="message.content"
                      width="150px"
                      height="150px"
                    />
                  </div>
                </div>
                <div v-else class="text-sm text-gray-900">
                  <div>
                    {{ message.content }}
                  </div>
                  <div class="text-[12px] text-gray-500 mt-1 mb-2 flex align-middle">
                    <div>
                      {{ formatTimestamp(userGroup.timestamp) }}
                    </div>
                    <div>
                      <span
                        v-if="
                          message.userId == activeOperator.userId &&
                          !message.isDeleted
                        "
                        @click="deleteChatRecord(message.id)"
                        class="invisible w-auto p-0 ml-2 cursor-pointer group-hover/message-items:visible"
                      >
                        <span class="text-xs text-red-400 hover:text-red-700"
                          >Delete</span
                        >
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Delete button -->
            </div>
          </div>
        </div>
      </div>
    </PerfectScrollbar>

    <!-- Image preview modal -->
    <sw-modal
      v-on:close="closeImagePreviewModal"
      size="full"
      class="!p-0"
      v-if="imageModalIsActivate"
    >
      <template #body>
        <div
          class="flex h-full flex-col justify-between m-auto w-[600px] text-center"
        >
          <div class="mt-20">
            <img class="w-[300px] m-auto" :src="activateImageUrl" />
          </div>
          <div class="mt-40 text-center">
            <sw-button class="w-auto" color="gray">
              <div class="flex">
                <div class="mr-2 align-baseline">
                  <download-icon class="w-[20px] h-[20px]" />
                </div>
                <div>Download</div>
              </div>
            </sw-button>
          </div>
        </div>
      </template>
    </sw-modal>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, computed } from "vue";
import { SwButton, SwModal } from "@/global";
import { initDropdowns } from "flowbite";
import { activeOperatorInterface } from "../../../types";

// Sample data
const sampleChat = ref({
  participants: ["User1", "User2"],
  messages: [
    {
      id: 1,
      userId: 2,
      name: "User2",
      avatar: "user2.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T11:06:00Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 2,
      userId: 1,
      name: "User1",
      avatar: "user1.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:29Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 3,
      userId: 1,
      name: "User1",
      avatar: "user1.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:30Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 4,
      userId: 1,
      name: "User1",
      avatar: "user1.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:31Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 5,
      userId: 2,
      name: "User2",
      avatar: "user2.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:32Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 6,
      userId: 2,
      name: "User2",
      avatar: "user2.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:33Z",
      type: "text",
      isDeleted: false,
    },
    {
      id: 7,
      userId: 2,
      name: "User2",
      avatar: "user2.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:17:31Z",
      type: "text",
      isDeleted: false,
    },
  ],
});

const activeOperator = ref({
  userId: 1, // Example: Set the active operator to User1
  name: "User1",
  avatar: "user1.jpg",
});

const scrollbar = ref();

onMounted(() => {
  updateMessageAreaScrollBar();
  initDropdowns();
});

// Group messages by time and user
const groupedMessages = computed(() => {
  const groups = [];
  let currentTimeGroup = null;

  sampleChat.value.messages.forEach((message) => {
    const messageTime = new Date(message.timestamp);
    const timeKey = messageTime.toISOString().slice(0, 16); // Group by minute

    // Create a new time group if necessary
    if (!currentTimeGroup || currentTimeGroup.timestamp !== timeKey) {
      currentTimeGroup = {
        timestamp: timeKey,
        userGroups: [],
      };
      groups.push(currentTimeGroup);
    }

    // Find or create a user group within the time group
    let userGroup = currentTimeGroup.userGroups.find(
      (group) => group.userId === message.userId
    );
    if (!userGroup) {
      userGroup = {
        userId: message.userId,
        name: message.name,
        avatar: message.avatar,
        timestamp: message.timestamp,
        messages: [],
      };
      currentTimeGroup.userGroups.push(userGroup);
    }

    // Add the message to the user group
    userGroup.messages.push(message);
  });

  return groups;
});

// Format timestamp for display
const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
};

// Delete a message
function deleteChatRecord(messageId: number) {
  sampleChat.value.messages = sampleChat.value.messages.map((item) => {
    if (item.id === messageId) {
      item.isDeleted = true;
    }
    return item;
  });
  nextTick(() => {
    scrollbar.value.ps.update();
  });
}

const activateImageUrl = ref("");
const imageModalIsActivate = ref(false);

function enlargeImage(imageUrl: string) {
  activateImageUrl.value = imageUrl;
  imageModalIsActivate.value = true;
}

function closeImagePreviewModal() {
  imageModalIsActivate.value = false;
}

function updateMessageAreaScrollBar() {
  nextTick(() => {
    scrollbar.value.ps.element.scrollTop =
      scrollbar.value.ps.element.scrollHeight;
    scrollbar.value.ps.update();
  });
}

// Define activeOperatorClass and activeOperatorNameClass
const activeOperatorClass = (userId: number) => {
  const defaultClass = "flex flex-row px-5 pt-5 pb-5 group/message-items";
  return activeOperator.value.userId == userId
    ? `${defaultClass} border-l border-l-2 border-primary-500`
    : defaultClass;
};

const activeOperatorNameClass = (userId: number) => {
  const defaultClass = "font-bold text-sm";
  return activeOperator.value.userId != userId
    ? `${defaultClass} text-primary-500`
    : defaultClass;
};
</script>

<style>
.scrollarea {
  position: relative;
  height: calc(100vh - 342px); /* or max-height: 400px; */
}
</style>
