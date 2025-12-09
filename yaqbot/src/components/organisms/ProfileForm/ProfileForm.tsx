import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import FormSection from '../../molecules/FormSection';
import FormInput from '../../molecules/FormInput';
import FormSelect from '../../molecules/FormSelect';
import FormTextArea from '../../molecules/FormTextArea';
import Button from '../../atoms/Button';

interface ProfileFormProps {
  userAccount: {
    username?: string;
    email?: string;
  };
  userLocation: {
    region?: string;
    address?: string;
  };
  userPassword?: {
    password: string;
  };
  userProfile?: {
    fullname?: string;
    phone?: string;
    birthday?: string;
    gender?: string;
    bio?: string;
  };
  handleCancel?: () => void;
  handleSubmit?: (updatedForm: any) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  userAccount,
  userLocation,
  userProfile,
  handleCancel,
  handleSubmit,
}) => {
  const { handleChange } = useProfile();
  const [account, setAccount] = useState({
    username: userAccount?.username || '',
    email: userAccount?.email || '',
  });
  const [location, setLocation] = useState({
    region: userLocation?.region || '',
    address: userLocation?.address || '',
  });

  const [profile, setProfile] = useState({
    fullname: userProfile?.fullname || '',
    phone: userProfile?.phone || '',
    birthday: userProfile?.birthday ? userProfile.birthday.split('T')[0] : '',
    gender: userProfile?.gender || '',
    bio: userProfile?.bio || '',
  });

  const handleFormChange = (field: string, value: string) => {
    if (field in account) {
      setAccount((prevState) => ({ ...prevState, [field]: value }));
      handleChange('ACCOUNT', field, value);
    }

    if (field in profile) {
      setProfile((prevState) => ({ ...prevState, [field]: value }));
      handleChange('PROFILE', field, value);
    }

    if (field in location) {
      setLocation((prevState) => ({ ...prevState, [field]: value }));
      handleChange('PROFILE', field, value);
    }
  };

  return (
    <form className="text-black bg-white/60 p-4 md:p-6 space-y-4">
      <FormSection
        title="Cuenta de usuario"
        classNames={{
          title: 'text-left font-bold py-1',
          card: 'grid gap-4',
          section:
            'grid grid-cols-1 lg:grid-cols-[2fr_7fr] border-t border-gray-800 pt-2 pl-0 relative',
        }}
      >
        <FormInput
          className="p-2 text-left"
          inputName="Nombre de usuario"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'text',
            isDisabled: true,
            id: 'usernameInput',
            value: account.username,
            onChange: (e) => handleFormChange('username', e.target.value),
          }}
        />

        <FormInput
          className="p-2 text-left"
          inputName="Correo Electrónico"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'email',
            isDisabled: true,
            id: 'emailInput',
            value: account.email,
            onChange: (e) => handleFormChange('email', e.target.value),
          }}
        />
      </FormSection>

      <FormSection
        title="Datos Personales"
        classNames={{
          title: 'text-left font-bold py-1',
          card: 'grid grid-cols-1 md:grid-cols-2 gap-4',
          section:
            'grid grid-cols-1 lg:grid-cols-[2fr_7fr] border-t border-gray-800 pt-2 pl-0 relative',
        }}
      >
        <FormInput
          className="p-2 text-left"
          inputName="Nombre Completo"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'text',
            id: 'fullnameInput',
            value: profile.fullname,
            onChange: (e) => handleFormChange('fullname', e.target.value),
          }}
        />

        <FormInput
          className="p-2 text-left"
          inputName="Número de contacto"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'phone',
            id: 'phoneInput',
            value: profile.phone,
            onChange: (e) => handleFormChange('phone', e.target.value),
          }}
        />

        <FormInput
          className="p-2 text-left"
          inputName="Fecha de nacimiento"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'date',
            id: 'birthdayInput',
            value: profile.birthday,
            onChange: (e) => handleFormChange('birthday', e.target.value),
          }}
        />

        <FormSelect
          className="text-left grid grid-rows-[auto_1fr] p-2"
          formLabel="Género"
          selectProps={{
            selectClassName: {
              select: 'bg-black/10 py-2 px-3 rounded w-full',
              option: '',
            },
            value: profile.gender,
            name: 'Género',
            id: 'Género',
            options: [
              { label: 'Masculino', value: 'MALE' },
              { label: 'Femenino', value: 'FEMALE' },
              { label: 'Otro', value: 'OTHER' },
            ],
            onChange: (e) => handleFormChange('gender', e.target.value),
          }}
        />

        <FormTextArea
          label="Biografía"
          className="md:col-span-2 flex flex-col p-2 items-start"
          textAreaProps={{
            className: 'w-full bg-black/10 p-2 rounded',
            id: 'biography',
            name: 'Biography',
            rows: 4,
            value: profile.bio,
            onChange: (e) => handleFormChange('bio', e.target.value),
          }}
        />
      </FormSection>

      <FormSection
        title="Ubicación"
        classNames={{
          title: 'text-left font-bold py-1',
          card: 'grid gap-4',
          section:
            'grid grid-cols-1 lg:grid-cols-[2fr_7fr] border-t border-gray-800 pt-2 pl-0 relative',
        }}
      >
        <FormInput
          className="p-2 text-left"
          inputName="Ciudad o Región"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'text',
            id: 'regionInput',
            value: location.region,
            onChange: (e) => handleFormChange('region', e.target.value),
          }}
        />
        <FormInput
          className="p-2 text-left"
          inputName="Dirección de Domicilio"
          inputProps={{
            className: 'bg-black/10 py-2.5 px-3 rounded w-full',
            inputType: 'text',
            id: 'addressInput',
            value: location.address,
            onChange: (e) => handleFormChange('address', e.target.value),
          }}
        />
      </FormSection>
      <FormSection
        title=""
        classNames={{
          title: 'text-left font-bold py-1',
          card: 'flex justify-end gap-4 mr-2',
          section:
            'grid grid-cols-1 lg:grid-cols-[2fr_7fr] border-t border-gray-800 pt-2 pl-0 relative',
        }}
      >
        <Button
          label="Cancelar"
          type="button"
          className="w-24 md:w-28 py-2 px-4 rounded font-semibold cursor-pointer text-gray-600 border border-gray-600 hover:bg-gray-100 transition-colors"
          onClick={handleCancel}
        />
        <Button
          label="Actualizar"
          type="button"
          className="w-24 md:w-28 py-2 px-4 rounded font-semibold cursor-pointer bg-green-600 text-gray-100 hover:bg-green-700 transition-colors"
          onClick={handleSubmit}
        />
      </FormSection>
    </form>
  );
};

export default ProfileForm;
