import styles from './Spinner.module.css';

export interface SpinnerProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}

const Spinner: React.FC<SpinnerProps> = ({ className = '', size = 'medium', color = 'primary' }) => {
  const spinnerClass = `${styles.spinner} ${styles[size]} ${styles[color]} ${className}`;
  return <div className={spinnerClass} role='status' aria-label='loading' />;
};

export default Spinner;
