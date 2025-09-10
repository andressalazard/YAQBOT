import Card from '../../atoms/Card';
import SigninForm from '../../organisms/SigninForm/SigninForm';
import styles from './Signin.module.css';
const SigninOrganism = () => {
  return (
    <div className={styles.body}>
      <Card className={styles.card}>
        <SigninForm />
      </Card>
    </div>
  );
};

export default SigninOrganism;
