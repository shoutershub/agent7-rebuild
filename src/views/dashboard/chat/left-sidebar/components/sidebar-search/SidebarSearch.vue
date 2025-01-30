<template>
<div class="mt-4">
  <form action="#" method="GET">
    <label for="users-search" class="sr-only">Search </label>
    <div class="relative mt-1 ">
      <sw-input
        type="text"
        name="email"
        id="users-search"
        class="border-zinc-200"
        :placeholder="placeholder"
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
  </form>
</div>
</template>

<script setup lang="ts">
import { SwInput, SearchIcon } from "@/global";

export type Type = string;

interface InputProps {
  type: Type,
  placeholder: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "conversation",
  placeholder: "Search",
})

</script>
