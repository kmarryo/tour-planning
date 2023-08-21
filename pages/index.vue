<template>
  <div class="container mx-auto my-10">
    <TabSelection v-model="currentTabIndex" :tabs="tabs" />
    <transition name="fade">
      <component :is="TabComponent" class="my-10" @toggle-modal="toggleModal" />
    </transition>

    <Modal v-if="isModalOpen" @close="handleAbort()">
      <template #content>
        <component
          :is="ModalComponent"
          :content="modalContent"
          @close="toggleModal()"
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

const store = useMainStore();
const { clearDriver, clearTour } = store;
const { modalContent, hasToastNotification, notificationText } =
  storeToRefs(store);

const tabs = ['Driver Management', 'Tour Management'];
const currentTabIndex = ref(0);
const TabComponent = useTabComponent(currentTabIndex);

const [isModalOpen, toggleModal] = useToggle(false);
const ModalComponent = useModalComponent(modalContent);

const handleAbort = () => {
  clearDriver();
  clearTour();
  toggleModal();
};
</script>
