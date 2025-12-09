import { DatosFormulario } from '../Signin/Signin';
import FormInput from '../../molecules/FormInput';
import Select from '../../atoms/Select';
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
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 text-center mb-6 md:mb-8">
        Completa tu Perfil
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-black">
        <div className="flex justify-between gap-4">
          <FormInput
            className="w-full flex flex-col"
            inputName="Nombre"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'text',
              id: 'nameInput',
              placeholder: 'Nombre',
              value: datos.name,
              onChange: (e) => onChange('name', e.target.value),
            }}
          />
        </div>
        <div className="flex justify-between gap-4">
          <FormInput
            className="w-full flex flex-col"
            inputName="Teléfono"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'text',
              id: 'telephoneInput',
              placeholder: 'Teléfono',
              value: datos.telephone,
              onChange: (e) => onChange('telephone', e.target.value),
            }}
          />
        </div>
        <div className="flex justify-between gap-4">
          <FormInput
            className="w-full flex flex-col"
            inputName="Región"
            inputProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
              inputType: 'text',
              id: 'regionInput',
              placeholder: 'Región',
              value: datos.region,
              onChange: (e) => onChange('region', e.target.value),
            }}
          />
        </div>
        <FormInput
          className="w-full flex flex-col"
          inputName="Dirección"
          inputProps={{
            className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
            inputType: 'text',
            id: 'direccionInput',
            placeholder: 'Dirección',
            value: datos.direccion,
            onChange: (e) => onChange('direccion', e.target.value),
          }}
        />
        <FormInput
          className="w-full flex flex-col"
          inputName="Fecha de Nacimiento"
          inputProps={{
            className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
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
                'w-full px-4 py-3 rounded-lg focus:border-gray-500 focus:outline-none transition-colors duration-200 bg-black/10 text-black cursor-pointer',
              option: 'text-gray-800',
            }}
            name="genero"
            id="generoSelect"
            options={OPCIONES_GENERO}
            value={datos.genero}
            onChange={(e) => onChange('genero', e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-4 md:col-span-2">
          <FormTextArea
            className="w-full flex flex-col gap-2"
            label="Biografía"
            textAreaProps={{
              className: 'py-2 px-4 rounded-lg text-black border border-gray-400/40 bg-black/10',
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
