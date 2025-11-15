import { DatosFormulario } from '../Signin/Signin';
import FormInput from '../../molecules/FormInput';
import Select from '../../atoms/Select';
import styles from './CreateProfile.module.css';
import FormTextArea from '../../molecules/FormTextArea';
import Button from '../../atoms/Button';

interface CreateProfileProps {
  datos: DatosFormulario;
  onChange: (field: string, value: string) => void;
  OPCIONES_GENERO: { label: string; value: string }[];
  handleNextStep: (num: number) => void;
}

const CreateProfile = ({
  datos,
  onChange,
  OPCIONES_GENERO,
  handleNextStep,
}: CreateProfileProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 text-center mb-6 md:mb-8">
        Completa tu Perfil
      </h2>
      <form className={`${styles.body}`}>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Nombre"
            inputProps={{
              inputType: 'text',
              id: 'nameInput',
              placeholder: 'Nombre',
              value: datos.name,
              onChange: (e) => onChange('name', e.target.value),
            }}
          />
        </div>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Teléfono"
            inputProps={{
              inputType: 'text',
              id: 'telephoneInput',
              placeholder: 'Teléfono',
              value: datos.telephone,
              onChange: (e) => onChange('telephone', e.target.value),
            }}
          />
        </div>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Región"
            inputProps={{
              inputType: 'text',
              id: 'regionInput',
              placeholder: 'Región',
              value: datos.region,
              onChange: (e) => onChange('region', e.target.value),
            }}
          />
        </div>
        <FormInput
          className={styles.form_input}
          inputName="Dirección"
          inputProps={{
            inputType: 'text',
            id: 'direccionInput',
            placeholder: 'Dirección',
            value: datos.direccion,
            onChange: (e) => onChange('direccion', e.target.value),
          }}
        />
        <FormInput
          className={styles.form_input}
          inputName="Fecha de Nacimiento"
          inputProps={{
            className: styles.field,
            inputType: 'date',
            id: 'fechaNacimientoInput',
            placeholder: 'Fecha de nacimiento',
            value: datos.fechaNacimiento,
            onChange: (e) => onChange('fechaNacimiento', e.target.value),
          }}
        />
        {/* Select para género usando el componente Select */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="generoSelect" className="font-bold text-gray-700">
            Género
          </label>
          <Select
            className={{
              select:
                'w-full px-4 py-3 rounded-lg focus:border-gray-500 focus:outline-none transition-colors duration-200 bg-black/10 text-black cursor-pointer ',
              option: 'text-gray-800',
            }}
            name="genero"
            id="generoSelect"
            options={OPCIONES_GENERO}
            value={datos.genero}
            onChange={(e) => onChange('genero', e.target.value)}
          />
        </div>

        <div className={`${styles.rows} md:col-span-2`}>
          <FormTextArea
            className={styles.form_textarea}
            label="Biografía"
            textAreaProps={{
              className: styles.field,
              id: 'biografiaInput',
              name: 'biografia',
              rows: 4,
              value: datos.biografia,
              onChange: (e) => onChange('biografia', e.target.value),
            }}
          />
        </div>

        <section className="md:col-span-2 flex justify-center mt-4">
          <Button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg w-full md:w-auto"
            label="Siguiente"
            onClick={() => {
              handleNextStep(2);
            }}
          />
        </section>
      </form>
    </div>
  );
};
export default CreateProfile;
