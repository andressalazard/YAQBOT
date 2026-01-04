import { useAppSelector } from '../hooks/hook';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProtectedAdminRoute = ({ children }: Props) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const role = useAppSelector((state) => state.auth.role);

  if (!isAuthenticated || role !== 'ADMIN') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
