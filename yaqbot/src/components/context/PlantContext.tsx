import React, { useContext, useState } from 'react';
import { catalogPlant, NewOwnership, retrievedPlant } from '../../models/dataModel';
import { getAvailablePlants, getOwnerPlants, registerNewPlant } from '../../services/plantService';

interface PlantContextType {
  plantsCatalog: catalogPlant[];
  getPlantsCatalog: () => void;

  userPlants: retrievedPlant[];
  getUserPlants: (userid: string) => void;

  isEditing: boolean;
  changeEdition: () => void;
  chosenPlantId: string;
  setChosenPlantId: (id: string) => void;

  publishNewUserPlant: (data: NewOwnership) => void;
}

//context
export const PlantContext = React.createContext<PlantContextType | undefined>(undefined);

//provider
export const PlantProvider = ({ children }: { children: React.ReactNode }) => {
  const [plantsCatalog, setPlantsCatalog] = useState<catalogPlant[]>([]);
  const [userPlants, setUserPlants] = useState<retrievedPlant[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [chosenPlantId, setChosenPlantId] = useState<string>('');

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

  const publishNewUserPlant = async (newPlantRecord: NewOwnership) => {
    return await registerNewPlant(newPlantRecord);
  };

  return (
    <PlantContext.Provider
      value={{
        plantsCatalog,
        getPlantsCatalog,
        isEditing,
        changeEdition,
        chosenPlantId,
        setChosenPlantId,
        userPlants,
        getUserPlants,
        publishNewUserPlant,
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
