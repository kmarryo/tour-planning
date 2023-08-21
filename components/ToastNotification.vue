<template>
  <Teleport to="body">
    <transition name="toast">
      <div
        v-if="showNotification"
        class="bg-green-500 text-white p-5 rounded-lg fixed bottom-5 right-5 flex gap-5"
      >
        <slot name="text" />
        <div v-if="text">
          {{ text }}
        </div>
        <button text="Schließen" role="button" @click="closeNotification()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:rotate-90 transition duration-200 delay-75"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';

defineProps({
  showNotification: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
});

const { clearToastNotification } = useMainStore();

const closeNotification = () => {
  clearToastNotification();
};
</script>
