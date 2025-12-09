import { fetchData, postData } from '../api/apiClient';
import { catalogPlant, NewOwnership, PlantDetails, retrievedPlant } from '../models/dataModel';

const PLANT_ENDPOINT = 'plants';

const getAvailablePlants = async (): Promise<catalogPlant[]> => {
  return fetchData(`${PLANT_ENDPOINT}/catalog`);
};

const getOwnerPlants = async (userid: string): Promise<retrievedPlant[]> => {
  return fetchData(`${PLANT_ENDPOINT}/owned-by/${userid}`);
};

const getUserPlantDetails = async (ownedplantid: string): Promise<PlantDetails> => {
  return fetchData(`${PLANT_ENDPOINT}/owned/${ownedplantid}`);
};

const registerNewPlant = async (
  data: NewOwnership | undefined = { userid: '', plant: { id: '', nickname: '' } }
) => {
  return postData(`${PLANT_ENDPOINT}/new-ownership`, data);
};

export { getAvailablePlants, getOwnerPlants, getUserPlantDetails, registerNewPlant };
