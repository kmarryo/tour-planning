<template>
  <section>
    <ManagementHeader
      heading="Driver Management"
      cta-text="Add new driver"
      @cta-clicked="openAddDriver()"
    />
    <SearchBar class="my-10 mx-3 md:mx-0" />
    <DataList v-if="filteredDrivers?.length" :attributes="driverAttributes">
      <template #data-sets>
        <Driver
          v-for="(driver, index) in filteredDrivers"
          :driver="driver"
          :key="`${driver.name}_${index}`"
          :driver-index="index"
          @delete-driver="openDeletePrompt(index)"
          @edit-driver="openEditDriverModal"
        />
      </template>
    </DataList>
    <h2 class="text-xl" v-else>
      Sorry, currently no drivers with your selected filters available. Please
      clear all filters and try with different parameters.
    </h2>
  </section>
</template>

<script lang="ts" setup>
import { ModalContent } from '~/composables/modal';
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';

const emit = defineEmits(['toggle-modal']);

const driverAttributes = ['Name', 'Location', ''];

const store = useMainStore();
const { fetchDrivers, updateDriver } = store;
await fetchDrivers();

const {
  driverIndex: storeDriverIndex,
  modalContent,
  filteredDrivers,
  filteredTours,
} = storeToRefs(store);

const openAddDriver = () => {
  modalContent.value = ModalContent.AddDriver;
  emit('toggle-modal');
};

const openDeletePrompt = (driverIndex: number) => {
  modalContent.value = ModalContent.DeleteDriver;
  emit('toggle-modal', true);
  storeDriverIndex.value = driverIndex;
};

const openEditDriverModal = (driverIndex: number) => {
  updateDriver('store', driverIndex);
  modalContent.value = ModalContent.EditDriver;
  emit('toggle-modal', true);
};
</script>
