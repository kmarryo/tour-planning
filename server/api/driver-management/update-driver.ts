import { drivers } from './drivers';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const { index, ...driverInfos } = body;
  drivers[index] = { ...driverInfos };
  return { drivers };
});
