<template>
  <div
    class="md:grid grid-flow-col grid-cols-6 p-3 gap-5 shadow-md border border-gray-200 rounded-lg items-center"
  >
    <div v-for="property in tourProperties" :key="property">
      {{ property }}
    </div>
    <ItemActions @edit="editTour()" @delete="deleteTour()" />
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';
import { storeToRefs } from 'pinia';
const props = defineProps({
  tour: {
    type: Object as PropType<Tour>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['editTour', 'deleteTour']);
const store = useMainStore();
const { tourIndex } = storeToRefs(store);

const editTour = () => {
  tourIndex.value = props.index;
  emit('editTour', props.index);
};
const deleteTour = () => emit('deleteTour', props.index);

const tourProperties = computed(() => {
  if (!props.tour) return;
  return Object.values(props.tour);
});
</script>
