<template>
  <CtaButton :text="label" :outlined="!isActive">
    <template #prepend-icon>
      <slot />
    </template>
  </CtaButton>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>
