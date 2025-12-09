import { useState, createContext, ReactNode, useContext } from 'react';

type profileMenuStatus = 'on' | 'off';
type Theme = 'light' | 'dark';

interface SettingsType {
  menuStatus: profileMenuStatus;
  toggleMenuStatus: () => void;
  theme: Theme;
  toggleTheme: () => void;
  getGeolocation: () => void;
  location?: { lat: number; lon: number } | null;
}
//context
export const SettingsContext = createContext<SettingsType | undefined>(undefined);

//provider
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [menuStatus, setMenuStatus] = useState<profileMenuStatus>('off');
  const [theme, setTheme] = useState<Theme>('light');
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  const toggleMenuStatus = () => {
    setMenuStatus((prevStatus) => (prevStatus === 'off' ? 'on' : 'off'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          throw new Error('Error getting coordinates: ' + error.message);
        }
      );
    }
  };

  return (
    <SettingsContext.Provider
      value={{ menuStatus, toggleMenuStatus, theme, toggleTheme, location, getGeolocation }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

//hook personalizado
export const useSettings = (): SettingsType => {
  const context = useContext(SettingsContext);
  return context || ({} as SettingsType);
};
