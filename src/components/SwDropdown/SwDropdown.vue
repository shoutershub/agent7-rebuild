<template>
    <Popper ref="wrapper"  :placement="placement">
      <sw-slot-listener @click="onToggle">
        <slot name="trigger">
          <sw-button
            :disabled="disabled"
            :class="buttonclass"
            :color="buttonColor"
            type="button"
            ref="reference"
          >
            <slot name="title"> </slot>
            <template v-if="showDropDownArrow" #suffix>
              <svg
                :class="dropDownArrowClass"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </template>
          </sw-button>
        </slot>
      </sw-slot-listener>

      <template v-if="visible" ref="contentRef" #content>
        <div :class="contentClasses">
          <sw-slot-listener @click="onHide">
            <slot />
          </sw-slot-listener>
        </div>
      </template>
    </Popper>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { DropdownPlacement } from "./types";
import SwButton from "@/components/SwButton/SwButton.vue";
import type { ButtonVariant } from "@/components/SwButton/types";
import SwSlotListener from "../utils/SwSlotListener/SwSlotListener.vue";
const visible = ref(false);
const onHide = () => {
  if (props.closeInside) visible.value = false;
};
function hideDropdown() {
  visible.value = false;
}

const onToggle = () => (visible.value = !visible.value);

const props = withDefaults(
  defineProps<{
    placement?: DropdownPlacement;
    text?: string;
    transition?: string;
    closeInside?: boolean;
    buttonColor?: ButtonVariant;
    buttonclass?: string;
    showDropDownArrow?: boolean;
    disabled?: boolean;
    dropDownType?: string;
  }>(),
  {
    placement: "bottom-end",
    text: "",
    transition: "",
    closeInside: false,
    buttonColor: "default",
    buttonclass: "",
    showDropDownArrow: true,
    disabled: false,
    dropDownType: "button",
  }
);

const wrapper = ref<HTMLDivElement>();

const contentClasses =
  "z-10 bg-white divide-y divide-gray-100 rounded shadow-md  dark:bg-gray-700";

onClickOutside(wrapper, () => {
  if (!visible.value) return;
  visible.value = false;
});

const dropDownArrowClass = computed(() => {
  if (!visible.value) {
    return "w-4 h-4 ml-2 transition ease-in-out delay-150";
  } else {
    return "w-4 h-4 ml-2 rotate-180 transition ease-in-out delay-150";
  }
});

defineExpose({
  hideDropdown,
});
</script>