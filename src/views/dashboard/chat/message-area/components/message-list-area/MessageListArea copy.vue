<template>
  <div class="chat-container">
    <!-- Loop through each time group -->
    <div v-for="timeGroup in groupedMessages" :key="timeGroup.timestamp" class="time-group">
      <!-- Display the timestamp for the group -->
      <div class="timestamp">{{ formatTimestamp(timeGroup.timestamp) }}</div>

      <!-- Loop through each user group within the time group -->
      <div v-for="userGroup in timeGroup.userGroups" :key="userGroup.sender" class="user-group">
        <!-- Display the user's name -->
        <div class="user-name">{{ userGroup.sender }}:</div>

        <!-- Loop through each message from the user -->
        <div v-for="message in userGroup.messages" :key="message.timestamp" class="message">
          {{ message.content }}
        </div>
      </div>
    </div>

    <!-- Input field and button to add a new message -->
    <div class="message-input">
      <select v-model="newMessageSender">
        <option value="User1">User1</option>
        <option value="User2">User2</option>
      </select>
      <input v-model="newMessageContent" placeholder="Type a message..." />
      <button @click="addMessage">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample data
const sampleChat = ref({
  participants: ["User1", "User2"],
  messages: [
    {
      sender: "User2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T11:06:00Z"
    },
    {
      sender: "User1",
      content: "fefefe",
      timestamp: "2023-10-01T17:15:29Z"
    },
    {
      sender: "User1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:30Z"
    },
    {
      sender: "User1",
      content: "fefe",
      timestamp: "2023-10-01T17:15:31Z"
    },
    {
      sender: "User2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:32Z"
    },
    {
      sender: "User2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
      timestamp: "2023-10-01T17:15:33Z"
    },
    {
      sender: "User2",
      content: "efef",
      timestamp: "2023-10-01T17:17:31Z"
    }
  ]
});

// Input fields for new message
const newMessageSender = ref("User1");
const newMessageContent = ref("");

// Computed property to group messages by time and user
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
        userGroups: []
      };
      groups.push(currentTimeGroup);
    }

    // Find or create a user group within the time group
    let userGroup = currentTimeGroup.userGroups.find((group) => group.sender === message.sender);
    if (!userGroup) {
      userGroup = {
        sender: message.sender,
        messages: []
      };
      currentTimeGroup.userGroups.push(userGroup);
    }

    // Add the message to the user group
    userGroup.messages.push(message);
  });

  return groups;
});

// Method to format timestamps
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
};

// Function to add a new message
const addMessage = () => {
  if (!newMessageContent.value.trim()) return; // Don't add empty messages

  const newMessage = {
    sender: newMessageSender.value,
    content: newMessageContent.value,
    timestamp: new Date().toISOString()
  };

  // Add the new message to the sample chat
  sampleChat.value.messages.push(newMessage);

  // Clear the input field
  newMessageContent.value = "";
};
</script>

<style>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.time-group {
  margin-bottom: 20px;
}

.timestamp {
  font-size: 0.8em;
  color: #666;
  margin-bottom: 10px;
}

.user-group {
  margin-bottom: 10px;
}

.user-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.message {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.message-input {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.message-input select,
.message-input input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.message-input button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message-input button:hover {
  background-color: #0056b3;
}
</style>