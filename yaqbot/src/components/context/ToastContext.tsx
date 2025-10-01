import React, { createContext, useCallback, useContext, useState } from 'react';
import { Toast } from '../../models/types';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../molecules/ToastContainer/ToastContainer';

interface ToastContextType {
  addToast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast['type'] = 'info') => {
    const id = uuidv4();
    const newToast: Toast = { id, message, type };
    setToasts((prevState) => [...prevState, newToast]);

    setTimeout(() => {
      setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
