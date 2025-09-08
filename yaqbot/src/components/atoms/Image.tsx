interface ImageProps {
  src?: string;
  alt: string | 'default img';
  className?: string;
}

function Image({ src, alt, className }: ImageProps) {
  return <img className={className} src={src} alt={alt}></img>;
}

export default Image;
