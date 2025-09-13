import Image from './Image';

interface ProfilePhotoProps {
  src: string;
  className?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, className }) => {
  return <Image src={src} alt='plain_profile' className={className} />;
};

export default ProfilePhoto;
