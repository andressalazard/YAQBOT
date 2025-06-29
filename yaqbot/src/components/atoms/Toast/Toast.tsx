import { useAlert } from '../../context/AlertContext';
import styles from '../Toast/Toast.module.css';

const Toast = () => {
  const { message, mode } = useAlert();
  //const baseStyle = 'flex flex-col gap-2 p-8 sm:flex-row sm: items-center sm:gap-6 sm:py-4 rounded-xl';
  //const bgColor = mode === 'success' ? 'bg-green-200' : mode === 'info' ? 'bg-blue-200' : mode === 'warning' ? 'bg-orange-200' : mode === 'error' ? 'bg-red-200' : 'bg-red-300';

  return (
    // <div className={`${baseStyle} ${bgColor}`}>
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
