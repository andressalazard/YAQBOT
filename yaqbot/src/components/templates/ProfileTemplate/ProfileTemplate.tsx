import { useProfile } from '../../context/ProfileContext';
import { useAppSelector } from '../../../hooks/hook';
import Card from '../../atoms/Card';
import ProfileDetails from '../../organisms/ProfileDetails/ProfileDetails';
import ProfilePhoto from '../../organisms/ProfilePhoto/ProfilePhoto';
import UpdateProfile from '../../organisms/UpdateProfile/UpdateProfile';
import UpdateAvatar from '../../organisms/UpdateAvatar/UpdateAvatar';
import Spinner from '../../atoms/Spinner/Spinner';
import RenderTemplate from '../RenderTemplate/RenderTemplate';

const ProfileTemplate = () => {
  const { isEditing, isPicEditing } = useProfile();
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);

  if (!profile || !user) {
    return <Spinner />;
  }

  return (
    <RenderTemplate>
      {isEditing ? (
        <UpdateProfile />
      ) : isPicEditing ? (
        <UpdateAvatar
          imageURL={
            profile?.avatar ||
            'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'
          }
        />
      ) : (
        <Card className="grid grid-cols-1 lg:grid-cols-[3fr_6fr] gap-4 w-[95%] z-10">
          <ProfilePhoto
            imageProps={{
              src:
                profile?.avatar ||
                'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
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
              {
                label: 'Mi ciudad o Región',
                description: profile?.region || 'New York, USA',
              },
              { label: 'Usuario', description: user?.username || 'johndoe123' },
              {
                label: 'Email',
                description: user?.email || 'johndoe@email.com',
              },
              {
                label: 'Teléfono',
                description: profile?.phone || '+1 234 567 890',
              },
              { label: 'Estado', description: 'Activo' },
            ]}
          />
        </Card>
      )}
    </RenderTemplate>
  );
};

export default ProfileTemplate;
