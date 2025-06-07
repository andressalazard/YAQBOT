import Image from '../../atoms/Image/Image';

function Gallery() {
  const imgStyleProps = {
    bgColor: '#2d2d2d',
    borderRadius: '20px',
    width: '300px',
    height: 'auto',
  };

  return (
    <div>
      <Image
        src={
          'https://i.pinimg.com/736x/8f/70/32/8f70324731bcea43a99d81207a4051cc.jpg'
        }
        alt={'person'}
        stylesProps={imgStyleProps}
      ></Image>
    </div>
  );
}

export default Gallery;
