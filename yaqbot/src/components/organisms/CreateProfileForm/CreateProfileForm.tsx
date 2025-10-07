import { useState } from "react";
import Button from "../../atoms/Button";
import styles from "./CreateProfileForm.module.css";
import FormInput from "../../molecules/FormInput";
import FormSelect from "../../molecules/FormSelect";
import FormTextArea from "../../molecules/FormTextArea";
import { useProfile } from "../../context/ProfileContext";
import { useToast } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";

interface CreateProfileFormData {
  fullname: string;
  phone: string;
  region: string;
  address: string;
  birthday: string;
  gender: string;
  bio: string;
  gardernerLevel: string;
}

const CreateProfileForm = () => {
  const [formData, setFormData] = useState<CreateProfileFormData>({
    fullname: "",
    phone: "",
    region: "",
    address: "",
    birthday: "",
    gender: "",
    bio: "",
    gardernerLevel: "AMATEUR",
    socialLinks: [],
  });

  const { addToast } = useToast();
  const { createUserProfile } = useProfile();
  const navigate = useNavigate();

  const handleFormChange = (field: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSocialLinkChange = (
    index: number,
    field: keyof SocialLink,
    value: string
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      socialLinks: prevState.socialLinks.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      ),
    }));
  };

  const addSocialLink = () => {
    setFormData((prevState) => ({
      ...prevState,
      socialLinks: [
        ...prevState.socialLinks,
        { name: "", url: "", username: "" },
      ],
    }));
  };

  const removeSocialLink = (index: number) => {
    setFormData((prevState) => ({
      ...prevState,
      socialLinks: prevState.socialLinks.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    // Validaciones básicas
    if (!formData.fullname.trim()) {
      addToast("El nombre completo es requerido", "warning");
      return;
    }

    if (formData.birthday && new Date(formData.birthday) > new Date()) {
      addToast("La fecha de nacimiento no puede ser futura", "warning");
      return;
    }

    // Validar enlaces sociales (que tengan al menos un campo lleno)
    const invalidSocialLinks = formData.socialLinks.some(
      (link) => !link.name.trim() && !link.url.trim() && !link.username.trim()
    );

    if (invalidSocialLinks) {
      addToast(
        "Los enlaces sociales deben tener al menos un campo completo",
        "warning"
      );
      return;
    }

    try {
      // Preparar datos para el backend
      const profileData = {
        fullname: formData.fullname.trim() || undefined,
        phone: formData.phone.trim() || undefined,
        region: formData.region.trim() || undefined,
        address: formData.address.trim() || undefined,
        birthday: formData.birthday || undefined,
        gender: formData.gender as "MALE" | "FEMALE" | "OTHER" | undefined,
        bio: formData.bio.trim() || undefined,
        gardernerLevel: formData.gardernerLevel as
          | "AMATEUR"
          | "INTERMEDIATE"
          | "PRO",
        socialLinks: formData.socialLinks.filter(
          (link) => link.name.trim() || link.url.trim() || link.username.trim()
        ),
      };

      await createUserProfile(profileData);
      addToast("Perfil creado exitosamente", "success");
      navigate("/profile");
    } catch (error) {
      addToast("Error al crear el perfil", "error");
      console.error("Error creating profile:", error);
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const genderOptions = [
    { label: "Seleccionar género", value: "" },
    { label: "Masculino", value: "MALE" },
    { label: "Femenino", value: "FEMALE" },
    { label: "Otro", value: "OTHER" },
  ];

  const gardernerLevelOptions = [
    { label: "Aficionado", value: "AMATEUR" },
    { label: "Intermedio", value: "INTERMEDIATE" },
    { label: "Profesional", value: "PRO" },
  ];

  return (
    <form>
      {/* BODY */}
      <section className={styles.body}>
        {/* Información Personal */}
        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Nombre Completo *"
            inputProps={{
              className: styles.field,
              inputType: "text",
              id: "fullnameInput",
              placeholder: "Juan Pérez",
              value: formData.fullname,
              onChange: (e) => handleFormChange("fullname", e.target.value),
            }}
          />

          <FormInput
            className={styles.form_input}
            inputName="Teléfono"
            inputProps={{
              className: styles.field,
              inputType: "tel",
              id: "phoneInput",
              placeholder: "+1 234 567 8900",
              value: formData.phone,
              onChange: (e) => handleFormChange("phone", e.target.value),
            }}
          />
        </div>

        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Región"
            inputProps={{
              className: styles.field,
              inputType: "text",
              id: "regionInput",
              placeholder: "Ciudad, País",
              value: formData.region,
              onChange: (e) => handleFormChange("region", e.target.value),
            }}
          />

          <FormInput
            className={styles.form_input}
            inputName="Dirección"
            inputProps={{
              className: styles.field,
              inputType: "text",
              id: "addressInput",
              placeholder: "Calle 123, Colonia...",
              value: formData.address,
              onChange: (e) => handleFormChange("address", e.target.value),
            }}
          />
        </div>

        <div className={styles.rows}>
          <FormInput
            className={styles.form_input}
            inputName="Fecha de Nacimiento"
            inputProps={{
              className: styles.field,
              inputType: "date",
              id: "birthdayInput",
              value: formData.birthday,
              onChange: (e) => handleFormChange("birthday", e.target.value),
            }}
          />

          <FormSelect
            className={styles.form_select}
            formLabel="Género"
            selectProps={{
              selectClassName: {
                select: styles.field,
                option: "",
              },
              value: formData.gender,
              name: "gender",
              id: "genderSelect",
              options: genderOptions,
              onChange: (e) => handleFormChange("gender", e.target.value),
            }}
          />
        </div>

        <div className={styles.rows}>
          <FormSelect
            className={styles.form_select}
            formLabel="Nivel de Jardinería"
            selectProps={{
              selectClassName: {
                select: styles.field,
                option: "",
              },
              value: formData.gardernerLevel,
              name: "gardernerLevel",
              id: "gardernerLevelSelect",
              options: gardernerLevelOptions,
              onChange: (e) =>
                handleFormChange("gardernerLevel", e.target.value),
            }}
          />
        </div>

        <div className={styles.rows}>
          <FormTextArea
            className={styles.form_textarea}
            label="Biografía"
            textAreaProps={{
              className: styles.field,
              id: "bioTextArea",
              name: "bio",
              rows: 4,
              value: formData.bio,
              onChange: (e) => handleFormChange("bio", e.target.value),
            }}
          />
        </div>

        {/* Enlaces Sociales */}
        <div className={styles.social_links_section}>
          <div className={styles.social_links_header}>
            <h3 className={styles.social_links_title}>Enlaces Sociales</h3>
            <button
              type="button"
              className={styles.add_social_button}
              onClick={addSocialLink}
            >
              + Agregar Enlace
            </button>
          </div>

          {formData.socialLinks.map((socialLink, index) => (
            <div key={index} className={styles.social_link_item}>
              <FormInput
                className={styles.form_input}
                inputName="Nombre de la Red"
                inputProps={{
                  className: styles.field,
                  inputType: "text",
                  id: `socialName${index}`,
                  placeholder: "Instagram, Facebook, etc.",
                  value: socialLink.name,
                  onChange: (e) =>
                    handleSocialLinkChange(index, "name", e.target.value),
                }}
              />

              <FormInput
                className={styles.form_input}
                inputName="URL"
                inputProps={{
                  className: styles.field,
                  inputType: "url",
                  id: `socialUrl${index}`,
                  placeholder: "https://instagram.com/usuario",
                  value: socialLink.url,
                  onChange: (e) =>
                    handleSocialLinkChange(index, "url", e.target.value),
                }}
              />

              <FormInput
                className={styles.form_input}
                inputName="Usuario"
                inputProps={{
                  className: styles.field,
                  inputType: "text",
                  id: `socialUsername${index}`,
                  placeholder: "@usuario",
                  value: socialLink.username,
                  onChange: (e) =>
                    handleSocialLinkChange(index, "username", e.target.value),
                }}
              />

              <button
                type="button"
                className={styles.remove_social_button}
                onClick={() => removeSocialLink(index)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </section>
    </form>
  );
};

export default CreateProfileForm;
