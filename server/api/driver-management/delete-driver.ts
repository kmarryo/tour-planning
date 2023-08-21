import { drivers } from './drivers';

export default defineEventHandler(async (event) => {
  const { index: driverIndex } = await readBody(event);
  drivers.splice(driverIndex, 1);
  return drivers;
});
