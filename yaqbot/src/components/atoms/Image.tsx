interface ImageProps {
  src?: string;
  alt: string | 'default img';
  className?: string;
  handleClick?: () => void;
}

function Image({ src, alt, className, handleClick }: ImageProps) {
  return <img className={className} src={src} alt={alt} onClick={handleClick}></img>;
}

export default Image;
