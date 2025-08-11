import { useState } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';
import styles from './Form.module.css';

interface formDataProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SigninForm = () => {
  const [formData, setFormData] = useState<formDataProps>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleFormChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(e.target.value);
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //endpoint to send formData
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Card className={styles.medium_card}>
      <form className={styles.form_body_medium} onSubmit={handleSumbit}>
        <h1>Crear cuenta</h1>
        <section>
          <div className={styles.rows}>
            <div className={styles.field}>
              <label>
                <h4>Nombre</h4>
              </label>
              <Input inputType='text' id='firstNameInput' placeholder='John' value={formData.firstName} onChange={(e) => handleFormChange('firstName', e.target.value)} />
            </div>

            <div className={styles.field}>
              <label>
                <h4>Apellido</h4>
              </label>
              <Input inputType='text' id='lastNameInput' placeholder='Doe' value={formData.lastName} onChange={(e) => handleFormChange('lastName', e.target.value)} />
            </div>
          </div>

          <div className={styles.rows}>
            <div className={styles.field}>
              <label>
                <h4>Correo Electrónico</h4>
              </label>
              <Input inputType='email' id='emailInput' placeholder='johndoe123@email.com' value={formData.email} onChange={(e) => handleFormChange('email', e.target.value)} />
            </div>
          </div>

          <div className={styles.rows}>
            <div className={styles.field}>
              <label>
                <h4>Contraseña</h4>
              </label>
              <Input inputType='password' id='passwordInput' value={formData.password} onChange={(e) => handleFormChange('password', e.target.value)} />
            </div>

            <div className={styles.field}>
              <label>
                <h4>Confirmar Contraseña</h4>
              </label>
              <Input inputType='password' id='confirmPasswordInput' value={confirmedPassword} onChange={handlePasswordChange} />
            </div>
          </div>
        </section>
        <Button className={styles.button} label='Registrar' type='submit' />
      </form>
    </Card>
  );
};

export default SigninForm;
