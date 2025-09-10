import { useState } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import styles from './SigninForm.module.css';
import FormInput from '../../molecules/FormInput/FormInput';

interface formDataProps {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const SigninForm = () => {
  const [formData, setFormData] = useState<formDataProps>({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
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
            <FormInput
              inputName='Nombre de usuario'
              inputProps={{
                inputType: 'text',
                id: 'usernameInput',
                placeholder: 'JohnnyDoe',
                value: formData.userName,
                onChange: (e) => handleFormChange('username', e.target.value),
              }}
            />
          </div>

          <div className={styles.rows}>
            <FormInput
              inputName='Correo Electrónico'
              inputProps={{
                inputType: 'email',
                id: 'emailInput',
                placeholder: 'johndoe123@email.com',
                value: formData.email,
                onChange: (e) => handleFormChange('email', e.target.value),
              }}
            />
          </div>

          <div className={styles.rows}>
            <FormInput
              inputName='Contraseña'
              inputProps={{
                inputType: 'password',
                id: 'passwordInput',
                value: formData.password,
                onChange: (e) => handleFormChange('password', e.target.value),
              }}
            />

            <FormInput
              inputName='Confirmar Contraseña'
              inputProps={{
                inputType: 'password',
                id: 'confirmedPasswordInput',
                value: formData.confirmedPassword,
                onChange: (e) => handleFormChange('confirmedPassword', e.target.value),
              }}
            />
          </div>
        </section>
        <Button className={styles.button} label='Registrar' type='submit' />
      </form>
    </Card>
  );
};

export default SigninForm;
