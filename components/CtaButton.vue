<template>
  <button
    role="button"
    :disabled="disabled"
    class="rounded-lg border shadow-sm transition-colors flex items-center gap-2"
    :class="{
      'text-gray-800 border-indigo-800 hover:bg-indigo-600 hover:text-white':
        outlined && useDefaultColors && !disabled,
      'text-white bg-indigo-800 hover:bg-indigo-600':
        !outlined && useDefaultColors && !disabled,
      'px-5 py-3': !square,
      'p-2': square,
      'text-white bg-gray-400 hover:bg-gray-400 cursor-not-allowed': disabled,
    }"
  >
    <slot name="prepend-icon" /> {{ text }} <slot name="append-icon" />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  useDefaultColors: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
