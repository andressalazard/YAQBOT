import Toast from '../../atoms/Toast';
import { useAlert } from '../../context/AlertContext';
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  const { isAwake } = useAlert();
  return (
    <footer className={styles.footer}>
      <span>YAQ-Bot &#169; 2025</span>
      <br />
      <span>
        Andrés Salazar - <a href='https://github.com/andressalazard'>andressalazard</a>
      </span>
      <>{isAwake === true ? <Toast className={styles.toast} /> : <></>}</>
    </footer>
  );
};

export default Footer;
