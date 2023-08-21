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
        @click="handleDriverUpdate()"
      />
      <CtaButton v-else text="Add new driver" @click="handleNewDriver()" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store/main';
import { ModalContent } from './DriverManagement.vue';

const props = defineProps({
  content: {
    type: String as PropType<ModalContent>,
    required: true,
  },
});

const store = useMainStore();
const { addDriver, clearDriver, updateDriver } = store;
const { driver: storeDriver, driverIndex } = storeToRefs(store);

const emit = defineEmits(['close', 'driversUpdate']);

const handleNewDriver = () => {
  addDriver(driver);
  emit('close');
  emit('driversUpdate');
};
const handleAbort = () => {
  clearDriver();
  emit('close');
};
const handleDriverUpdate = () => {
  updateDriver('server', driverIndex.value, driver);
  emit('close');
  emit('driversUpdate');
};

// Locally stored driver that gets updated on the server after confirmation
const driver = reactive({
  name: storeDriver.value.name,
  location: storeDriver.value.location,
});
const isEdit = computed(() => props.content === ModalContent.EditDriver);
</script>
