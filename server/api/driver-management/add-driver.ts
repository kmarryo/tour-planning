import { drivers } from './drivers';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  drivers.push(body);
  return { drivers };
});
