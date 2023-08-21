<template>
  <div class="container mx-auto my-10">
    <TabSelection v-model="currentTabIndex" :tabs="tabs" />
    <transition name="fade">
      <component :is="Component" class="my-10" />
    </transition>
    <!-- <DriverList /> -->
  </div>
</template>

<script lang="ts" setup>
const DriverManagementComponent = defineAsyncComponent(
  () => import('../components/DriverManagement.vue')
);
const TourManagementComponent = defineAsyncComponent(
  () => import('../components/TourManagement.vue')
);
const tabs = ['Driver Management', 'Tour Management'];
const currentTabIndex = ref(0);

const Component = computed(() => {
  if (currentTabIndex.value === 0) return DriverManagementComponent;
  return TourManagementComponent;
});
</script>
