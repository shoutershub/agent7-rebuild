<template>
  <div>
    <label
      v-if="label"
      :class="labelClasses"
    >{{ label }}</label>
    <div class="flex relative items-center">
      <div
        v-if="$slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        v-on="validationListeners"
        v-model="value"
        name="props.name"
        :disabled="disabled"
        :type="dynamicInputType"
        :required="required"
        :placeholder="props.placeholder"
        :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
        @blur="handleBlur"
        @change="handleChange"
        
      >
      <div @click="toggleShowPassword = !toggleShowPassword" v-if="props.type == 'password'" class="w[20px] lh-[42px] cursor-pointer absolute right-5 opacity-[0.3] hover:opacity-[0.7]">
        <img v-if="!toggleShowPassword" class="w[20px] h-[20px]" src="@/assets/images/icons/eye.svg">
        <img v-else class="w[20px] h-[20px]" src="@/assets/images/icons/hide.svg">
      </div>
      <div
        v-if="$slots.suffix"
        class="absolute right-2.5 bottom-2.5"
      >
        <slot name="suffix" />
      </div>
    </div>
    <!-- Set / Overide Errors -->
    <p
      v-if="$slots.validationMessage"
      :class="validationWrapperClasses"
    >
      <slot name="validationMessage" />
    </p>

    <p v-if="errors && errors.length > 0" :class="validationWrapperClasses">
      {{ errors[0] }}
    </p>
    <p
      v-if="$slots.helper"
      class="mt-2 text-sm text-gray-500 dark:text-gray-400"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref, toRef, onMounted, watch} from 'vue'
import { useField } from 'vee-validate'
import { twMerge } from 'tailwind-merge'
import { useInputClasses } from '@/components/SwInput/composables/useInputClasses'
import {
  type InputSize,
  type InputType,
  type ValidationStatus,
  validationStatusMap,
} from './types'
import { error } from 'console'

interface InputProps {
  name: string,
  disabled?: boolean
  label?: string,
  placeholder?: string
  modelValue?: string
  required?: boolean
  size?: InputSize
  type?: InputType
  validationStatus?: ValidationStatus
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  placeholder: '',
  modelValue: '',
  required: false,
  size: 'md',
  type: 'text',
  validationStatus: undefined,
})

// const model = useVModel(props, 'modelValue')
const toggleShowPassword = ref<boolean>(false);

const { inputClasses, labelClasses } = useInputClasses(toRefs(props))

const { value, handleChange, handleBlur, errors, validate } = useField(toRef(props, 'name'), undefined,  {
  validateOnValueUpdate: false,
});

const validationWrapperClasses = computed(() => twMerge(
  'mt-2 text-sm',
  props.validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
  props.validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',
  errors.value && errors.value.length > 0 ? "text-red-600 dark:text-red-500" : ''

))

const dynamicInputType = computed(() => {
  if(props.type == 'password'){
    return toggleShowPassword.value ? 'text' : 'password';
  }
  return props.type;
})





// watch(
//   errors,
//   (erorr: any) => {
//     if(erorr && erorr.length > 0 ){
//       props.validationStatus = "error";
//     }
//   },
//   {
//     deep: true,
//   }
// );


const validationListeners = {
  blur: (evt: Event | undefined) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event | undefined) => handleChange(evt, !!errors.value),
};

onMounted(() => {
  if(props.modelValue){
     value.value = props.modelValue
  }
});

defineExpose({
  value
});

</script>