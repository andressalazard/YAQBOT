import Card from '../../atoms/Card';
import styles from './LoginCard.module.css';
import NavigationButton from '../NavigationButton';
import Logo from '../../atoms/Logo';

const LoginCard = () => {
  return (
    <Card
      className={`${styles.card} !bg-white/60 !py-10 backdrop-blur-sm text-gray-800 w-full md:w-[90%] lg:w-[50%] h-auto md:h-[60%] py-10 md:py-10`}
    >
      <Logo
        className={`${styles.logo} w-[200px] md:w-[280px] lg:w-[350px] text-3xl md:text-4xl lg:text-5xl`}
      />
      <p className="my-4 text-justify text-sm md:text-base lg:text-lg px-2 md:px-4">
        Descubre <span className="text-green-700 font-bold">YAQBOT</span>, tu plataforma completa
        para el cuidado de plantas. Compra plantas perfectas para tu hogar, registra y monitorea su
        crecimiento, comparte tu jardín con amigos, controla el riego con IoT y consulta el clima de
        tu ciudad. ¡Todo en un solo lugar!
      </p>
      <NavigationButton
        buttonProps={{
          label: 'Crear Cuenta!',
          type: 'button',
          className: `${styles.button} w-full md:w-[60%] lg:w-[50%] hover:!bg-green-900 transition-all duration-300 ease-in-out text-sm md:text-base`,
        }}
        navigateTo="/register"
      />
    </Card>
  );
};

export default LoginCard;
