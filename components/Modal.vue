<template>
  <Teleport to="body">
    <div
      class="fixed overflow-y-auto top-0 left-0 w-full z-20 h-full bg-black bg-opacity-70"
    >
      <div
        class="container md:w-5/6 mx-auto max-w-4xl bg-white rounded-xl z-30 p-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <slot name="content" />
        <button
          text="Schließen"
          role="button"
          class="absolute top-5 right-5 z-30"
          @click="$emit('close')"
        >
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
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
defineEmits(['close']);
</script>
