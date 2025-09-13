import React, { ReactNode, useContext, useState } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { loginSuccess, signupSuccess } from '../../features/auth/authSlice';
import { useAlert } from './AlertContext';
//interface for the context
interface AuthContextType {
  token: string | null;
  errorMessage: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>; //because we are going to fetch token from API
  logout: () => void;

  signup: (username: string, email: string, password: string) => Promise<void>;
}

const API_URL = 'http://localhost:3000/api';

//create the context
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

//create the provider
//this is the component that will wrap the app and provide the context to all components
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toggleAlert } = useAlert();

  const dispatch = useAppDispatch();

  const signup = async (username: string, email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        toggleAlert('Error al registrar el usuario', 'error');
        return;
      }
      const data = await response.json();
      dispatch(signupSuccess({ token: data.token, user: data.user }));
    } catch (error) {
      toggleAlert(`Error interno: ${error}`, 'error');
    }
  };

  const login = async (email: string, password: string) => {
    //Initial state of login
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'x-api-key': 'reqres-free-v1',   en algun momento se puede utilizar
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Error al Logear');

      const data = await response.json();
      setToken(data.token);

      dispatch(loginSuccess({ token: data.token, user: data.user }));

      setIsLoggedIn(true);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      //run even though is success or error
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setErrorMessage(null);
    setIsLoading(false);
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ token, errorMessage, isLoading, isLoggedIn, login, logout, signup }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context || ({} as AuthContextType);
};
