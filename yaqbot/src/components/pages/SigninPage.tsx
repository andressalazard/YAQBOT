import { ProfileProvider } from '../context/ProfileContext';
import Signin from '../organisms/Signin/Signin';
import SigninTemplate from '../templates/SigninTemplate/SigninTemplate';

const SigninPage = () => {
  return (
    <ProfileProvider>
      {/* <Signin /> */}
      {<SigninTemplate />}
    </ProfileProvider>
  );
};

export default SigninPage;
