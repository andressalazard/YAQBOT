import Card from '../../atoms/Card';
import ProfileDetails from '../../organisms/ProfileDetails/ProfileDetails';
import ProfilePhoto from '../../organisms/ProfilePhoto/ProfilePhoto';
import ProfileSocials from '../../organisms/ProfileSocials/ProfileSocials';
import styles from './profileTemplate.module.css';

const ProfileTemplate = () => {
  return (
    <Card className={styles.profile}>
      <ProfilePhoto
        imageProps={{
          src: 'https://i.pinimg.com/736x/41/b5/a0/41b5a032357cdfc37cee0d527fb6d18f.jpg',
          alt: 'Profile Photo',
        }}
        headerProps={{
          profileName: 'John Doe',
          profileRole: 'User',
        }}
      />

      <ProfileDetails
        bioDetails={[
          { label: 'Nombre', description: 'John Doe' },
          { label: 'Mi ciudad o Región', description: 'New York, USA' },
          { label: 'Usuario', description: 'johndoe123' },
          { label: 'Email', description: 'johndoe@email.com' },
          { label: 'Teléfono', description: '+1 234 567 890' },
          { label: 'Estado', description: 'Activo' },
        ]}
      />

      <ProfileSocials
        socialLinks={[
          { platform: 'facebook', href: 'https://www.facebook.com' },
          { platform: 'twitter', href: 'https://www.x.com' },
          { platform: 'instagram', href: 'https://www.instagram.com' },
          { platform: 'tiktok', href: 'https://www.tiktok.com' },
          { platform: 'youtube', href: 'https://www.youtube.com' },
        ]}
      />
    </Card>
  );
};

export default ProfileTemplate;
