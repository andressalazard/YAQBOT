import { useAlert } from '../context/AlertContext';

interface ToastProps {
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ className }) => {
  const { message, mode } = useAlert();
  return (
    <div className={className}>
      <span className='material-icons'>{mode === 'success' ? 'check_circle' : mode}</span>
      <div>
        <h2>{mode?.toUpperCase()}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Toast;
