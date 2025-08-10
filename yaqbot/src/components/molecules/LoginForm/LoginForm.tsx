import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Card from '../../atoms/Card';
import { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card className={styles.card}>
      <form className={styles.form_body}>
        <h1>Iniciar Sesión</h1>
        <section>
          <label for='emailInput'>
            <h4>Correo Electrónico</h4>
          </label>
          <Input inputType='email' id='emailInput' placeholder='Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label for='passwordInput'>
            <h4>Contraseña</h4>
          </label>
          <Input inputType='password' id='passwordInput' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
        </section>
        <Button className={styles.button} label='Ingresar' type='submit' onClick={() => console.log('ahi voy!')} />
      </form>
    </Card>
  );
};
export default LoginForm;
