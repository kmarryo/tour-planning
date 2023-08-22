import { tours } from './tours';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  tours.push(body);
  return { tours };
});
