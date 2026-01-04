import React, { ReactNode, useContext, useState } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import {
  loginSuccess,
  logout,
  signupSuccess,
  loginAdminSuccess,
} from '../../features/auth/authSlice';
import { login, loginAdmin, signin } from '../../services/authService';
import { useToast } from './ToastContext';
//interface for the context
interface AuthContextType {
  isLoading: boolean;
  loginApp: (email: string, password: string) => void;
  loginAdminApp: (email: string, password: string) => void;
  signinApp: (username: string, email: string, password: string) => void;
  logoutApp: () => void;
}

//create the context
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

//create the provider
//this is the component that will wrap the app and provide the context to all components
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { addToast } = useToast();

  const dispatch = useAppDispatch();

  const signinApp = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const payload = await signin({ username, email, password });
      dispatch(signupSuccess({ token: payload.token, userid: payload.userid }));
    } catch (error) {
      addToast(`Error al registrar usuario: ${error}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const loginAdminApp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const payload = await loginAdmin({ email, password });
      //console.log('payload', payload);
      if (payload.token) {
        //console.log('Login exitoso, dispatching loginSuccess');
        dispatch(
          loginAdminSuccess({ token: payload.token, userid: payload.userid, role: payload.role })
        );
      } else {
        addToast(`Ingrese credenciales válidas`, 'error');
      }
    } catch (error) {
      addToast(`Ingrese credenciales válidas`, 'error');
    } finally {
      //run even though is success or error
      setIsLoading(false);
    }
  };

  const loginApp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const payload = await login({ email, password });
      console.log('payload', payload);
      if (payload.token) {
        console.log('Login exitoso, dispatching loginSuccess');
        dispatch(loginSuccess({ token: payload.token, userid: payload.userid }));
      } else {
        addToast(`Ingrese credenciales válidas`, 'error');
      }
    } catch (error) {
      addToast(`Ingrese credenciales válidas`, 'error');
    } finally {
      //run even though is success or error
      setIsLoading(false);
    }
  };

  const logoutApp = () => {
    dispatch(logout());
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoading, loginApp, logoutApp, signinApp, loginAdminApp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context || ({} as AuthContextType);
};
