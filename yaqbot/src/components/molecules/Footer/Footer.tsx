import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>YAQ-Bot &#169; 2025</span>
      <br />
      <span>
        Andrés Salazar - <a href='https://github.com/andressalazard'>andressalazard</a>
      </span>
    </footer>
  );
};

export default Footer;
