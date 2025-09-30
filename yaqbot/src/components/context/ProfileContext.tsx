import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { useAlert } from './AlertContext';
import { getProfile, updateProfile, updateAvatar, createProfile } from '../../services/profileService';
import { getUserById, updateUser } from '../../services/userService';
import { NewProfile, UpdatedProfile, UpdatedUser } from '../../models/dataModel';
import { setUser, setProfile } from '../../features/user/userSlice';

type editionFlags = 'ACCOUNT' | 'PROFILE' | 'AVATAR';
interface ProfileContextType {
  isEditing: boolean;
  isPicEditing: boolean;
  updatedUser: UpdatedUser;
  updatedProfile: UpdatedProfile;
  toggleEditing: (flag: editionFlags) => void;
  handleChange: (flag: editionFlags, field: string, value: string) => void;
  getUserData: () => void;
  createUserProfile: () => void;
  updateUserData: () => void;
  updateUserAvatar: (file: File) => void;
}

export const ProfileContext = React.createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userid);
  const { toggleAlert } = useAlert();
  const [isEditing, SetIsEditing] = useState(false);
  const [isPicEditing, SetIsPicEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [updatedProfile, setUpdatedProfile] = useState({});

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
      setUpdatedUser({});
      setUpdatedProfile({});
    }
  }, [isEditing]);

  const handleChange = (flag: editionFlags, field: string, value: string) => {
    if (flag === 'ACCOUNT') {
      setUpdatedUser((prevState) => ({ ...prevState, [field]: value }));
    }

    if (flag === 'PROFILE') {
      setUpdatedProfile((prevState) => ({ ...prevState, [field]: value }));
    }
  };

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const getUserData = useCallback(async () => {
    if (!userId) {
      return;
    }
    const user = await getUserById(userId);
    dispatch(setUser(user));

    const profileData = await getProfile(userId);
    const profile = { ...profileData, birthday: formatDate(profileData.birthday) };
    dispatch(setProfile(profile));
  }, [userId, dispatch]);

  const updateUserData = async () => {
    if (!userId) {
      return;
    }
    if (Object.keys(updatedUser).length > 0) {
      await updateUser(userId, updatedUser);
      toggleAlert('Los datos del Usuario fueron actualizados con éxito', 'success');
    }

    if (Object.keys(updatedProfile).length > 0) {
      await updateProfile(userId, updatedProfile);
      toggleAlert('Los datos del Perfil fueron actualizados con éxito', 'success');
    }
  };

  const updateUserAvatar = async (file: File | undefined) => {
    if (!userId) {
      return;
    }
    if (!file) {
      toggleAlert('Necesita subir un archivo', 'error');
      return;
    }
    await updateAvatar(userId, file);
    toggleAlert('La foto de perfil se actualizó con éxito', 'success');
  };

  const createUserProfile = async (newProfile: NewProfile = {}) => {
    if (!userId) {
      console.log('usuario no encontrado!');
      return;
    }
    try {
      return await createProfile(userId, newProfile);
    } catch (error) {
      toggleAlert(`Error al crear el perfil del usuario ${error}`, 'error');
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        createUserProfile,
        updatedProfile,
        updatedUser,
        getUserData,
        isEditing,
        isPicEditing,
        toggleEditing,
        handleChange,
        updateUserData,
        updateUserAvatar,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  return context || ({} as ProfileContextType);
};
