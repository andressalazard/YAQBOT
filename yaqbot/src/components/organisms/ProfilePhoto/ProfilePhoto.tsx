import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import ProfilePhotoHeader from '../../molecules/ProfilePhotoHeader';
import styles from './ProfilePhoto.module.css';
interface ProfilePhotoProps {
  imageProps: {
    src?: string;
    alt: string | 'default img';
  };
  headerProps: {
    profileName: string;
    profileRole?: 'Admin' | 'User' | 'Guest';
  };
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ imageProps, headerProps, position }) => {
  return (
    <Card className={`${styles.profile_photo_card} ${position}`}>
      <ProfilePhotoHeader {...headerProps} className={styles.profile_header} />
      <Image {...imageProps} className={styles.profile_photo} />
      <Icon feature='edit' className={`material-icons ${styles.edit_icon}`} />
    </Card>
  );
};

export default ProfilePhoto;
