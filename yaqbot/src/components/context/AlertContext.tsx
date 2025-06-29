import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Toast from '../atoms/Toast/Toast';

type AlertMode = 'success' | 'info' | 'warning' | 'error' | 'none';

interface AlertContextType {
  message: string;
  mode?: AlertMode;
  isAwake: boolean;
  toggleAlert: (newMessage: string, newMode: AlertMode) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

/*Alert Provider*/
export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [isAwake, setIsAwake] = useState(false);
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState<AlertMode>('none');

  const toggleAlert = (newMessage: string, newMode: AlertMode) => {
    console.log('ToggleAlert here');
    console.log(message + ' ' + isAwake);
    setMessage(newMessage);
    setIsAwake(true);
    setMode(newMode);
  };

  const clearAlert = () => {
    setMessage('');
    setIsAwake(false);
    setMode('none');
    console.log('me fui');
  };

  useEffect(() => {
    const timerId = setTimeout(() => clearAlert(), 3000);
    return () => {
      clearInterval(timerId);
    };
  }, [message]);

  return <AlertContext.Provider value={{ message, toggleAlert, isAwake, mode }}>{children}</AlertContext.Provider>;
};

/*Alert hook*/
export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  return context || { message: 'hola Andrés', isAwake: false, toggleAlert: () => {} };
};

export default AlertContext;
