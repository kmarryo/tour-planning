<template>
  <div>
    <h2 class="text-2xl font-bold mb-5">Are you sure?</h2>
    <p v-if="isDriver">
      If you confirm this interaction, this driver's information will be lost
      forever.
    </p>
    <p v-else-if="isTour">
      If you confirm this interaction, this tour will be deleted and can't be
      restored.
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

const props = defineProps({
  isDriver: {
    type: Boolean,
    default: false,
  },
  isTour: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close', 'update']);
const handleAbort = () => emit('close');
const store = useMainStore();
const { deleteDriver, deleteTour } = store;

const handleDelete = () => {
  if (props.isDriver) deleteDriver();
  if (props.isTour) deleteTour();
  emit('update');
  emit('close');
};
</script>
