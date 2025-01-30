<template>
  <div
    class="overflow-x-auto"
    :class="{
      'overflow-y-hidden': isPagination
    }"
  >
    <table class="w-full overflow-hidden whitespace-nowrap" :class="tableClass">
      <thead class="text-left" :class="theadClass">
        <tr :class="headTrClass">
          <th
            class="px-3.5 py-2.5 font-semibold"
            v-for="(item, index) in headerItems"
            :key="'table-header-' + index"
            :class="`${thClass} ${
              item.justifyCenter ? 'flex justify-center' : ''
            } text-${item.align}`"
          >
            <span v-if="item.type && item.type == 'check'">
              <sw-simple-checkbox
                variant="outlined"
                value="option"
                id="checkAll"
                @click="emit('onSelectAll')"
              />
            </span>

            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in tableData"
          :key="'table-row-' + index"
          :class="`${trClass} ${item.isActive ? 'active' : ''}`"
        >
          <td
            v-for="(header, index) in headerItems"
            :key="'basic-table-tr-' + index"
            class="px-3.5 py-2.5"
            :class="`${tdClass}  ${
              header.justifyCenter ? '' : ''
            } ${
              header.align ? 'text-'+header.align : ''
            }`"
          >
            <slot :name="header.value" :value="item">
              {{ item[header.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="!tableData.length" class="noresult">
    <div class="py-6 text-center">
      <ri-search-line
        class="mx-auto mb-3 size-6 text-sky-500 fill-sky-100 dark:fill-sky-500/20"
      />
      <h5 class="mt-2 mb-1">Sorry! No Result Found</h5>
      <p class="mb-0 text-slate-500 dark:text-zink-200">
        We've searched more than 199+ product We did not find any product for
        you search.
      </p>
    </div>
  </div>
  <div
    v-if="isPagination && tableData.length"
    class="flex flex-col items-center gap-4 mt-4 md:flex-row"
    :class="paginationClass"
  >
    <div class="grow">
      <p class="text-slate-500 dark:text-zink-200">
        Showing <b class="showing">{{ getEndIndex }}</b> of
        <b class="total-records">{{ totalItems }}</b> Results
      </p>
    </div>

    <div class="col-sm-auto mt-sm-0">
      
      <sw-pagination
        v-model="page"
        :totalPages="getTotalPages"
        pageClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
        actionClass="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
      >
        <template #prev>
          <!-- <ChevronLeft class="mr-1 size-4 rtl:rotate-180" /> -->
          Prev
        </template>
        <template #next>
          Next
          <!-- <ChevronRight class="ml-1 size-4 rtl:rotate-180" /> -->
        </template>
      </sw-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SwPagination } from "@/global";
import { type PropType, computed, ref, watch, onMounted } from "vue";
import { TableHeaderType } from "@/components/SwSimpleTable/types";
import {SwSimpleCheckbox} from "@/global"
import {RiSearchLine} from "@remixicon/vue"
// import { ChevronLeft, ChevronRight } from "lucide-vue-next";
// import {  } from "lucide-vue-next";

const emit = defineEmits(["onSelectAll"]);

const props = defineProps({
  headerItems: {
    type: Array as PropType<TableHeaderType[]>,
    default: () => []
  },
  items: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  tdClass: {
    type: String,
    default: ""
  },
  thClass: {
    type: String,
    default: ""
  },
  theadClass: {
    type: String,
    default: ""
  },
  trClass: {
    type: String,
    default: ""
  },
  tableClass: {
    type: String,
    default: ""
  },
  headTrClass: {
    type: String,
    default: ""
  },
  isPagination: {
    type: Boolean,
    default: false
  },
  config: {
    type: Object as PropType<{
      page: number;
      itemsPerPage: number;
    }>,
    default: () => {}
  },
  paginationClass: {
    type: String,
    default: ""
  }
});
const tableData = ref(props.items);
const page = ref(props.config?.page || 1);
const finalData = computed(() => props.items);

const totalItems = computed(() => finalData.value.length);

const getTotalPages = computed(() => {
  if (props.isPagination) {
    const { itemsPerPage } = props.config;
    return Math.ceil(totalItems.value / itemsPerPage);
  }
  return 3;
});

watch(page, () => {
  getPaginateData();
});

watch(finalData, () => {
  getPaginateData();
});

onMounted(() => {
  if (props.isPagination) {
    getPaginateData();
  }
});

const getPaginateData = () => {
  if (props.isPagination) {
    tableData.value = props.items.slice(getStartIndex.value, getEndIndex.value);
  } else {
    tableData.value = props.items;
  }
};

const getStartIndex = computed(() => {
  if (props.isPagination) {
    const { itemsPerPage } = props.config;
    return (page.value - 1) * itemsPerPage;
  }
  return 0;
});

const getEndIndex = computed(() => {
  if (props.isPagination) {
    const { itemsPerPage } = props.config;
    return Math.min(getStartIndex.value + itemsPerPage, totalItems.value);
  }
  return 0;
});

</script>

