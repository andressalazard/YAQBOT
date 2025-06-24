import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, isLoggedIn, login, logout, token } = useAuth();

  const submitLogin = () => {
    login(email, password);
  };

  const fields = [
    {
      type: 'email',
      placeholder: 'Correo electrónico',
      isDisabled: false,
      id: 'email',
    },
    {
      type: 'password',
      placeholder: 'Contraseña',
      isDisabled: false,
      id: 'password',
    },
  ];

  return (
    <form className='flex flex-col bg-blue-200 rounded-xl gap-16 py-12 px-10'>
      <section className='flex-1 flex flex-col gap-4 '>
        {fields.map((field, index) => (
          <Input
            key={index}
            inputType={field.type}
            id={field.id}
            isDisabled={field.isDisabled}
            placeholder={field.placeholder}
            onChange={(e) =>
              field.type === 'email'
                ? setEmail(e.target.value)
                : setPassword(e.target.value)
            }
          />
        ))}
      </section>

      {isLoading ? (
        <p>...cargando</p>
      ) : (
        <Button label='Login' type='submit' onClick={submitLogin} />
      )}
      {token && <Button label='Logout' type='button' onClick={logout} />}
    </form>
  );
};

export default LoginForm;
