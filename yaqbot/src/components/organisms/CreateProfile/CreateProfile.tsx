import { DatosFormulario } from "../Signin/Signin";
import FormInput from "../../molecules/FormInput";
import Select from "../../atoms/Select";

interface CreateProfileProps {
  datos: DatosFormulario;
  onChange: (field: string, value: string) => void;
  OPCIONES_GENERO: { label: string; value: string }[];
  NIVELES_JARDINERIA: { label: string; value: string }[];
}

const CreateProfile = ({
  datos,
  onChange,
  OPCIONES_GENERO,
  NIVELES_JARDINERIA,
}: CreateProfileProps) => {
  return (
    <div style={{ color: "black" }}>
      <form>
        <FormInput
          inputName="Nombre"
          inputProps={{
            inputType: "text",
            id: "nameInput",
            placeholder: "Nombre",
            value: datos.name,
            onChange: (e) => onChange("name", e.target.value),
          }}
        />
        <FormInput
          inputName="Teléfono"
          inputProps={{
            inputType: "text",
            id: "telephoneInput",
            placeholder: "Teléfono",
            value: datos.telephone,
            onChange: (e) => onChange("telephone", e.target.value),
          }}
        />
        <FormInput
          inputName="Región"
          inputProps={{
            inputType: "text",
            id: "regionInput",
            placeholder: "Región",
            value: datos.region,
            onChange: (e) => onChange("region", e.target.value),
          }}
        />
        <FormInput
          inputName="Dirección"
          inputProps={{
            inputType: "text",
            id: "direccionInput",
            placeholder: "Dirección",
            value: datos.direccion,
            onChange: (e) => onChange("direccion", e.target.value),
          }}
        />
        <FormInput
          inputName="Fecha de Nacimiento"
          inputProps={{
            inputType: "date",
            id: "fechaNacimientoInput",
            placeholder: "Fecha de nacimiento",
            value: datos.fechaNacimiento,
            onChange: (e) => onChange("fechaNacimiento", e.target.value),
          }}
        />
        {/* Select para género usando el componente Select */}
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="generoSelect">Género</label>
          <Select
            className={{ select: "", option: "" }}
            name="genero"
            id="generoSelect"
            options={OPCIONES_GENERO}
            value={datos.genero}
            onChange={(e) => onChange("genero", e.target.value)}
          />
        </div>
        {/* Select para nivel de jardinería usando el componente Select */}
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="nivelJardineriaSelect">Nivel de Jardinería</label>
          <Select
            className={{ select: "", option: "" }}
            name="nivelJardineria"
            id="nivelJardineriaSelect"
            options={NIVELES_JARDINERIA}
            value={datos.nivelJardineria}
            onChange={(e) => onChange("nivelJardineria", e.target.value)}
          />
        </div>
        <FormInput
          inputName="Biografía"
          inputProps={{
            inputType: "text",
            id: "biografiaInput",
            placeholder: "Biografía",
            value: datos.biografia,
            onChange: (e) => onChange("biografia", e.target.value),
          }}
        />
      </form>
    </div>
  );
};
export default CreateProfile;
