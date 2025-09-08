import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import styles from './LoginCard.module.css';
import { Link } from 'react-router-dom';

const LoginCard = () => {
  return (
    <Card className={styles.card}>
      <h1>
        Bienvenido a <span>YAQBOT</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit justo, molestie eu eleifend sit amet, rhoncus vitae est. Etiam varius interdum ligula ac euismod.</p>
      <Link to={'/signin'} style={{ textAlign: 'start' }}>
        <Button className={styles.button} label='Crear Usuario' type='button' onClick={() => console.log('ahi voy!')} />
      </Link>
    </Card>
  );
};

export default LoginCard;
