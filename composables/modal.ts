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
    const DeletePrompt = defineAsyncComponent(
      () => import('~/components/DeletePrompt.vue')
    );
    if (
      modalContent.value === ModalContent.DeleteDriver ||
      modalContent.value === ModalContent.DeleteTour
    )
      return DeletePrompt;
    // Drivers
    const DriverInfos = defineAsyncComponent(
      () => import('~/components/DriverInfos.vue')
    );
    if (
      modalContent.value === ModalContent.AddDriver ||
      modalContent.value === ModalContent.EditDriver
    )
      return DriverInfos;

    // Tours

    const TourInfos = defineAsyncComponent(
      () => import('~/components/TourInfos.vue')
    );
    return TourInfos;
  });
