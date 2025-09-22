import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useAlert } from './AlertContext';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { setUserProfile } from '../../features/auth/authSlice';

type genderType = 'MALE' | 'FEMALE' | 'OTHER';
type editionFlags = 'PROFILE' | 'AVATAR';
interface AccountFormat {
  username?: string;
  email?: string;
}
interface ProfileFormat {
  fullname?: string;
  phone?: string;
  region?: string;
  address?: string;
  birthday?: string;
  gender?: genderType;
}
interface ProfileContextType {
  isEditing: boolean;
  isPicEditing: boolean;
  toggleEditing: (flag: editionFlags) => void;

  fetchUserProfile: () => void;
  //account
  getNewAccount: () => AccountFormat;
  handleNewAccountChange: (field: string, value: string) => void;

  //profile
  getNewProfile: () => ProfileFormat;
  handleNewProfileChange: (field: string, value: string) => void;

  updateUserData: (newAccount?: AccountFormat, newProfile?: ProfileFormat) => void;
  updateUserAvatar: (file: File) => void;
}
const API_URL = 'http://localhost:3000/api';

export const ProfileContext = React.createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { toggleAlert } = useAlert();

  const [isEditing, SetIsEditing] = useState(false);
  const [isPicEditing, SetIsPicEditing] = useState(false);
  const toggleEditing = (flag: editionFlags) => {
    if (flag === 'PROFILE') {
      SetIsEditing((prevState) => (prevState === true ? false : true));
    }

    if (flag === 'AVATAR') {
      SetIsPicEditing((prevState) => (prevState === true ? false : true));
    }
  };

  useEffect(() => {
    if (isEditing === false) {
      setNewAccount({});
      setNewProfile({});
    }
  }, [isEditing]);

  //account
  const [newAccount, setNewAccount] = useState({});
  const getNewAccount = () => {
    return newAccount;
  };
  const handleNewAccountChange = (field: string, value: string) => {
    setNewAccount((prevState) => ({ ...prevState, [field]: value }));
  };

  //profile
  const [newProfile, setNewProfile] = useState({});
  const getNewProfile = () => {
    return newProfile;
  };
  const handleNewProfileChange = (field: string, value: string) => {
    setNewProfile((prevState) => ({ ...prevState, [field]: value }));
  };

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const fetchUserProfile = async () => {
    try {
      if (user === null) {
        toggleAlert('Usuario no encontrado', 'error');
        return;
      }
      const response = await fetch(`${API_URL}/profile/${user?.id}`);

      if (!response.ok) toggleAlert('Error al obtener la información del usuario', 'error');

      const data = await response.json();
      const profileData = { ...data, birthday: formatDate(data.birthday) };

      dispatch(setUserProfile(profileData));
    } catch (error) {
      toggleAlert(`Error interno del sistema: ${error}`, 'error');
    }
  };

  //account
  const updateUserAccount = async (updatedAccount: AccountFormat) => {
    try {
      const response = await fetch(`${API_URL}/users/${user?.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAccount),
      });

      if (!response.ok) {
        toggleAlert('Error al actualizar la cuenta del usuario', 'error');
      }
    } catch (error) {
      toggleAlert(`Error interno: ${error}`, 'error');
    }
  };

  //profile
  const updateUserProfile = async (updatedData: ProfileFormat) => {
    try {
      const response = await fetch(`${API_URL}/profile/${user?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        toggleAlert('Error al actualizar el perfil del usuario', 'error');
      }
    } catch (error) {
      toggleAlert(`Error interno: ${error}`, 'error');
    }
  };

  const updateUserData = (userAccount?: AccountFormat, userProfile?: ProfileFormat) => {
    if (userAccount && Object.keys(userAccount).length > 0) {
      updateUserAccount(userAccount);
    }

    if (userProfile && Object.keys(userProfile).length > 0) {
      updateUserProfile(userProfile);
    }

    toggleAlert('Los datos del Usuario fueron actualizados con éxito', 'success');
  };

  const updateUserAvatar = async (file: File | undefined) => {
    try {
      if (user === null) {
        toggleAlert('Usuario no encontrado', 'error');
        return;
      }

      if (!file) {
        throw new Error('url is missing');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_URL}/profile/photo/${user?.id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Internal error while uploading the image');
      }

      toggleAlert('Foto de perfil actualizado con éxito', 'success');
    } catch (error) {
      toggleAlert('Error al actualizar el avatar del usuario ' + error, 'error');
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        fetchUserProfile,
        isEditing,
        isPicEditing,
        toggleEditing,
        handleNewProfileChange,
        getNewProfile,
        updateUserData,
        getNewAccount,
        handleNewAccountChange,
        updateUserAvatar,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const UseProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  return context || ({} as ProfileContextType);
};
