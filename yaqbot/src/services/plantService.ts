import { fetchData } from '../api/apiClient';
import { catalogPlant } from '../models/dataModel';

const PLANT_ENDPOINT = 'plants';

const getAvailablePlants = async (): Promise<catalogPlant[]> => {
  return fetchData(`${PLANT_ENDPOINT}/catalog`);
};

export { getAvailablePlants };
