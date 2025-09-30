import { ProfileProvider } from '../context/ProfileContext';
import Signin from '../organisms/Signin/Signin';

const SigninPage = () => {
  return (
    <ProfileProvider>
      <Signin />
    </ProfileProvider>
  );
};

export default SigninPage;
