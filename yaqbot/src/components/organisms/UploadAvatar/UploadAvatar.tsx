import React, { useState } from 'react';
import style from './UploadAvatar.module.css';
import Button from '../../atoms/Button';
import styles from './UploadAvatar.module.css';

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
      <div style={{ marginBottom: '1rem' }}>
        {preview && (
          <img
            src={preview}
            alt="Avatar preview"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>

      {/* Input oculto */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        id="fileInput"
        className="hidden"
      />

      {/* Botón personalizado */}
      <label
        htmlFor="fileInput"
        className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 transform cursor-pointer"
      >
        Seleccionar archivo
      </label>

      {/* Mostrar nombre del archivo */}
      {file && (
        <div className="mt-4 text-center py-1 px-2">
          <span className="blocktext-cyan-400 font-semibold">Archivo seleccionado: </span>
          <span className="block">{file.name}</span>
        </div>
      )}

      <section className={styles.footer}>
        <Button
          className="my-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg w-full md:w-auto"
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
