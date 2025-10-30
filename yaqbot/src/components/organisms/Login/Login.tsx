import Card from '../../atoms/Card';
import LoginCard from '../../molecules/LoginCard/LoginCard';
import LoginForm from '../LoginForm/LoginForm';
import styles from './Login.module.css';

const LoginOrganism = () => {
  return (
    <div>
      <Card className={styles.card}>
        <LoginCard />
        <LoginForm />
      </Card>
    </div>
  );
};
export default LoginOrganism;
