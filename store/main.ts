import { ModalContent } from '~/composables/modal';
import { defineStore } from 'pinia';

const tourBlueprint = {
  customerName: '',
  shipmentDate: '',
  locationFrom: '',
  locationTo: '',
  assignedDriver: '',
};

export const useMainStore = defineStore('main', {
  state: () => ({
    // Drivers
    driver: {
      name: '',
      location: '',
    },
    driverIndex: 0,
    drivers: [] as Driver[],
    hasToastNotification: false,
    // Tours
    tours: [] as Tour[],
    tour: { ...tourBlueprint },
    tourIndex: 0,
    // General
    modalContent: '' as ModalContent,
  }),
  getters: {
    notificationText: (state) => {
      switch (state.modalContent) {
        case ModalContent.AddDriver:
          return 'Driver successfully added!';
        case ModalContent.AddTour:
          return 'Tour successfully added!';
        case ModalContent.EditDriver:
          return 'Driver successfully edited!';
        case ModalContent.EditTour:
          return 'Tour successfully edited!';
        case ModalContent.DeleteDriver:
          return 'Driver successfully deleted!';
        case ModalContent.DeleteTour:
          return 'Tour successfully deleted!';
        default:
          break;
      }
    },
  },
  actions: {
    async fetchDrivers() {
      const { data: drivers } = await useFetch(
        '/api/driver-management/drivers'
      );
      if (drivers.value?.length) this.drivers = drivers.value;
      return {
        drivers,
      };
    },
    async addDriver(driver: Driver) {
      await useFetch('/api/driver-management/add-driver', {
        method: 'post',
        body: driver, // stringified automatically when passing objects
      });
      this.clearDriver();
      this.showToastNotification();
    },
    async deleteDriver() {
      console.log('deleteDriver');
      await useFetch('/api/driver-management/delete-driver', {
        method: 'delete',
        body: { index: this.driverIndex },
      });
      this.showToastNotification();
    },
    async updateDriver(
      environment: 'store' | 'server',
      driverIndex: number,
      newDriverInfos?: Driver
    ) {
      console.log(driverIndex);
      if (environment === 'store')
        return (this.driver = this.drivers[driverIndex]);
      await useFetch('/api/driver-management/update-driver', {
        method: 'put',
        body: {
          index: driverIndex,
          ...newDriverInfos,
        },
      });
      this.clearDriver();
      this.showToastNotification();
    },
    clearDriver() {
      this.driver = {
        name: '',
        location: '',
      };
    },
    showToastNotification() {
      this.hasToastNotification = true;
      setTimeout(() => {
        this.clearToastNotification();
      }, 5000);
    },
    clearToastNotification() {
      this.hasToastNotification = false;
    },
    // Tours
    async fetchTours() {
      const { data: tours } = await useFetch('/api/tour-management/tours');
      if (tours.value?.length) this.tours = tours.value;
      return {
        tours,
      };
    },
    clearTour() {
      this.tour = { ...tourBlueprint };
    },
    async addTour(tour: Tour) {
      await useFetch('/api/tour-management/add-tour', {
        method: 'post',
        body: tour, // stringified automatically when passing objects
      });
      this.clearTour();
      this.showToastNotification();
    },
    async updateTour(
      environment: 'store' | 'server',
      index: number,
      newTourInfos?: Tour
    ) {
      if (environment === 'store') return (this.tour = this.tours[index]);
      await useFetch('/api/tour-management/update-tour', {
        method: 'put',
        body: {
          index,
          ...newTourInfos,
        },
      });
      this.clearTour();
      this.showToastNotification();
    },
    async deleteTour() {
      await useFetch('/api/tour-management/delete-tour', {
        method: 'delete',
        body: { index: this.tourIndex },
      });
      this.showToastNotification();
    },
  },
});
