<template>
  <button
    role="button"
    class="rounded-lg border shadow-sm transition-colors flex items-center gap-2"
    :class="{
      'text-gray-800 border-indigo-800 hover:bg-indigo-600 hover:text-white':
        outlined && useDefaultColors,
      'text-white bg-indigo-800 hover:bg-indigo-600':
        !outlined && useDefaultColors,
      'px-5 py-3': !square,
      'p-2': square,
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
});
</script>
