<template>
  <div>
    <h2 v-if="isEdit" class="text-xl mb-5 font-bold">Edit tour informations</h2>
    <h2 v-else class="text-xl mb-5 font-bold">New tour informations</h2>
    <div class="mb-10">
      <CustomInput
        v-model="tour.customerName"
        label="Customer Name"
        name="customer-name"
        placeholder="Gartenbau Wiesmann GmbH"
        class="mb-5"
      />
      <div>
        <p class="mb-2">Shipment Date</p>
        <DatePicker
          v-model.string="tour.shipmentDate"
          :masks="masks"
          :min-date="new Date()"
        >
          <template #default="{ togglePopover }">
            <div
              class="border-2 border-gray-300 px-4 py-2 rounded-lg my-5 cursor-pointer"
              @click="togglePopover"
            >
              {{ tour.shipmentDate || 'Please select date for shipment' }}
            </div>
          </template>
        </DatePicker>
      </div>
      <CustomInput
        v-model="tour.locationFrom"
        label="Location From"
        name="location-from"
        placeholder="Berlin"
        class="mb-5"
      />
      <CustomInput
        v-model="tour.locationTo"
        label="Location To"
        name="location-to"
        placeholder="Hamburg"
        class="mb-5"
      />
      <div>
        <p class="mb-2">Assigned Driver</p>
        <Dropdown v-model="tour.assignedDriver" :items="driverNames" />
      </div>
    </div>
    <div class="flex justify-end gap-5 items-center">
      <CtaButton text="Cancel" outlined @click="handleAbort()" />
      <CtaButton
        v-if="isEdit"
        text="Update tour"
        :disabled="!isValid"
        @click="handleTourUpdate()"
      />
      <CtaButton
        v-else
        text="Create tour"
        :disabled="!isValid"
        @click="handleNewTour()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ModalContent } from '~/composables/modal';
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const props = defineProps({
  content: {
    type: String as PropType<ModalContent>,
    required: true,
  },
});

const store = useMainStore();
const { addTour, clearTour, updateTour, fetchTours } = store;
const { tour: storeTour, tourIndex, drivers } = storeToRefs(store);

const emit = defineEmits(['close', 'driversUpdate']);

const handleNewTour = async () => {
  await addTour(tour);
  await fetchTours();
  emit('close');
};
const handleAbort = () => {
  clearTour();
  emit('close');
};
const handleTourUpdate = async () => {
  await updateTour('server', tourIndex.value, tour);
  await fetchTours();
  emit('close');
};

const tour = reactive({
  ...storeTour.value,
});
const isEdit = computed(() => props.content === ModalContent.EditTour);

const isValid = useAllFieldsFilled(tour);

const driverNames = computed(() => {
  const options = drivers.value
    .filter((driver: Driver) => driver.location === tour.locationFrom)
    .map((driver: Driver) => {
      return {
        label: driver.name,
        value: driver,
        selectable: true,
      };
    });
  return options?.length
    ? options
    : [
        {
          label: 'Sorry, currently no driver on this location available',
          value: undefined,
          selectable: false,
        },
      ];
});

const masks = ref({
  modelValue: 'DD.MM.YYYY',
});
</script>
