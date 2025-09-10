import Card from '../../atoms/Card';
import Toast from '../../atoms/Toast';
import { useAlert } from '../../context/AlertContext';
import SigninForm from '../../organisms/SigninForm/SigninForm';
import styles from './Signin.module.css';
const SigninOrganism = () => {
  const { isAwake } = useAlert();
  return (
    <div className={styles.body}>
      <Card className={styles.card}>
        <SigninForm />
      </Card>

      <>{isAwake === true ? <Toast className={styles.toast} /> : <></>}</>
    </div>
  );
};

export default SigninOrganism;
