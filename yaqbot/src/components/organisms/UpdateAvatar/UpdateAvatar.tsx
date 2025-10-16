import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import styles from './UpdateAvatar.module.css';
import InputFile from '../../atoms/InputFile';
import { useProfile } from '../../context/ProfileContext';

interface UpdateAvatarPhotoProps {
  imageURL: string;
}

const UpdateAvatar: React.FC<UpdateAvatarPhotoProps> = ({ imageURL }) => {
  const { toggleEditing, updateUserAvatar } = useProfile();
  const [isNewPhoto, setIsNewPhoto] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [imageSrc, setImageSrc] = useState<string | undefined>(imageURL);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
      setIsNewPhoto(true);
    };
    reader.readAsDataURL(file);
    setFile(file);
  };

  const acceptChanges = () => {
    if (file) {
      updateUserAvatar(file);
    }
    toggleEditing('AVATAR');
  };

  return (
    <Card className={styles.card}>
      <header>Avatar</header>
      <Image src={imageSrc} alt='profile-pic' className={styles.image} />
      <section>
        <Button className={`${styles.button} ${styles.btn_input}`}>
          <Icon feature='photo_camera' className={`material-icons ${styles.icons}`} />
          <span className={styles.btn_label}>Subir Foto</span>
          <InputFile className={styles.input} onFileSelect={handleFileSelect} />
        </Button>
        <Button className={styles.button}>
          <Icon feature='delete' className={`material-icons ${styles.icons}`} />
          <span className={styles.btn_label}>Eliminar foto</span>
        </Button>
        <Button
          className={isNewPhoto === true ? `${styles.button}` : `${styles.button} ${styles.blocked_btn}`}
          onClick={() => {
            acceptChanges();
          }}
        >
          <Icon feature='check' className={`material-icons ${styles.icons}`} />
          <span className={styles.btn_label}>Confirmar</span>
        </Button>
      </section>
      <Icon
        feature='close'
        className={`material-icons ${styles.icon_close}`}
        onClick={() => {
          toggleEditing('AVATAR');
        }}
      />
    </Card>
  );
};

export default UpdateAvatar;
