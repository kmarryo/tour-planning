<template>
  <section>
    <ManagementHeader
      heading="Tour Management"
      cta-text="Create new tour"
      @cta-clicked="openCreateNewTour()"
    />
    <SearchBar class="my-10 mx-3 md:mx-0" />
    <DataList v-if="filteredTours?.length" :attributes="tourAttributes" is-tour>
      <template #data-sets>
        <Tour
          v-for="(tour, index) in filteredTours"
          :key="`${tour.customerName}_${index}`"
          :tour="tour"
          :index="index"
          @delete-tour="openDeletePrompt(index)"
          @edit-tour="openEditTourModal"
        />
      </template>
    </DataList>
    <h2 class="text-xl" v-else>
      Sorry, currently no tours with your selected filters available. Please
      clear all filters and try with different parameters.
    </h2>
  </section>
</template>

<script lang="ts" setup>
import { ModalContent } from '~/composables/modal';
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';

const emit = defineEmits(['toggle-modal']);

const tourAttributes = [
  'Customer Name',
  'Shipment Date',
  'Location From',
  'Location To',
  'Assigned Driver',
  '',
];

// Store and Tour interactions

const store = useMainStore();
const { fetchTours, updateTour } = store;
await fetchTours();
const { modalContent, tourIndex, filteredTours } = storeToRefs(store);

const openCreateNewTour = () => {
  modalContent.value = ModalContent.AddTour;
  emit('toggle-modal');
};
const openDeletePrompt = (index: number) => {
  modalContent.value = ModalContent.DeleteTour;
  emit('toggle-modal', true);
  tourIndex.value = index;
};

const openEditTourModal = (index: number) => {
  updateTour('store', index);
  modalContent.value = ModalContent.EditTour;
  emit('toggle-modal', true);
};
</script>
