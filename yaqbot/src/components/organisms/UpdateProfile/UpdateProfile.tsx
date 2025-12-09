import React from 'react';
import { useAppSelector } from '../../../hooks/hook';
import Card from '../../atoms/Card';
import ProfileForm from '../ProfileForm/ProfileForm';
import { useProfile } from '../../context/ProfileContext';

const UpdateProfile: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);
  const { toggleEditing, updateUserData } = useProfile();

  const handleSubmit = () => {
    updateUserData();
    setTimeout(() => {
      toggleEditing('PROFILE');
    }, 100);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto bg-gradient-to-br from-yellow-100 to-lime-200 p-4 md:p-6 lg:p-8 text-black shadow-xl rounded-2xl">
      <header className="text-left font-semibold text-xl md:text-2xl lg:text-3xl py-2 md:py-4 px-2 mb-4">
        Actualizar datos del perfil
      </header>
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
