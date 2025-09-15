import React, { ReactNode, useContext } from 'react';
import { useAlert } from './AlertContext';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { setUserProfile } from '../../features/auth/authSlice';

interface ProfileContextType {
  fetchUserProfile: () => void;
  //   updateUserProfile: () => void;
  //   updateUserAvatar: () => void;
}
const API_URL = 'http://localhost:3000/api';

export const ProfileContext = React.createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { toggleAlert } = useAlert();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const fetchUserProfile = async () => {
    try {
      if (user === null) {
        toggleAlert('Usuario no encontrado', 'error');
        return;
      }
      const response = await fetch(`${API_URL}/profile/${user?.id}`);

      if (!response.ok) toggleAlert('Error al obtener la información del usuario', 'error');

      const data = await response.json();
      dispatch(setUserProfile(data));
    } catch (error) {
      toggleAlert(`Error interno del sistema: ${error}`, 'error');
    }
  };

  return <ProfileContext.Provider value={{ fetchUserProfile }}>{children}</ProfileContext.Provider>;
};

export const UseProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  return context || ({} as ProfileContextType);
};
