import React from 'react';

type profileRoles = 'Admin' | 'User' | 'Guest';

interface ProfilePhotoHeaderProps {
  className?: string;
  profileName: string;
  profileRole?: profileRoles | 'User';
}

const ProfilePhotoHeader: React.FC<ProfilePhotoHeaderProps> = ({
  className,
  profileName,
  profileRole,
}) => {
  return (
    <div className={className}>
      <h2 className="font-bold text-white">{profileName}</h2>
      <span className="text-white">{profileRole}</span>
    </div>
  );
};

export default ProfilePhotoHeader;
