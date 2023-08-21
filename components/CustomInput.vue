<template>
  <fieldset class="flex flex-col gap-2">
    <label v-if="label" :for="name">{{ label }}</label>
    <input
      v-model="value"
      type="text"
      :name="name"
      :placeholder="placeholder"
      class="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
      @keydown="preventNumbers"
    />
  </fieldset>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  doPreventNumbers: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = useModelWrapper(props, emit);

const preventNumbers = ($event: KeyboardEvent) => {
  if (
    !props.doPreventNumbers ||
    isNaN(Number($event.key)) ||
    $event.code === 'Space'
  )
    return;
  $event.preventDefault();
};
</script>
