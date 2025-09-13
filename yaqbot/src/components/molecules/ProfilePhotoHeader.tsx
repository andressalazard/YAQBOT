import React from 'react';

type profileRoles = 'Admin' | 'User' | 'Guest';

interface ProfilePhotoHeaderProps {
  className?: string;
  profileName: string;
  profileRole?: profileRoles | 'User';
}

const ProfilePhotoHeader: React.FC<ProfilePhotoHeaderProps> = ({ className, profileName, profileRole }) => {
  return (
    <div className={className}>
      <h1>{profileName}</h1>
      <span>{profileRole}</span>
    </div>
  );
};

export default ProfilePhotoHeader;
