import { useState } from 'react';
import Button from '../../atoms/Button';
import styles from './SigninForm.module.css';
import FormInput from '../../molecules/FormInput/FormInput';
import NavigationButton from '../../molecules/NavigationButton';
import Image from '../../atoms/Image';

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
    <form className={styles.wrapper} onSubmit={handleSumbit}>
      {/* HEADER */}
      <section className={styles.header}>
        <Image className={styles.profile_pic} src='https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg' alt='profile pic' />
        <h1 className={styles.title}>Crear una nueva cuenta</h1>
      </section>

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.rows}>
          <FormInput
            inputName='Nombre de usuario'
            inputProps={{
              inputType: 'text',
              id: 'usernameInput',
              placeholder: 'JohnnyDoe',
              value: formData.username,
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

      {/* FOOTER */}
      <section className={styles.footer}>
        <Button className={`${styles.button} ${styles.submit_button}`} label='Finalizar' />
        <div className={styles.already_account}>
          <h1>¿Ya tienes una cuenta registrada?</h1>
          <NavigationButton
            buttonProps={{
              className: `${styles.button} ${styles.submit_button}`,
              label: 'Iniciar Sesión',
              type: 'button',
            }}
            navigateTo='/login'
          />
        </div>
      </section>
    </form>
  );
};

export default SigninForm;
