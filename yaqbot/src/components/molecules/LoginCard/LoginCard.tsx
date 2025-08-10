import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import styles from './LoginCard.module.css';

const LoginCard = () => {
  return (
    <Card className={styles.card}>
      <h1>
        Bienvenido a <span>YAQBOT</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit justo, molestie eu eleifend sit amet, rhoncus vitae est. Etiam varius interdum ligula ac euismod.</p>
      <Button className={styles.button} label='Crear Usuario' type='button' onClick={() => console.log('ahi voy!')} />
    </Card>
  );
};

export default LoginCard;
