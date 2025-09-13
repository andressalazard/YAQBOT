import Card from '../../atoms/Card';
import styles from './LoginCard.module.css';
import NavigationButton from '../NavigationButton';
import Logo from '../../atoms/Logo';

const LoginCard = () => {
  return (
    <Card className={styles.card}>
      <Logo className={styles.logo} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit justo, molestie eu eleifend sit amet, rhoncus vitae est. Etiam varius interdum ligula ac euismod.</p>
      <NavigationButton
        buttonProps={{
          label: 'Crear Cuenta',
          type: 'button',
          className: styles.button,
        }}
        navigateTo='/signin'
      />
    </Card>
  );
};

export default LoginCard;
