export enum ModalContent {
  AddDriver = 'AddDriver',
  EditDriver = 'EditDriver',
  DeleteDriver = 'DeleteDriver',
  AddTour = 'AddTour',
  EditTour = 'EditTour',
  DeleteTour = 'DeleteTour',
}

// Modal composables

export const useModalComponent = (modalContent: Ref<ModalContent | null>) =>
  computed(() => {
    // Dynamic components
    const DriverInfos = defineAsyncComponent(
      () => import('~/components/DriverInfos.vue')
    );
    const DeletePrompt = defineAsyncComponent(
      () => import('~/components/DeletePrompt.vue')
    );
    if (modalContent.value === ModalContent.DeleteDriver) return DeletePrompt;
    return DriverInfos;
  });
