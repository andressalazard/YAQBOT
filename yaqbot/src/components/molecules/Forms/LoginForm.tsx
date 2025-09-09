import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Card from '../../atoms/Card';
import { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useAuth } from '../../context/AuthContext';
import { useAlert } from '../../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hook';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toggleAlert } = useAlert();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (email: string, password: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || password === '') {
      toggleAlert('Los campos no pueden estar vacíos', 'warning');
      return;
    }

    if (!emailRegex.test(email)) {
      toggleAlert('Por favor, ingrese un correo electrónico válido', 'warning');
      return;
    }

    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Card className={styles.card}>
      <form className={styles.form_body}>
        <h1>Iniciar Sesión</h1>
        <section>
          <label>
            <h4>Correo Electrónico</h4>
          </label>
          <Input
            inputType='email'
            id='emailInput'
            placeholder='Correo Electronico'
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />

          <label>
            <h4>Contraseña</h4>
          </label>
          <Input
            inputType='password'
            id='passwordInput'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </section>
        <Button className={styles.button} label='Ingresar' type='button' onClick={() => handleLogin(email, password)} />
      </form>
    </Card>
  );
};
export default LoginForm;
