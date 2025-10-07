import React, { useState } from "react";

interface UploadAvatarProps {
  file: File | null;
  urlImage: string;
  setFile: (file: File | null) => void;
  setUrlImage: (url: string) => void;
}

const UploadAvatar = ({
  file,
  urlImage,
  setFile,
  setUrlImage,
}: UploadAvatarProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(urlImage);
  const [loading, setLoading] = useState(false);

  // Muestra preview local antes de subir
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFile = e.target.files[0];
      setSelectedFile(newFile);
      setPreview(URL.createObjectURL(newFile));
    }
  };

  // Simula subida al backend y actualiza urlImage
  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    // Aquí iría tu lógica real de subida (fetch/axios)
    // Simulación: espera 1 segundo y usa el preview
    setTimeout(() => {
      setUrlImage(preview);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
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
      <button
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        style={{ marginLeft: "1rem" }}
      >
        {loading ? "Subiendo..." : "Subir Imagen"}
      </button>
      {/* Muestra el url final */}
      {urlImage && (
        <div style={{ marginTop: "1rem" }}>
          <span>URL de imagen subida:</span>
          <div style={{ wordBreak: "break-all" }}>{urlImage}</div>
        </div>
      )}
    </div>
  );
};

export default UploadAvatar;
