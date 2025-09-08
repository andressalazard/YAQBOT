import styles from '../HomePage/HomePage.module.css';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Panel from '../../molecules/Panel/Panel';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <Panel />
      <Footer />
    </div>
  );
}

export default HomePage;
