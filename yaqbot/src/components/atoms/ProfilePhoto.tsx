import Image from './Image';

interface ProfilePhotoProps {
  src: string;
  className?: string;
  handleClick?: () => void;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, className, handleClick }) => {
  return <Image src={src} alt='plain_profile' className={className} handleClick={handleClick} />;
};

export default ProfilePhoto;
