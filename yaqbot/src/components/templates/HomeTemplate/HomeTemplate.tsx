import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import styles from './HomeTemplate.module.css';

const HomeTemplate = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
