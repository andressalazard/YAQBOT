import { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import styles from './SigninForm.module.css';
import FormInput from '../../molecules/FormInput';
import NavigationButton from '../../molecules/NavigationButton';
import Image from '../../atoms/Image';
import { useAlert } from '../../context/AlertContext';
import { useAuth } from '../../context/AuthContext';
import { useAppSelector } from '../../../hooks/hook';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

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

  const { toggleAlert } = useAlert();
  const { signinApp } = useAuth();
  const { createUserProfile } = useProfile();
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleFormChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSumbit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (formData.username === '' || formData.email === '' || formData.password === '' || formData.confirmedPassword === '') {
      toggleAlert('Los campos no pueden estar vacíos', 'warning');
      return;
    }

    if (emailRegex.test(formData.email) === false) {
      toggleAlert('Por favor, ingrese un correo electrónico válido', 'warning');
      return;
    }

    if (passwordRegex.test(formData.password) === false) {
      toggleAlert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial', 'warning');
      return;
    }

    if (formData.password !== formData.confirmedPassword) {
      toggleAlert('Las contraseñas no coinciden', 'warning');
      return;
    }

    signinApp(formData.username, formData.email, formData.password);
  };

  //checks if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      //creates the profile after is autenticated.
      // this line is temporary until we developed a new way to handle profile creation
      createUserProfile();
      navigate('/home');
    }
  }, [isAuthenticated]);

  return (
    <form className={styles.wrapper}>
      {/* HEADER */}
      <section className={styles.header}>
        <Image className={styles.profile_pic} src='https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg' alt='profile pic' />
        <h1 className={styles.title}>Crear una nueva cuenta</h1>
      </section>

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName='Nombre de usuario'
            inputProps={{
              className: styles.field,
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
            className={styles.form_input}
            inputName='Correo Electrónico'
            inputProps={{
              className: styles.field,
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
            className={styles.form_input}
            inputName='Contraseña'
            inputProps={{
              className: styles.field,
              inputType: 'password',
              id: 'passwordInput',
              value: formData.password,
              onChange: (e) => handleFormChange('password', e.target.value),
            }}
          />

          <FormInput
            className={styles.form_input}
            inputName='Confirmar Contraseña'
            inputProps={{
              className: styles.field,
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
        <Button className={`${styles.button} ${styles.submit_button}`} label='Finalizar' onClick={handleSumbit} />
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
