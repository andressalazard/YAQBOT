import { useState } from "react";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import NavigationButton from "../../molecules/NavigationButton";
import SigninForm from "../../organisms/SigninForm/SigninForm";
import CreateProfile from "../CreateProfile/CreateProfile";
import styles from "./Signin.module.css";
import { OptionsMenuSignIn } from "../../molecules/OptionsMenu";
import UploadAvatar from "../UploadAvatar/UploadAvatar";

// Definir los tipos con opciones específicas
type NivelJardineria =
  | "PRINCIPIANTE"
  | "INTERMEDIO"
  | "AVANZADO"
  | "EXPERTO"
  | "";
type Genero = "MASCULINO" | "FEMENINO" | "OTRO" | "PREFIERO_NO_DECIR" | "";

// Opciones para los selects
const NIVELES_JARDINERIA: { label: string; value: NivelJardineria }[] = [
  { label: "Seleccionar nivel", value: "" },
  { label: "Principiante", value: "PRINCIPIANTE" },
  { label: "Intermedio", value: "INTERMEDIO" },
  { label: "Avanzado", value: "AVANZADO" },
  { label: "Experto", value: "EXPERTO" },
];

const OPCIONES_GENERO: { label: string; value: Genero }[] = [
  { label: "Seleccionar género", value: "" },
  { label: "Masculino", value: "MASCULINO" },
  { label: "Femenino", value: "FEMENINO" },
  { label: "Otro", value: "OTRO" },
  { label: "Prefiero no decir", value: "PREFIERO_NO_DECIR" },
];
export interface DatosFormulario {
  name: string;
  telephone: string;
  region: string;
  direccion: string;
  fechaNacimiento: string;
  genero: Genero;
  nivelJardineria: NivelJardineria;
  biografia: string;
}

interface formDataProps {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const SigninOrganism = () => {
  const [datos, setDatos] = useState<DatosFormulario>({
    name: "",
    telephone: "",
    region: "",
    direccion: "",
    fechaNacimiento: "",
    genero: "",
    nivelJardineria: "",
    biografia: "",
  });

  const [selectedOption, setSelectedOption] = useState<number>(0);

  const [formData, setFormData] = useState<formDataProps>({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [urlImage, setUrlImage] = useState<string>(
    "https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg"
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

  return (
    <div className={styles.body}>
      <Card className={styles.card}>
        <OptionsMenuSignIn
          selectedOption={selectedOption}
          onSelectOption={handleChangeOption}
          className={styles.number_circle_container}
        />

        {selectedOption === 0 && (
          <SigninForm formData={formData} handleFormChange={handleFormChange} />
        )}
        {selectedOption === 1 && (
          <CreateProfile
            datos={datos}
            onChange={handleFieldChange}
            OPCIONES_GENERO={OPCIONES_GENERO}
            NIVELES_JARDINERIA={NIVELES_JARDINERIA}
          />
        )}
        {selectedOption === 2 && (
          <UploadAvatar urlImage={urlImage} setUrlImage={setUrlImage} />
        )}

        <section className={styles.footer}>
          <Button
            className={`${styles.button} ${styles.submit_button}`}
            label="Finalizar"
            onClick={() => console.log("Finalizar Registro")}
          />
        </section>

        <div className={styles.already_account}>
          <h2>¿Ya tienes una cuenta registrada?</h2>
          <NavigationButton
            buttonProps={{
              className: `${styles.button} ${styles.submit_button}`,
              label: "Iniciar Sesión",
              type: "button",
            }}
            navigateTo="/login"
          />
        </div>
      </Card>
    </div>
  );
};

export default SigninOrganism;
