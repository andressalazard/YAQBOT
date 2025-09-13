import Card from '../../atoms/Card';
import LoginCard from '../../molecules/LoginCard/LoginCard';
import LoginForm from '../../molecules/Forms/LoginForm';
import styles from './Login.module.css';
import { useAlert } from '../../context/AlertContext';
import Toast from '../../atoms/Toast';

const LoginOrganism = () => {
  const { isAwake } = useAlert();
  return (
    <div>
      <Card className={styles.card}>
        <LoginCard />
        <LoginForm />
      </Card>
      <>{isAwake === true ? <Toast className={styles.toast} /> : <></>}</>
    </div>
  );
};
export default LoginOrganism;
