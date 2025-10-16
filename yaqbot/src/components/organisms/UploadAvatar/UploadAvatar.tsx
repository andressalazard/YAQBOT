import React, { useState } from "react";
import style from "./UploadAvatar.module.css";
import Button from "../../atoms/Button";
import styles from "./UploadAvatar.module.css";

interface UploadAvatarProps {
  file: File | null;
  urlImage: string;
  setFile: (file: File | null) => void;
  setUrlImage: (url: string) => void;
  handleNextStep: (num: number) => void;
}

const UploadAvatar = ({
  file,
  urlImage,
  setFile,
  setUrlImage,
  handleNextStep,
}: UploadAvatarProps) => {
  const [preview, setPreview] = useState<string>(urlImage);

  // Muestra preview local antes de subir
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFile = e.target.files[0];
      setFile(newFile);
      setPreview(URL.createObjectURL(newFile));
    }
  };

  return (
    <div className={style.container}>
      <div style={{ marginBottom: "1rem" }}>
        {preview && (
          <img
            src={preview}
            alt="Avatar preview"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <section className={styles.footer}>
        <Button
          className={`${styles.button}`}
          label={`Finalizar`}
          onClick={() => {
            handleNextStep(3);
          }}
        />
      </section>
    </div>
  );
};

export default UploadAvatar;
