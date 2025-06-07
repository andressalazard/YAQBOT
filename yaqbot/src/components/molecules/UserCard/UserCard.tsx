import Card from '../../atoms/Card/Card';
import Image from '../../atoms/Image/Image';

function UserCard() {
  const imgStyleProps = {
    bgColor: '#2d2d2d',
    borderRadius: '0px',
    width: '150px',
    height: 'auto',
  };

  const cardStyleProps = {
    bgColor: '#8d8d8d',
    borderRadius: '20px',
    width: '300px',
    height: 'auto',
  };

  return (
    <Card stylesProps={cardStyleProps}>
      <Image
        src={
          'https://i.pinimg.com/736x/8f/70/32/8f70324731bcea43a99d81207a4051cc.jpg'
        }
        alt={'person'}
        stylesProps={imgStyleProps}
      ></Image>
      <h1>ALEX CAMACHO</h1>
      <p>fullstack ninja</p>
    </Card>
  );
}

export default UserCard;
