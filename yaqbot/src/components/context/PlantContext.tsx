import React, { useContext, useState } from 'react';
import { catalogPlant, NewOwnership, PlantDetails, retrievedPlant } from '../../models/dataModel';
import {
  getAvailablePlants,
  getOwnerPlants,
  getUserPlantDetails,
  registerNewPlant,
} from '../../services/plantService';

interface PlantContextType {
  plantsCatalog: catalogPlant[];
  getPlantsCatalog: () => void;

  userPlants: retrievedPlant[];
  getUserPlants: (userid: string) => void;

  isEditing: boolean;
  changeEdition: () => void;
  chosenPlantId: string;
  setChosenPlantId: (id: string) => void;

  plantDetails: PlantDetails | null;
  getPlantDetails: (ownedplantid: string) => void;

  isLoading: boolean;

  publishNewUserPlant: (data: NewOwnership) => void;
}

//context
export const PlantContext = React.createContext<PlantContextType | undefined>(undefined);

//provider
export const PlantProvider = ({ children }: { children: React.ReactNode }) => {
  const [plantsCatalog, setPlantsCatalog] = useState<catalogPlant[]>([]);
  const [userPlants, setUserPlants] = useState<retrievedPlant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const [chosenPlantId, setChosenPlantId] = useState<string>('');
  const [plantDetails, setPlantDetails] = useState<PlantDetails | null>(null);

  const changeEdition = () => {
    setIsEditing((prevStatus) => (prevStatus === false ? true : false));
    console.log('this is now', isEditing);
  };

  const getPlantsCatalog = async () => {
    const catalog = await getAvailablePlants();
    setPlantsCatalog(catalog);
  };

  const getUserPlants = async (userid: string) => {
    const ownedPlants = await getOwnerPlants(userid);
    setUserPlants(ownedPlants);
  };

  const getPlantDetails = async (ownedPlantId: string) => {
    setIsLoading(true);
    try {
      const detailsData = await getUserPlantDetails(ownedPlantId);
      setPlantDetails(detailsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const publishNewUserPlant = async (newPlantRecord: NewOwnership) => {
    return await registerNewPlant(newPlantRecord);
  };

  return (
    <PlantContext.Provider
      value={{
        plantsCatalog,
        getPlantsCatalog,
        isLoading,
        isEditing,
        changeEdition,
        chosenPlantId,
        setChosenPlantId,
        userPlants,
        getUserPlants,
        publishNewUserPlant,
        plantDetails,
        getPlantDetails,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};

//hook
export const usePlant = (): PlantContextType => {
  const context = useContext(PlantContext);
  return context || ({} as PlantContextType);
};
