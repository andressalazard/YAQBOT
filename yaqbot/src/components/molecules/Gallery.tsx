import Image from '../atoms/Image';

interface GalleryProps {
  className: string;
  pictures: {
    className: string;
    src: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ className, pictures }) => {
  return (
    <div className={className}>
      <>
        {pictures.map((pic, index) => {
          return <Image src={pic.src} alt={`img-${index}`} className={pic.className} />;
        })}
      </>
    </div>
  );
};

export default Gallery;
