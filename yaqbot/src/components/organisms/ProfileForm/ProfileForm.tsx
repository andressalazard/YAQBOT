import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import FormSection from '../../molecules/FormSection';
import FormInput from '../../molecules/FormInput';
import FormSelect from '../../molecules/FormSelect';
import FormTextArea from '../../molecules/FormTextArea';
import Button from '../../atoms/Button';
import styles from './ProfileForm.module.css';

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

const ProfileForm: React.FC<ProfileFormProps> = ({ userAccount, userLocation, userProfile, handleCancel, handleSubmit }) => {
  const { handleChange } = useProfile();
  const [account, setAccount] = useState({ username: userAccount?.username || '', email: userAccount?.email || '' });
  const [location, setLocation] = useState({ region: userLocation?.region || '', address: userLocation?.address || '' });

  const [profile, setProfile] = useState({
    fullname: userProfile?.fullname || '',
    phone: userProfile?.phone || '',
    birthday: userProfile?.birthday || '',
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
    <form className={styles.distribution}>
      <FormSection
        title='Cuenta de usuario'
        classNames={{
          title: styles.title,
          card: styles.card_user,
          section: styles.section,
        }}
      >
        <FormInput
          className={styles.form_input}
          inputName='Nombre de usuario'
          inputProps={{
            className: styles.field,
            inputType: 'text',
            id: 'usernameInput',
            value: account.username,
            onChange: (e) => handleFormChange('username', e.target.value),
          }}
        />

        <FormInput
          className={styles.form_input}
          inputName='Correo Electrónico'
          inputProps={{
            className: styles.field,
            inputType: 'email',
            id: 'emailInput',
            value: account.email,
            onChange: (e) => handleFormChange('email', e.target.value),
          }}
        />
      </FormSection>

      <FormSection
        title='Datos Personales'
        classNames={{
          title: styles.title,
          card: styles.card_bio,
          section: styles.section,
        }}
      >
        <FormInput
          className={styles.form_input}
          inputName='Nombre Completo'
          inputProps={{
            className: styles.field,
            inputType: 'text',
            id: 'fullnameInput',
            value: profile.fullname,
            onChange: (e) => handleFormChange('fullname', e.target.value),
          }}
        />

        <FormInput
          className={styles.form_input}
          inputName='Número de contacto'
          inputProps={{
            className: styles.field,
            inputType: 'phone',
            id: 'phoneInput',
            value: profile.phone,
            onChange: (e) => handleFormChange('phone', e.target.value),
          }}
        />

        <FormInput
          className={styles.form_input}
          inputName='Fecha de nacimiento'
          inputProps={{
            className: styles.field,
            inputType: 'date',
            id: 'birthdayInput',
            value: profile.birthday,
            onChange: (e) => handleFormChange('birthday', e.target.value),
          }}
        />

        <FormSelect
          className={styles.form_select}
          formLabel='Género'
          selectProps={{
            selectClassName: {
              select: styles.select,
              option: styles.option,
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
          label='Biografía'
          className={styles.form_textarea}
          textAreaProps={{
            className: styles.textarea,
            id: 'biography',
            name: 'Biography',
            rows: 4,
            value: profile.bio,
            onChange: (e) => handleFormChange('bio', e.target.value),
          }}
        />
      </FormSection>

      <FormSection
        title='Ubicación'
        classNames={{
          title: styles.title,
          card: styles.card_location,
          section: styles.section,
        }}
      >
        <FormInput
          className={styles.form_input}
          inputName='Ciudad o Región'
          inputProps={{
            className: styles.field,
            inputType: 'text',
            id: 'regionInput',
            value: location.region,
            onChange: (e) => handleFormChange('region', e.target.value),
          }}
        />
        <FormInput
          className={styles.form_input}
          inputName='Dirección de Domicilio'
          inputProps={{
            className: styles.field,
            inputType: 'text',
            id: 'addressInput',
            value: location.address,
            onChange: (e) => handleFormChange('address', e.target.value),
          }}
        />
      </FormSection>
      <FormSection
        title=''
        classNames={{
          title: styles.title,
          card: styles.card_buttons,
          section: styles.section,
        }}
      >
        <Button label='Cancelar' type='button' className={`${styles.button} ${styles.cancel}`} onClick={handleCancel} />
        <Button label='Actualizar' type='button' className={`${styles.button} ${styles.update}`} onClick={handleSubmit} />
      </FormSection>
    </form>
  );
};

export default ProfileForm;
