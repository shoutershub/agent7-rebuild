<template>
  <div class="flex items-end h-full overflow-hidden flex-grow-1">
    <PerfectScrollbar ref="scrollbar" class="scrollarea">
      <!-- Loop through each time group -->
      <div v-for="(timeGroup, timeIndex) in groupedMessages" :key="timeIndex">
        <!-- Display the timestamp for the group -->
        <div class="my-2 text-sm text-center text-gray-500">
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
              <div class="text-[12px] text-gray-500 pl-3">
                {{ formatTimestamp(userGroup.timestamp) }}
              </div>
            </div>

            <!-- Loop through each message from the user -->
            <div v-for="(message, msgIndex) in userGroup.messages" :key="msgIndex">
              <div v-if="message.isDeleted">
                <div class="text-sm italic">Message removed</div>
              </div>
              <div v-else>
                <div v-if="message.type == 'image'" class="text-gray-900">
                  <div class="mt-4" @click="enlargeImage(message.message)">
                    <img
                      class="object-cover object-center rounded-md"
                      :src="message.message"
                      :alt="message.message"
                      width="150px"
                      height="150px"
                    />
                  </div>
                </div>
                <div v-else class="text-sm text-gray-900">
                  {{ message.message }}
                </div>
              </div>

              <!-- Delete button -->
              <div>
                <sw-button
                  v-if="message.userId == activeOperator.userId && !message.isDeleted"
                  @click="deleteChatRecord(message.id)"
                  class="invisible w-auto p-0 group-hover/message-items:visible"
                  color="transparent"
                >
                  <span class="text-xs text-red-400 hover:text-red-700"
                    >Delete</span
                  >
                </sw-button>
              </div>
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
import { nextTick, onMounted, ref, Ref, inject, computed } from "vue";
import { SwButton, SwModal } from "@/global";
import { initDropdowns } from "flowbite";
import { activeOperatorInterface, messageInterFace } from "../../../types";
import { msgAddedToListEventStore } from "@/store/MsgAddedToListEventStore";

const msg = ref({
  participants: ["User1", "User2"],
  messages: [
    {
      sender: "User2",
      content: "Thank you, William. Very good. Tom, do you have",
      timestamp: "2023-10-01T11:06:00Z"
    },
    {
      sender: "User1",
      content: "fefefe",
      timestamp: "2023-10-01T17:15:29Z"
    },
    {
      sender: "User1",
      content: "efef",
      timestamp: "2023-10-01T17:15:30Z"
    },
    {
      sender: "User1",
      content: "fefe",
      timestamp: "2023-10-01T17:15:31Z"
    },
    {
      sender: "User2",
      content: "fefe",
      timestamp: "2023-10-01T17:15:32Z"
    },
    {
      sender: "User2",
      content: "efefefefef",
      timestamp: "2023-10-01T17:15:33Z"
    },
    {
      sender: "User2",
      content: "efef",
      timestamp: "2023-10-01T17:17:31Z"
    }
  ]
});
const activeOperator = inject("activeOperator") as activeOperatorInterface;
const scrollbar = ref();

const getEventMsg = msgAddedToListEventStore();

getEventMsg.$onAction(() => {
  updateMessageAreaScrollBar();
});

onMounted(() => {
  updateMessageAreaScrollBar();
  initDropdowns();
});

// Group messages by time and user
const groupedMessages = computed(() => {
  const groups = [];
  let currentTimeGroup = null;

  msg.value.forEach((message) => {
    const messageTime = new Date(message.date);
    const timeKey = messageTime.toISOString().slice(0, 16); // Group by minute

    // Create a new time group if necessary
    if (!currentTimeGroup || currentTimeGroup.timestamp !== timeKey) {
      currentTimeGroup = {
        timestamp: timeKey,
        userGroups: []
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
        timestamp: message.date,
        messages: []
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
  msg.value = msg.value.map((item) => {
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
</script>

<style>
.scrollarea {
  position: relative;
  height: calc(100vh - 275px); /* or max-height: 400px; */
}
</style>