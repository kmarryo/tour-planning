<template>
  <div class="first:bg-gray-200 grid gap-5 md:gap-3">
    <div
      class="md:grid grid-flow-col bg-gray-200 rounded-lg p-3 gap-5"
      :class="{ 'grid-cols-6': isTour, 'grid grid-cols-3': !isTour }"
    >
      <div v-for="attribute in attributes" class="font-bold">
        {{ attribute }}
      </div>
    </div>
    <slot name="data-sets" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  attributes: {
    type: Array as PropType<string[]>,
    required: true,
  },
  isTour: {
    type: Boolean,
    default: false,
  },
});
</script>
