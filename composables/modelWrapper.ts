import { computed } from 'vue';

export const useModelWrapper = (
  props: { [k: string]: unknown },
  emit: any,
  name = 'modelValue'
) => {
  const modelWrapper = computed({
    get: () => props[name],
    set: (value: any) => {
      emit(`update:${name}`, value);
    },
  });
  return modelWrapper;
};
