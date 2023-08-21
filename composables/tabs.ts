export const useTabComponent = (currentTabIndex: Ref<number>) =>
  computed(() => {
    const DriverManagementComponent = defineAsyncComponent(
      () => import('../components/DriverManagement.vue')
    );
    const TourManagementComponent = defineAsyncComponent(
      () => import('../components/TourManagement.vue')
    );

    if (currentTabIndex.value === 0) return DriverManagementComponent;
    return TourManagementComponent;
  });
