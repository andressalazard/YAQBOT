import LoginPage from '../components/pages/LoginPage';
import HomePage from '../components/pages/HomePage/HomePage';
import SigninPage from '../components/pages/SigninPage';

export type AppRoute = {
  path: string;
  element: JSX.Element;
};

export const appRoutes: AppRoute[] = [
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <HomePage /> },
  { path: '/signin', element: <SigninPage /> },
];
