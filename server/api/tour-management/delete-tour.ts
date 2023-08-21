import { tours } from './tours';

export default defineEventHandler(async (event) => {
  const { index } = await readBody(event);
  tours.splice(index, 1);
  return tours;
});
