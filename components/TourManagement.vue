<template>
  <section>
    <ManagementHeader
      heading="Tour Management"
      cta-text="Create new tour"
      @cta-clicked="openCreateNewTour()"
    />
    <DataList :attributes="tourAttributes" is-tour>
      <template #data-sets>
        <Tour
          v-for="(tour, index) in tours"
          :key="tour.customerName"
          :tour="tour"
          :index="index"
          @delete-tour="openDeletePrompt(index)"
          @edit-tour="openEditTourModal"
        />
      </template>
    </DataList>
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
const { modalContent, tourIndex } = storeToRefs(store);
const { tours } = await fetchTours();

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
