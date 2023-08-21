import { tours } from './tours';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const { index, ...tourInfos } = body;
  tours[index] = { ...tourInfos };
  return { tours };
});
