import { useState, createContext, ReactNode, useContext } from 'react';

type profileMenuStatus = 'on' | 'off';
type Theme = 'light' | 'dark';

interface SettingsType {
  menuStatus: profileMenuStatus;
  toggleMenuStatus: () => void;
  theme: Theme;
  toggleTheme: () => void;
}
//context
export const SettingsContext = createContext<SettingsType | undefined>(undefined);

//provider
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [menuStatus, setMenuStatus] = useState<profileMenuStatus>('off');
  const [theme, setTheme] = useState<Theme>('light');

  const toggleMenuStatus = () => {
    setMenuStatus((prevStatus) => (prevStatus === 'off' ? 'on' : 'off'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <SettingsContext.Provider value={{ menuStatus, toggleMenuStatus, theme, toggleTheme }}>{children}</SettingsContext.Provider>;
};

//hook personalizado
export const useSettings = (): SettingsType => {
  const context = useContext(SettingsContext);
  return context || ({} as SettingsType);
};
