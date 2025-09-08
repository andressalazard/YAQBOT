import Card from '../../atoms/Card';
import LoginCard from '../../molecules/LoginCard/LoginCard';
import LoginForm from '../../molecules/Forms/LoginForm';
import styles from './Login.module.css';

const LoginOrganism = () => {
  return (
    <Card className={styles.card}>
      <LoginCard />
      <LoginForm />
    </Card>
  );
};

export default LoginOrganism;
