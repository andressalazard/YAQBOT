import { DatosFormulario } from "../Signin/Signin";
import FormInput from "../../molecules/FormInput";
import Select from "../../atoms/Select";
import styles from "./CreateProfile.module.css";
import FormTextArea from "../../molecules/FormTextArea";
import Button from "../../atoms/Button";

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
    <div style={{ color: "black" }}>
      <form className={`${styles.body}`}>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Nombre"
            inputProps={{
              inputType: "text",
              id: "nameInput",
              placeholder: "Nombre",
              value: datos.name,
              onChange: (e) => onChange("name", e.target.value),
            }}
          />
        </div>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Teléfono"
            inputProps={{
              inputType: "text",
              id: "telephoneInput",
              placeholder: "Teléfono",
              value: datos.telephone,
              onChange: (e) => onChange("telephone", e.target.value),
            }}
          />
        </div>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Región"
            inputProps={{
              inputType: "text",
              id: "regionInput",
              placeholder: "Región",
              value: datos.region,
              onChange: (e) => onChange("region", e.target.value),
            }}
          />
        </div>
        <FormInput
          className={styles.form_input}
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
          className={styles.form_input}
          inputName="Fecha de Nacimiento"
          inputProps={{
            className: styles.field,
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
            className={`${styles.form_input} ${styles.select}`}
            name="genero"
            id="generoSelect"
            options={OPCIONES_GENERO}
            value={datos.genero}
            onChange={(e) => onChange("genero", e.target.value)}
          />
        </div>

        <div className={styles.rows}>
          <FormTextArea
            className={styles.form_textarea}
            label="Biografía"
            textAreaProps={{
              className: styles.field,
              id: "biografiaInput",
              name: "biografia",
              rows: 4,
              value: datos.biografia,
              onChange: (e) => onChange("biografia", e.target.value),
            }}
          />
        </div>

        <section className={styles.footer}>
          <Button
            className={`${styles.button} ${styles.submit_button}`}
            label={`Siguiente`}
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
