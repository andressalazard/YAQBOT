import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Card from '../../atoms/Card';
import { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email, password);
  };

  useEffect(() => {
    if (token !== null) {
      //TODO verificar que sea un token valido y no solo que este vacío
      navigate('/home');
    }
  }, [token]);

  return (
    <Card className={styles.card}>
      <form className={styles.form_body}>
        <h1>Iniciar Sesión</h1>
        <section>
          <label>
            <h4>Correo Electrónico</h4>
          </label>
          <Input inputType='email' id='emailInput' placeholder='Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>
            <h4>Contraseña</h4>
          </label>
          <Input inputType='password' id='passwordInput' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
        </section>
        <Button className={styles.button} label='Ingresar' type='button' onClick={() => handleLogin(email, password)} />
      </form>
    </Card>
  );
};
export default LoginForm;
