import React, { ReactNode, useContext, useEffect, useState } from 'react';

//interface for the context
interface AuthContextType {
  token: string | null;
  errorMessage: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>; //because we are going to fetch token from API
  logout: () => void;
}

//create the context
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

//create the provider
//this is the component that will wrap the app and provide the context to all components
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Error al Logear');

      const data = await response.json();
      setToken(data.token);
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

  useEffect(() => {
    console.log('token actualizado: ', token);
  }, [token]);

  return <AuthContext.Provider value={{ token, errorMessage, isLoading, isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context || ({} as AuthContextType);
};
