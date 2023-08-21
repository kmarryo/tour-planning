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
    <Teleport to="body">
      <Modal v-if="isModalOpen" @close="handleAbort()">
        <template #default>
          <component
            :is="ModalContentComponent"
            :content="modalContent"
            @close="toggleModal()"
            @drivers-update="fetchDrivers()"
          />
        </template>
      </Modal>
    </Teleport>
    <ToastNotification :show-notification="showNotification">
      <template #text>
        <div v-if="modalContent === ModalContent.AddDriver">
          Driver successfully added!
        </div>
        <div v-else-if="modalContent === ModalContent.EditDriver">
          Driver successfully edited!
        </div>
        <div v-else>Driver successfully deleted!</div>
      </template>
    </ToastNotification>
  </section>
</template>

<script lang="ts">
export enum ModalContent {
  AddDriver = 'AddDriver',
  EditDriver = 'EditDriver',
  DeleteDriver = 'DeleteDriver',
}
</script>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';

const driverAttributes = ['Name', 'Location', ''];

// Dynamic components
const DriverInfos = defineAsyncComponent(
  () => import('~/components/DriverInfos.vue')
);
const DeletePrompt = defineAsyncComponent(
  () => import('~/components/DeletePrompt.vue')
);

// Modal
const [isModalOpen, toggleModal] = useToggle(false);
const modalContent = ref(ModalContent.AddDriver);
const ModalContentComponent = computed(() => {
  if (modalContent.value === ModalContent.DeleteDriver) return DeletePrompt;
  return DriverInfos;
});

// Store and Driver interactions

const store = useMainStore();
const { driverIndex: storeDriverIndex, hasToastNotification } =
  storeToRefs(store);
const { fetchDrivers, clearDriver, updateDriver } = store;

const { drivers } = await fetchDrivers();

const openAddDriver = () => {
  modalContent.value = ModalContent.AddDriver;
  toggleModal();
};

const openDeletePrompt = (driverIndex: number) => {
  modalContent.value = ModalContent.DeleteDriver;
  toggleModal(true);
  storeDriverIndex.value = driverIndex;
};

const openEditDriverModal = (driverIndex: number) => {
  updateDriver('store', driverIndex);
  modalContent.value = ModalContent.EditDriver;
  toggleModal(true);
};

const handleAbort = () => {
  clearDriver();
  toggleModal();
};

// Toast notification
const showNotification = computed(() => hasToastNotification.value);
</script>
