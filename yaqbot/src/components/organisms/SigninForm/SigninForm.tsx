import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import styles from "./SigninForm.module.css";
import FormInput from "../../molecules/FormInput";
import NavigationButton from "../../molecules/NavigationButton";
import Image from "../../atoms/Image";
import { useAuth } from "../../context/AuthContext";
import { useAppSelector } from "../../../hooks/hook";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";
import { useToast } from "../../context/ToastContext";
import { formDataProps } from "../Signin/Signin";
import {
  getUserByEmail,
  getUserByUsername,
} from "../../../services/userService";

interface SigninFormProps {
  formData: formDataProps;
  handleFormChange: (field: string, value: string) => void;
  handleNextStep: (num: number) => void;
}

const SigninForm = ({
  formData,
  handleFormChange,
  handleNextStep,
}: SigninFormProps) => {
  const { addToast } = useToast();

  const [labelEmail, setLabelEmail] = useState(false);
  const [labelUsername, setLabelUsername] = useState(false);

  const handleSumbit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmedPassword === ""
    ) {
      addToast("Los campos no pueden estar vacíos", "warning");
      return;
    }

    if (emailRegex.test(formData.email) === false) {
      addToast("Por favor, ingrese un correo electrónico válido", "warning");
      return;
    }

    if (passwordRegex.test(formData.password) === false) {
      addToast(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial",
        "warning"
      );
      return;
    }

    if (formData.password !== formData.confirmedPassword) {
      addToast("Las contraseñas no coinciden", "warning");
      return;
    }
    if (labelEmail || labelUsername) {
      addToast("Email o Username en uso", "warning");
      return;
    }

    handleNextStep(1);

    //signinApp(formData.username, formData.email, formData.password);
  };

  return (
    <form className={styles.wrapper}>
      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Nombre de usuario"
            inputProps={{
              className: styles.field,
              inputType: "text",
              id: "usernameInput",
              placeholder: "JohnnyDoe",
              value: formData.username,
              onChange: (e) => {
                handleFormChange("username", e.target.value);
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
        <div className={styles.rows__label}>
          {formData.username !== "" && (
            <p className={`${labelUsername ? styles.error : styles.success}`}>
              {labelUsername
                ? "Nombre de usuario ya en uso"
                : "Nombre de usuario disponible"}
            </p>
          )}
        </div>

        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Correo Electrónico"
            inputProps={{
              className: styles.field,
              inputType: "email",
              id: "emailInput",
              placeholder: "johndoe123@email.com",
              value: formData.email,
              onChange: (e) => {
                handleFormChange("email", e.target.value);
                getUserByEmail(e.target.value)
                  .then(() => {
                    // fulfilled: el email existe
                    setLabelEmail(true);
                  })
                  .catch(() => {
                    // rejected: el email se puede usar
                    setLabelEmail(false);
                  });
              },
            }}
          />
        </div>
        <div className={styles.rows__label}>
          {formData.email !== "" && (
            <p className={`${labelEmail ? styles.error : styles.success}`}>
              {labelEmail ? "Correo ya en uso" : "Correo disponible"}
            </p>
          )}
        </div>

        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Contraseña"
            inputProps={{
              className: styles.field,
              inputType: "password",
              id: "passwordInput",
              value: formData.password,
              onChange: (e) => handleFormChange("password", e.target.value),
            }}
          />

          <FormInput
            className={styles.form_input}
            inputName="Confirmar Contraseña"
            inputProps={{
              className: styles.field,
              inputType: "password",
              id: "confirmedPasswordInput",
              value: formData.confirmedPassword,
              onChange: (e) =>
                handleFormChange("confirmedPassword", e.target.value),
            }}
          />
        </div>
      </section>
      <section className={styles.footer}>
        <Button
          className={`${styles.button} ${styles.submit_button}`}
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
