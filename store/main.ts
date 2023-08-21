import { defineStore } from 'pinia';

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
    tourIndex: 0,
  }),
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
    async fetchTours() {
      const { data: tours } = await useFetch('/api/tour-management/tours');
      if (tours.value?.length) this.tours = tours.value;
      return {
        tours,
      };
    },
  },
});
