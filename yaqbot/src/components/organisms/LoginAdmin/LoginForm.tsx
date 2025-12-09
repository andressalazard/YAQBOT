import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hook';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import FormInput from '../../molecules/FormInput';
import styles from '../LoginForm/Form.module.css';
import { useToast } from '../../context/ToastContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginApp } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.authAdmin.isAuthenticated);

  const handleLogin = (email: string, password: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || password === '') {
      addToast('Los campos no pueden estar vacíos', 'warning');
      return;
    }

    if (!emailRegex.test(email)) {
      addToast('Por favor, ingrese un correo electrónico válido', 'warning');
      return;
    }

    loginApp(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Card className={`${styles.card} w-full md:w-[80%] lg:w-[35%]`}>
      <form className={styles.form_body}>
        <h1 className="text-2xl md:text-3xl">Iniciar Sesión</h1>
        <section>
          <FormInput
            className={styles.form_input}
            inputName="Correo Electrónico"
            inputProps={{
              className: styles.field,
              inputType: 'email',
              id: 'emailInput',
              placeholder: 'johndoe123@email.com',
              value: email,
              onChange: (e) => setEmail(e.target.value),
            }}
          />

          <FormInput
            className={styles.form_input}
            inputName="Contraseña"
            inputProps={{
              className: styles.field,
              inputType: 'password',
              id: 'emailInput',
              value: password,
              onChange: (e) => setPassword(e.target.value),
            }}
          />
        </section>
        <Button
          className={`${styles.button} hover:!bg-green-900 transition-all duration-300 ease-in-out text-sm md:text-base`}
          label="Ingresar"
          type="button"
          onClick={() => handleLogin(email, password)}
        />
      </form>
      <a className="text-gray-800 text-sm md:text-base px-6 pb-4" href="/forgot-password">
        Has olvidado tu contraseña?
      </a>
    </Card>
  );
};
export default LoginForm;
