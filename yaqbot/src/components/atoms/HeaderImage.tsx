import React from 'react';

interface HeaderImageProps {
  /** URL de la imagen de fondo */
  imageUrl?: string;
  /** Color de overlay sobre la imagen (puede ser sólido, gradiente, etc.) */
  backgroundColor?: string;
  /** Altura del componente (acepta cualquier valor CSS válido: px, vh, rem, etc.) */
  height?: string;
  /** Opacidad del overlay (0 a 1) */
  overlayOpacity?: number;
  /** Elementos hijos que se renderizarán centrados */
  children?: React.ReactNode;
  /** Clase CSS adicional para personalización */
  className?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({
  imageUrl,
  backgroundColor = 'linear-gradient(135deg, rgba(34, 197, 94, 0.85) 0%, rgba(22, 163, 74, 0.9) 50%, rgba(21, 128, 61, 0.85) 100%)',
  height = '500px',
  overlayOpacity = 0.7,
  children,
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ minHeight: height }}>
      {/* Imagen de fondo */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
      )}

      {/* Overlay con color/gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background: backgroundColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Contenido centrado (children) */}
      <div
        className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-8 lg:px-16"
        style={{ minHeight: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default HeaderImage;
