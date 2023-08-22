<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="flex w-full justify-center gap-x-1.5 rounded-md bg-white pl-5 pr-3 py-2 font-semiboldshadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {{ buttonText }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 translate-y-0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute left-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem
            as="div"
            v-for="item in items"
            :key="item.label"
            class="w-80 px-5 py-2 cursor-pointer"
            :class="{
              'bg-indigo-800 hover:bg-indigo-600 text-white':
                item.selectable && isActive(item),
              'hover:bg-gray-200': item.selectable && !isActive(item),
              'cursor-text': !item.selectable,
            }"
            @click="updateSelected(item)"
          >
            {{ item.label }}
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
type Item = {
  label: string;
  value: unknown;
  selectable: boolean;
};
const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Please select an option',
  },
});

const emit = defineEmits(['update:modelValue']);

const selectedOption = useModelWrapper(props, emit);
const buttonText = computed(() => {
  return selectedOption.value || props.placeholder;
});
const updateSelected = (item: Item) => {
  if (!item.selectable) return;
  selectedOption.value = item.label;
};

const isActive = (item: Item) => {
  return selectedOption.value === item;
};
</script>
