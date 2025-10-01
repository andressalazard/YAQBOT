import React from 'react';
import { Toast } from '../../../models/types';
import styles from './ToastItem.module.css';

interface ToastItemProps {
  toast: Toast;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  return (
    <div className={`${styles.toast}  ${styles[`toast_${toast.type}`]}`}>
      <span className={`material-icons ${styles.icon} ${styles[`${toast.type}_icon`]}`}>
        {toast.type === 'success' ? 'check' : toast.type === 'warning' ? 'priority_high' : toast.type}
      </span>
      <div>
        <h2>{toast.type.toUpperCase()}</h2>
        <p>{toast.message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
