import { Tab } from '~/store/main';

export const useTabComponent = (currentTab: Ref<Tab>) =>
  computed(() => {
    const DriverManagementComponent = defineAsyncComponent(
      () => import('../components/DriverManagement.vue')
    );
    const TourManagementComponent = defineAsyncComponent(
      () => import('../components/TourManagement.vue')
    );

    if (currentTab.value === Tab.DriverManagement)
      return DriverManagementComponent;
    return TourManagementComponent;
  });
