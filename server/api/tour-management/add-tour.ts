import { tours } from './tours';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  tours.push(body);
  return { tours };
});
