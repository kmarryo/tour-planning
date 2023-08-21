<template>
  <section>
    <ManagementHeader
      heading="Tour Management"
      cta-text="Create new tour"
      @cta-clicked=""
    />
    <DataList :attributes="tourAttributes">
      <template #default>
        <div>
          <Tour
            v-for="(tour, index) in tours"
            :tour="tour"
            :key="tour.customerName"
            :record="tour"
          />
        </div>
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
];

// Store and Tour interactions

const store = useMainStore();
const { fetchTours } = store;
const { tours } = await fetchTours();
</script>
