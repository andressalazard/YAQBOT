import HeaderImage from '../../atoms/HeaderImage';
import LoginForm from './LoginForm';

const LoginAdmin = () => {
  return (
    <div>
      <HeaderImage imageUrl="" height="20vh" overlayOpacity={0.6}>
        <h1 className="text-white text-5xl font-bold">🌿 Bienvenido a YaqBot</h1>
        <p className="text-white text-xl">Las mejores plantas para tu hogar</p>
      </HeaderImage>
      <HeaderImage height="80vh" imageUrl="/bg/plants-2.webp" overlayOpacity={0.4}>
        <LoginForm />
      </HeaderImage>
    </div>
  );
};
export default LoginAdmin;
