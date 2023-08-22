import { drivers } from './drivers';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { index, ...driverInfos } = body;
  drivers[index] = { ...driverInfos };
  return { drivers };
});
