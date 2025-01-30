<template>
  <div class="flex">
    <!-- Tabs Navigation (Vertical) -->
    <div class="w-1/4 border-r border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="setActiveTab(tab.value)"
        :class="[
          'w-full text-left px-6 py-3 text-sm font-medium focus:outline-none',
          activeTab === tab.value
            ? 'text-blue-500 bg-blue-50 border-l-4 border-blue-500'
            : 'text-gray-500 hover:bg-gray-50',
        ]"
        role="tab"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tabs Content (Horizontal) -->
    <div class="w-3/4 p-6">
      <slot :name="`tab-content-${activeTab}`">
        <!-- Default content if no slot is provided -->
        <div v-for="tab in tabs" :key="tab.value" v-show="activeTab === tab.value">
          {{ tab.content }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwSimpleTabs",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((tab) => tab.value && tab.label);
      },
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      activeTab: this.modelValue, // Initialize activeTab with the prop value
    };
  },
  watch: {
    modelValue(newValue) {
      // Update activeTab when modelValue changes from the parent
      this.activeTab = newValue;
    },
  },
  methods: {
    setActiveTab(value) {
      this.activeTab = value; // Update the active tab
      this.$emit("update:modelValue", value); // Emit the new value to the parent
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>