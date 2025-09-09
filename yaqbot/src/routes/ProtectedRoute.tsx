import { useAppSelector } from '../hooks/hook';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
