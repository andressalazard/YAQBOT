import React from 'react';
import { useAppSelector } from '../../../hooks/hook';
import Card from '../../atoms/Card';
import ProfileForm from '../ProfileForm/ProfileForm';
import styles from './UpdateProfile.module.css';
import { UseProfile } from '../../context/ProfileContext';

const UpdateProfile: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const profile = useAppSelector((state) => state.auth.profile);
  const { toggleEditing } = UseProfile();

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
          toggleEditing();
        }}
      />
    </Card>
  );
};
export default UpdateProfile;
