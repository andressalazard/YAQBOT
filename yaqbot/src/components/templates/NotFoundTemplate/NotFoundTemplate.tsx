import React from 'react';
import styles from './NotFoundTemplate.module.css';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundTemplate: React.FC = () => {
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1 className={styles.not_found}>404 NOT FOUND</h1>
      </header>

      <section className={styles.section}>
        <Image
          className={styles.image}
          src='http://raw.githubusercontent.com/andressalazard/404NotFound/refs/heads/main/images/Scarecrow.png'
          alt='scarecrow'
        />
        <div className={styles.error_message}>
          <div>
            <h1 className={styles.main_message}>I have bad news for you</h1>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
          </div>
          <Button
            className={styles.button}
            label='Go Back'
            onClick={() => {
              returnBack();
            }}
          />
        </div>
      </section>
      <footer>
        <p>
          created by <a href='https://github.com/andressalazard'>andressalazard</a> - YAQBOT
        </p>
      </footer>
    </div>
  );
};

export default NotFoundTemplate;
