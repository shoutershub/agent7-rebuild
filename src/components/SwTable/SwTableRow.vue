<template>
    <tr :class="tableRowClasses">
      <slot />
    </tr>
  </template>
  
  <script lang="ts" setup>
  import { useTableRowClasses } from './composables/useTableRowClasses'
  
    
  const props = defineProps({
    rowIsActive: {
      type: Boolean,
      default: false,
    },
    rowIsActiveClass: {
      type: String,
      default: false,
    },
  })

  const { tableRowClasses } = useTableRowClasses(props.rowIsActive, props.rowIsActiveClass)
  </script>