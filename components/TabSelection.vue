<template>
  <section class="flex flex-wrap gap-5">
    <Tab
      v-for="(tab, index) in tabs"
      :label="tab"
      :is-active="index === currentTabIndex"
      class="group"
      @click="updateTabIndex(index)"
    >
      <template #default>
        <svg
          v-if="index === 0"
          viewBox="0 0 24 24"
          id="steering-wheel"
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white icon flat-color group-hover:fill-white"
          :class="{
            'fill-white': index === currentTabIndex,
            'fill-gray-800': index !== currentTabIndex,
          }"
        >
          <path
            id="primary"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8,8,0,0,1,7.38,4.92A29.93,29.93,0,0,0,12,8a29.63,29.63,0,0,0-7.4.94A8,8,0,0,1,12,4ZM4,12.67l1.11-.13A4.38,4.38,0,0,1,10,16.89v2.85A8,8,0,0,1,4,12.67Zm10,7.07V16.89a4.38,4.38,0,0,1,4.86-4.35l1.11.13A8,8,0,0,1,14,19.74Z"
          ></path>
        </svg>
        <svg
          v-else-if="index === 1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 group-hover:fill-white"
          :class="{ 'fill-white': index === currentTabIndex }"
        >
          <path
            d="M8.57385 20.3523L11.9553 13.5894C11.9737 13.5526 12.0263 13.5526 12.0447 13.5894L15.4261 20.3523C15.4483 20.3965 15.3996 20.4426 15.3566 20.4181L12.0248 18.5142C12.0094 18.5054 11.9906 18.5054 11.9752 18.5142L8.64338 20.4181C8.60043 20.4426 8.55173 20.3965 8.57385 20.3523Z"
            stroke="#33363F"
            stroke-linecap="round"
            class="group-hover:stroke-white"
            :class="{ 'stroke-white': index === currentTabIndex }"
          />
          <path
            d="M20.5 18.5L16.5 3.5"
            stroke="#33363F"
            stroke-linecap="round"
            class="group-hover:stroke-white"
            :class="{ 'stroke-white': index === currentTabIndex }"
          />
          <path
            d="M3.5 18.5L7.5 3.5"
            stroke="#33363F"
            stroke-linecap="round"
            class="group-hover:stroke-white"
            :class="{ 'stroke-white': index === currentTabIndex }"
          />
          <path
            d="M12 10.5V8.5"
            stroke="#33363F"
            stroke-linecap="round"
            class="group-hover:stroke-white"
            :class="{ 'stroke-white': index === currentTabIndex }"
          />
          <path
            d="M12 5.5V3.5"
            stroke="#33363F"
            stroke-linecap="round"
            class="group-hover:stroke-white"
            :class="{ 'stroke-white': index === currentTabIndex }"
          />
        </svg>
      </template>
    </Tab>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  tabs: {
    type: Array as PropType<string[]>,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const currentTabIndex = useModelWrapper(props, emit);

const updateTabIndex = (index: number) => (currentTabIndex.value = index);
</script>
