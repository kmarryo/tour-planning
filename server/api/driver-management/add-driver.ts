import { drivers } from './drivers';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  drivers.push(body);
  return { drivers };
});
