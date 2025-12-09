import { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import FormInput from '../../molecules/FormInput';

import { useToast } from '../../context/ToastContext';
import { formDataProps } from '../Signin/Signin';
import { getUserByEmail, getUserByUsername } from '../../../services/userService';

interface SigninFormProps {
  formData: formDataProps;
  handleFormChange: (field: string, value: string) => void;
  handleNextStep: (num: number) => void;
}

const SigninForm = ({ formData, handleFormChange, handleNextStep }: SigninFormProps) => {
  const { addToast } = useToast();

  const [labelEmail, setLabelEmail] = useState(false);
  const [correctEmail, setCorrectEmail] = useState(false);
  const [labelUsername, setLabelUsername] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(false);

  const testEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
      setCorrectEmail(true);
    } else {
      setCorrectEmail(false);
    }
  };

  const testPassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password)) {
      setPasswordSecure(true);
    } else {
      setPasswordSecure(false);
    }
  };

  useEffect(() => {
    testPassword(formData.password);
    testEmail(formData.email);
  }, [formData.password, formData.email]);

  const handleSumbit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      formData.username === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmedPassword === ''
    ) {
      addToast('Los campos no pueden estar vacíos', 'warning');
      return;
    }

    if (emailRegex.test(formData.email) === false) {
      addToast('Por favor, ingrese un correo electrónico válido', 'warning');
      return;
    }

    if (passwordRegex.test(formData.password) === false) {
      addToast(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial',
        'warning'
      );
      return;
    }

    if (formData.password !== formData.confirmedPassword) {
      addToast('Las contraseñas no coinciden', 'warning');
      return;
    }
    if (labelEmail || labelUsername) {
      addToast('Email o Username en uso', 'warning');
      return;
    }

    handleNextStep(1);

    //signinApp(formData.username, formData.email, formData.password);
  };

  return (
    <form className="w-full">
      {/* BODY */}
      <section className="flex flex-col gap-8 px-12 pt-3 pb-8 text-black overflow-hidden">
        <div className="w-full">
          <FormInput
            className="w-full flex flex-col"
            inputName="Nombre de usuario *"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'text',
              id: 'usernameInput',
              placeholder: 'JohnnyDoe',
              value: formData.username,
              onChange: (e) => {
                handleFormChange('username', e.target.value);
                getUserByUsername(e.target.value.trim())
                  .then(() => {
                    // fulfilled: el username existe
                    setLabelUsername(true);
                  })
                  .catch(() => {
                    // rejected: el username se puede usar
                    setLabelUsername(false);
                  });
              },
            }}
          />
        </div>
        <div className="flex justify-between -mt-6">
          {formData.username !== '' && (
            <p
              className={`text-sm font-medium ${labelUsername ? 'text-red-600' : 'text-green-600'}`}
            >
              {labelUsername ? 'Nombre de usuario ya en uso' : 'Nombre de usuario disponible'}
            </p>
          )}
        </div>

        <div className="w-full">
          <FormInput
            className="w-full flex flex-col"
            inputName="Correo Electrónico *"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'email',
              id: 'emailInput',
              placeholder: 'johndoe123@email.com',
              value: formData.email,
              onChange: (e) => {
                handleFormChange('email', e.target.value);
                if (correctEmail) {
                  getUserByEmail(e.target.value)
                    .then(() => {
                      // fulfilled: el email existe
                      setLabelEmail(true);
                    })
                    .catch(() => {
                      // rejected: el email se puede usar
                      setLabelEmail(false);
                    });
                }
              },
            }}
          />
        </div>
        <div className="flex justify-between -mt-6">
          {formData.email !== '' && (
            <>
              {!correctEmail ? (
                <p className="text-sm font-medium text-red-600">Formato de correo inválido</p>
              ) : (
                <p
                  className={`text-sm font-medium ${labelEmail ? 'text-red-600' : 'text-green-600'}`}
                >
                  {labelEmail ? 'Correo ya en uso' : 'Correo disponible'}
                </p>
              )}
            </>
          )}
        </div>

        <div className="space-y-6">
          <FormInput
            className="w-full flex flex-col"
            inputName="Contraseña *"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'password',
              id: 'passwordInput',
              value: formData.password,
              onChange: (e) => {
                handleFormChange('password', e.target.value);
              },
            }}
          />

          <FormInput
            className="w-full flex flex-col"
            inputName="Confirmar Contraseña *"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'password',
              id: 'confirmedPasswordInput',
              value: formData.confirmedPassword,
              onChange: (e) => handleFormChange('confirmedPassword', e.target.value),
            }}
          />
        </div>
        <div className="flex flex-col justify-between -mt-6">
          {!passwordSecure && formData.password !== '' && (
            <p className="max-w-[200px] text-sm font-medium text-red-600">
              La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un
              número y un carácter especial
            </p>
          )}
          {formData.confirmedPassword !== '' &&
            passwordSecure &&
            formData.password !== formData.confirmedPassword && (
              <p className="text-sm font-medium text-red-600">Las contraseñas no coinciden</p>
            )}
        </div>
      </section>
      <section className="flex flex-col justify-between items-center gap-8 py-2">
        <Button
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg w-full md:w-auto"
          label={`Siguiente`}
          onClick={() => {
            handleSumbit();
          }}
        />
      </section>
    </form>
  );
};

export default SigninForm;
