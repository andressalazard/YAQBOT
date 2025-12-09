import { fetchData } from '../api/apiClient';

const DEVICE_ENPOINT = 'yaqbot';

const pumpWater = async (): Promise<void> => {
  return fetchData(`${DEVICE_ENPOINT}/pump-water`);
};

export { pumpWater };
