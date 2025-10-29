import React, { useContext, useState } from 'react';
import { catalogPlant } from '../../models/dataModel';
import { getAvailablePlants } from '../../services/plantService';

interface PlantContextType {
  plantsCatalog: catalogPlant[];
  getPlantsCatalog: () => void;
  isEditing: boolean;
  changeEdition: () => void;
  chosenPlantId: string;
  setChosenPlantId: (id: string) => void;
}

//context
export const PlantContext = React.createContext<PlantContextType | undefined>(undefined);

//provider
export const PlantProvider = ({ children }: { children: React.ReactNode }) => {
  const [plantsCatalog, setPlantsCatalog] = useState<catalogPlant[]>([]);
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
  return (
    <PlantContext.Provider
      value={{
        plantsCatalog,
        getPlantsCatalog,
        isEditing,
        changeEdition,
        chosenPlantId,
        setChosenPlantId,
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
