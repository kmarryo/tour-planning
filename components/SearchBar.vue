<template>
  <div>
    <label for="search" class="mb-2 text-sm font-medium text-gray-800 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        v-model="searchTerm"
        ref="searchInput"
        type="search"
        id="search"
        class="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:border-indigo-600 outline-none"
        :placeholder="placeholder"
        required
      />
      <div
        v-if="!focused && !isMobileDevice"
        class="absolute right-5 top-1/2 -translate-y-1/2 border border-gray-200 h-5 pointer-events-none p-3 rounded-full text-sm leading-[0px]"
      >
        {{ getSearchIndicator() }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';
import { useFocus } from '@vueuse/core';

defineProps({
  placeholder: {
    type: String,
    default: 'Filter results...',
  },
});

const store = useMainStore();
const { searchTerm } = storeToRefs(store);

const searchInput = ref<HTMLElement | null>(null);
const { focused } = useFocus(searchInput);

const handleKeydown = (event: KeyboardEvent) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k')
    searchInput.value?.focus();
};
const isMobileDevice = ref(false);
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  isMobileDevice.value = /Mobile/.test(navigator.userAgent);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const getSearchIndicator = () => {
  if (!process.client) return;
  if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
    return '⌘ + K';
  }
  return 'Strg + K';
};
</script>
