import React from 'react';
import { useAppSelector } from '../../../hooks/hook';
import Card from '../../atoms/Card';
import ProfileForm from '../ProfileForm/ProfileForm';
import styles from './UpdateProfile.module.css';
import { useProfile } from '../../context/ProfileContext';

const UpdateProfile: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);
  const { toggleEditing, updateUserData } = useProfile();

  const handleSubmit = () => {
    updateUserData();
    setTimeout(() => {
      toggleEditing('PROFILE');
    }, 3000);
  };

  return (
    <Card className={styles.update_profile}>
      <header className={styles.header}>Actualizar datos del perfil</header>
      <ProfileForm
        userAccount={{ username: user?.username, email: user?.email }}
        userLocation={{ region: profile?.region, address: profile?.address }}
        userProfile={{
          fullname: profile?.fullname,
          phone: profile?.phone,
          birthday: profile?.birthday,
          gender: profile?.gender,
          bio: profile?.bio,
        }}
        handleCancel={() => {
          toggleEditing('PROFILE');
        }}
        handleSubmit={() => {
          handleSubmit();
        }}
      />
    </Card>
  );
};
export default UpdateProfile;
