import { tours } from './tours';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { index, ...tourInfos } = body;
  tours[index] = { ...tourInfos };
  return { tours };
});
