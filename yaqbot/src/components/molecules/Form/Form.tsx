import { useState } from 'react';
import Input from '../../atoms/Input/Input';

function Form() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    username: '',
    userpassword: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    {
      type: 'text',
      placeholder: 'Ingrese su nombre',
      isDisabled: false,
      id: 'name',
    },
    {
      type: 'text',
      placeholder: 'Ingrese su apellido',
      isDisabled: false,
      id: 'lastname',
    },
    {
      type: 'email',
      placeholder: 'Ingrese su correo electronico',
      isDisabled: false,
      id: 'email',
    },
    {
      type: 'text',
      placeholder: 'Ingrese su usuario',
      isDisabled: false,
      id: 'username',
    },
    {
      type: 'password',
      placeholder: 'Ingrese su contraseña',
      isDisabled: false,
      id: 'userpassword',
    },
  ];

  return (
    <>
      {fields.map((field, index) => (
        <Input
          key={`${index}-input`}
          id={field.id}
          inputType={field.type}
          isDisabled={field.isDisabled}
          placeholder={field.placeholder}
          onChange={(e) => {
            handleChange(field.id, e.target.value);
            console.log('indice:', index);
          }}
        />
      ))}
    </>
  );
}

export default Form;
