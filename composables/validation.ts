export const useAllFieldsFilled = (object: { [key: string]: string }) =>
  computed(() => {
    const allValues = Object.values(object);
    const validValues = allValues.filter((value) => {
      const regex = /[a-zA-Z].*[a-zA-Z].*[a-zA-Z]|^\d{2}\.\d{2}\.\d{4}$/;
      return regex.test(value);
    });
    return allValues.length === validValues.length;
  });
