<template>
  <div>
    <div class="md:flex justify-between items-center my-2 mx-3 md:mx-0">
      <h2 class="text-2xl my-5 font-bold">{{ heading }}</h2>
      <CtaButton :text="ctaText" @click="$emit('ctaClicked')">
        <template #append-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </template>
      </CtaButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  heading: {
    type: String,
    default: '',
  },
  ctaText: {
    type: String,
    default: '',
  },
});

defineEmits(['ctaClicked']);
</script>
