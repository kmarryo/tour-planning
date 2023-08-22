import Fuse from 'fuse.js';
export const useFuse = (itemsToSearch: unknown[], keys?: string[]) => {
  return computed(() => {
    const fuse = new Fuse(itemsToSearch, {
      includeScore: true,
      keys,
      threshold: 0.2,
    });
    return fuse;
  });
};
