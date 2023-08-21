<template>
  <div>
    <h2 class="text-xl font-bold mb-5">Are you sure?</h2>
    <p>
      If you confirm to delete the driver you selected, the driver information
      will be lost forever.
    </p>
    <div class="flex justify-end gap-5 mt-7">
      <CtaButton text="Cancel" outlined @click="handleAbort()" />
      <CtaButton
        text="Delete"
        :use-default-colors="false"
        class="bg-red-600 text-white hover:bg-red-800"
        @click="handleDelete()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';

const emit = defineEmits(['close', 'driversUpdate']);
const handleAbort = () => emit('close');
const store = useMainStore();
const { deleteDriver } = store;

const handleDelete = () => {
  deleteDriver();
  emit('driversUpdate');
  emit('close');
};
</script>
