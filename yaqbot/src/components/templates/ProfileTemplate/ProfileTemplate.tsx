import { useProfile } from '../../context/ProfileContext';
import { useAppSelector } from '../../../hooks/hook';
import Card from '../../atoms/Card';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import ProfileDetails from '../../organisms/ProfileDetails/ProfileDetails';
import ProfilePhoto from '../../organisms/ProfilePhoto/ProfilePhoto';
import ProfileSocials from '../../organisms/ProfileSocials/ProfileSocials';
import UpdateProfile from '../../organisms/UpdateProfile/UpdateProfile';
import styles from './profileTemplate.module.css';
import UpdateAvatar from '../../organisms/UpdateAvatar/UpdateAvatar';
import Spinner from '../../atoms/Spinner/Spinner';

const ProfileTemplate = () => {
  const { isEditing, isPicEditing } = useProfile();
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);

  if (!profile || !user) {
    return <Spinner />;
  }

  return (
    <div className={styles.page}>
      <Header
        userAvatar={profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'}
        navMenu={[{ label: 'Tienda', href: '/marketplace' }]}
        profileMenuHeader={{
          username: user?.username || 'testUser',
          email: user?.email || 'test@email.com',
          photo: profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
        }}
        profileMenuOptions={[
          { title: 'Configuración', icon: 'settings', navigateTo: '/settings', type: 'settings' },
          { title: 'Cerrar Sesión', icon: 'logout', type: 'logout' },
        ]}
      />
      {isEditing ? (
        <UpdateProfile />
      ) : isPicEditing ? (
        <UpdateAvatar imageURL={profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'} />
      ) : (
        <Card className={styles.profile}>
          <ProfilePhoto
            imageProps={{
              src: profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
              alt: 'Profile Photo',
            }}
            headerProps={{
              profileName: profile?.fullname || 'John Doe',
              profileRole: 'User',
            }}
          />

          <ProfileDetails
            bioDetails={[
              { label: 'Nombre', description: profile?.fullname || 'John Doe' },
              { label: 'Mi ciudad o Región', description: profile?.region || 'New York, USA' },
              { label: 'Usuario', description: user?.username || 'johndoe123' },
              { label: 'Email', description: user?.email || 'johndoe@email.com' },
              { label: 'Teléfono', description: profile?.phone || '+1 234 567 890' },
              { label: 'Estado', description: 'Activo' },
            ]}
          />

          <ProfileSocials
            socialLinks={
              profile?.socialLinks || [
                { name: 'facebook', url: 'https://www.facebook.com' },
                { name: 'twitter', url: 'https://www.x.com' },
                { name: 'instagram', url: 'https://www.instagram.com' },
                { name: 'tiktok', url: 'https://www.tiktok.com' },
                { name: 'youtube', url: 'https://www.youtube.com' },
              ]
            }
          />
        </Card>
      )}
      <Footer />
    </div>
  );
};

export default ProfileTemplate;
