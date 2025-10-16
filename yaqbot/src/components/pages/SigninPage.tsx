import { ProfileProvider } from '../context/ProfileContext';
import SigninTemplate from '../templates/SigninTemplate/SigninTemplate';

const SigninPage = () => {
  return <ProfileProvider>{<SigninTemplate />}</ProfileProvider>;
};

export default SigninPage;
