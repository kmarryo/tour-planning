<template>
  <section>
    <ManagementHeader
      heading="Tour Management"
      cta-text="Create new tour"
      @cta-clicked=""
    />
    <DataList :attributes="tourAttributes" is-tour>
      <template #data-sets>
        <Tour
          v-for="(tour, index) in tours"
          :key="tour.customerName"
          :tour="tour"
          :index="index"
        />
      </template>
    </DataList>
  </section>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';

const tourAttributes = [
  'Customer Name',
  'Shipment Date',
  'Location From',
  'Location To',
  'Assigned Driver',
  '',
];

// Store and Tour interactions

const store = useMainStore();
const { fetchTours } = store;
const { tours } = await fetchTours();
</script>
