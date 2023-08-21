<template>
  <div class="mx-3 md:mx-0 first:bg-gray-200 grid gap-5 md:gap-3">
    <div
      class="md:grid grid-flow-col grid-cols-6 bg-gray-200 rounded-lg p-3 gap-5"
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
});
</script>
