import { useEffect, useState } from 'react';

import Card from '../../atoms/Card';
import NavigationButton from '../../molecules/NavigationButton';
import SigninForm from '../../organisms/SigninForm/SigninForm';
import CreateProfile from '../CreateProfile/CreateProfile';
import styles from './Signin.module.css';
import { OptionsMenuSignIn } from '../../molecules/OptionsMenu';
import UploadAvatar from '../UploadAvatar/UploadAvatar';
import Spinner from '../../atoms/Spinner/Spinner';
import { signin } from '../../../services/authService';
import { createProfile, updateAvatar } from '../../../services/profileService';
import HeaderImage from '../../atoms/HeaderImage';

type Genero = 'MALE' | 'FEMALE' | 'OTHER';

const OPCIONES_GENERO: { label: string; value: Genero }[] = [
  { label: 'Seleccionar género', value: 'OTHER' },
  { label: 'Masculino', value: 'MALE' },
  { label: 'Femenino', value: 'FEMALE' },
  { label: 'Otro', value: 'OTHER' },
  { label: 'Prefiero no decir', value: 'OTHER' },
];
export interface DatosFormulario {
  name: string;
  telephone: string;
  region: string;
  direccion: string;
  fechaNacimiento: string;
  genero: Genero;
  biografia: string;
}

export interface formDataProps {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
  stateForm: 'WAITING' | 'SUCCESS' | 'ERROR' | 'PROCESSING';
}

const SigninOrganism = () => {
  const [datos, setDatos] = useState<DatosFormulario>({
    name: '',
    telephone: '',
    region: '',
    direccion: '',
    fechaNacimiento: '',
    genero: 'OTHER',
    biografia: '',
  });

  const [selectedOption, setSelectedOption] = useState<number>(0);

  const [formData, setFormData] = useState<formDataProps>({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
    stateForm: 'WAITING',
  });

  const [urlImage, setUrlImage] = useState<string>(
    'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'
  );
  const [file, setFile] = useState<File | null>(null);

  const handleChangeOption = (option: number) => {
    setSelectedOption(option);
  };

  const handleFieldChange = (field: string, value: unknown) => {
    setDatos((prevDatos) => ({ ...prevDatos, [field]: value }));
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  async function createNewUser() {
    try {
      const payload = await signin({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      //console.log('Usuario creado con éxito:', payload);
      if (!payload.userid) {
        throw new Error('No se recibió un userid válido');
      }

      const payloadProfile = await createProfile(payload.userid, {
        fullname: datos.name,
        phone: datos.telephone,
        region: datos.region,
        address: datos.direccion,
        birthday: datos.fechaNacimiento,
        gender: datos.genero || 'OTHER',
        avatar: urlImage,
        bio: datos.biografia,
      });
      //console.log('Perfil creado con éxito:', payloadProfile);
      if (!payloadProfile.response.userId) {
        throw new Error('No se recibió un userid válido');
      }
      //console.log('ID', payload.userid);
      const payloadImage = await updateAvatar(payload.userid, file);
      //console.log('Avatar actualizado con éxito:', payloadImage);
      if (!payloadImage.userid) {
        throw new Error('No se recibió un userid válido');
      }

      setSelectedOption(4);
    } catch (error) {
      console.error('Error creando usuario:', error);
    } finally {
      setSelectedOption(4);
    }
  }

  useEffect(() => {
    if (selectedOption === 3) {
      createNewUser();
    }
  }, [selectedOption]);

  return (
    <HeaderImage height="100vh" imageUrl="/bg/plants-5.webp" overlayOpacity={0.4}>
      <Card className={`max-h-[80vh] overflow-auto !bg-white/50 !backdrop-blur-sm`}>
        <OptionsMenuSignIn
          selectedOption={selectedOption}
          onSelectOption={handleChangeOption}
          className={styles.number_circle_container}
        />

        {selectedOption === 0 && (
          <SigninForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleNextStep={setSelectedOption}
          />
        )}
        {selectedOption === 1 && (
          <CreateProfile
            datos={datos}
            onChange={handleFieldChange}
            OPCIONES_GENERO={OPCIONES_GENERO}
            handleNextStep={setSelectedOption}
          />
        )}
        {selectedOption === 2 && (
          <UploadAvatar
            urlImage={urlImage}
            setUrlImage={setUrlImage}
            file={file}
            setFile={setFile}
            handleNextStep={setSelectedOption}
          />
        )}
        {selectedOption === 3 && <Spinner size={'large'} className={styles.spinner} />}
        {selectedOption === 4 && (
          <div className={styles.success_message}>
            <h2 className={styles.already_account}>¡Registro completado con éxito!</h2>
            <p className={styles.already_account}>Ya puedes iniciar sesión con tu nueva cuenta.</p>
          </div>
        )}

        <div className={`${styles.already_account} p-2`}>
          {selectedOption !== 4 && <h2>¿Ya tienes una cuenta registrada?</h2>}
          <NavigationButton
            buttonProps={{
              className:
                'bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 md:py-2 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg w-full md:w-auto',
              label: 'Iniciar Sesión',
              type: 'button',
            }}
            navigateTo="/login"
          />
        </div>
      </Card>
    </HeaderImage>
  );
};

export default SigninOrganism;
