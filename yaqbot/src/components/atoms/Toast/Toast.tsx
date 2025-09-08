import { useAlert } from '../../context/AlertContext';
import styles from '../Toast/Toast.module.css';

const Toast = () => {
  const { message, mode } = useAlert();
  return (
    <div className={styles.toast}>
      <i
        className={`flex-none fa-solid ${
          mode === 'warning' ? 'fa-triangle-exclamation' : mode === 'error' ? 'fa-xmark' : mode === 'info' ? 'fa-circle-exclamation' : mode === 'success' ? 'fa-circle-check' : 'fa-face-smile'
        } text-3xl`}
      ></i>
      <div>
        <h2>{mode?.toUpperCase()}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Toast;
