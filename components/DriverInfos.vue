<template>
  <div>
    <h2 v-if="isEdit" class="text-xl mb-5 font-bold">
      Edit driver informations
    </h2>
    <h2 v-else class="text-xl mb-5 font-bold">New driver informations</h2>
    <div>
      <CustomInput
        v-model="driver.name"
        label="Driver Name"
        name="driver-name"
        placeholder="John Doe"
        class="mb-5"
      />
      <CustomInput
        v-model="driver.location"
        label="Driver Location"
        name="driver-location"
        placeholder="Berlin"
        do-prevent-numbers
        class="mb-9"
      />
    </div>
    <div class="flex justify-end gap-5 items-center">
      <CtaButton text="Cancel" outlined @click="handleAbort()" />
      <CtaButton
        v-if="isEdit"
        text="Update driver"
        :disabled="!isValid"
        @click="handleDriverUpdate()"
      />
      <CtaButton
        v-else
        text="Add new driver"
        :disabled="!isValid"
        @click="handleNewDriver()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ModalContent } from '~/composables/modal';
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';

const props = defineProps({
  content: {
    type: String as PropType<ModalContent>,
    required: true,
  },
});

const store = useMainStore();
const { addDriver, clearDriver, updateDriver, fetchDrivers } = store;
const { driver: storeDriver, driverIndex } = storeToRefs(store);

const emit = defineEmits(['close', 'driversUpdate']);

const handleNewDriver = async () => {
  await addDriver(driver);
  await fetchDrivers();
  emit('close');
};
const handleAbort = () => {
  clearDriver();
  emit('close');
};
const handleDriverUpdate = async () => {
  await updateDriver('server', driverIndex.value, driver);
  await fetchDrivers();
  emit('close');
};

// Locally stored driver that gets updated on the server after confirmation
const driver = reactive({
  name: storeDriver.value.name,
  location: storeDriver.value.location,
});
const isEdit = computed(() => props.content === ModalContent.EditDriver);
const isValid = useAllFieldsFilled(driver);
</script>
