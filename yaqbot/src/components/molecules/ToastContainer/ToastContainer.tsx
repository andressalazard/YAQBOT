import React from 'react';
import { Toast } from '../../../models/types';
import styles from './ToastContainer.module.css';
import ToastItem from '../../atoms/ToastItem/ToastItem';

interface ToastContainerType {
  toasts: Toast[];
}

const ToastContainer: React.FC<ToastContainerType> = ({ toasts }) => {
  return (
    <div className={styles.toast_container}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
