<template>
  <div class="container mx-auto my-10">
    <TabSelection v-model="currentTabIndex" :tabs="tabs" class="mx-3" />
    <transition name="fade">
      <component :is="TabComponent" class="my-10" @toggle-modal="toggleModal" />
    </transition>

    <Modal v-if="isModalOpen" @close="handleAbort()">
      <template #content>
        <component
          :is="ModalComponent"
          :content="modalContent"
          :is-driver="isDriver"
          :is-tour="isTour"
          @close="toggleModal()"
          @update="refetch"
        />
      </template>
    </Modal>
    <ToastNotification
      :show-notification="hasToastNotification"
      :text="notificationText"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';
import { useToggle } from '@vueuse/core';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const store = useMainStore();
const { clearDriver, clearTour, fetchDrivers, fetchTours } = store;
const { modalContent, hasToastNotification, notificationText } =
  storeToRefs(store);

const tabs = computed(() =>
  smallerThanMd.value
    ? ['Drivers', 'Tours']
    : ['Driver Management', 'Tour Management']
);
const currentTabIndex = ref(0);
const isDriver = computed(() => currentTabIndex.value === 0);
const isTour = computed(() => currentTabIndex.value === 1);
const TabComponent = useTabComponent(currentTabIndex);

const [isModalOpen, toggleModal] = useToggle(false);
const ModalComponent = useModalComponent(modalContent);

const handleAbort = () => {
  clearDriver();
  clearTour();
  toggleModal();
};

const refetch = () => {
  if (isDriver.value) return fetchDrivers();
  fetchTours();
};

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = breakpoints.smaller('md');
</script>
