<template>
  <section>
    <ManagementHeader
      heading="Driver Management"
      cta-text="Add new driver"
      @cta-clicked="openAddDriver()"
    />
    <DataList :attributes="driverAttributes">
      <template #data-sets>
        <Driver
          v-for="(driver, index) in drivers"
          :driver="driver"
          :key="driver.name"
          :driver-index="index"
          @delete-driver="openDeletePrompt(index)"
          @edit-driver="openEditDriverModal"
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

const driverAttributes = ['Name', 'Location', ''];

// Store and Driver interactions

const store = useMainStore();
const { driverIndex: storeDriverIndex, modalContent } = storeToRefs(store);
const { fetchDrivers, updateDriver } = store;

const { drivers } = await fetchDrivers();

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
