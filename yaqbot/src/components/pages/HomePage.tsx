import { ProfileProvider } from '../context/ProfileContext';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';

function HomePage() {
  return (
    <ProfileProvider>
      <HomeTemplate />
    </ProfileProvider>
  );
}

export default HomePage;
