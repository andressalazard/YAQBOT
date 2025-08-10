import LoginForm from '../../molecules/LoginForm/LoginForm';
import LoginCard from '../../molecules/LoginCard/LoginCard';
import Card from '../../atoms/Card';
import styles from '.././LoginPage/LoginPage.module.css';

const LoginPage = () => {
  return (
    <Card className={styles.card}>
      <LoginCard />
      <LoginForm />
    </Card>
  );
};

export default LoginPage;
