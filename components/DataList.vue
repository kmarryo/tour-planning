<template>
  <div class="grid gap-3">
    <div class="mx-3 md:mx-0 p-3 bg-gray-200 rounded-lg">
      <div class="grid grid-flow-col items-center justify-around w-10/12">
        <div v-for="attribute in attributes" class="font-bold">
          {{ attribute }}
        </div>
      </div>
    </div>
    <slot />
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
