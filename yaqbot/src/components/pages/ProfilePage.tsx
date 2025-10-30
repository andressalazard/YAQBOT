import { ProfileProvider } from '../context/ProfileContext';
import ProfileTemplate from '../templates/ProfileTemplate/ProfileTemplate';

const ProfilePage = () => {
  return (
    <ProfileProvider>
      <ProfileTemplate />
    </ProfileProvider>
  );
};

export default ProfilePage;
