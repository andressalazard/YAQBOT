import styles from '../HomePage/HomePage.module.css';
import { AlertProvider, useAlert } from '../../context/AlertContext';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Toast from '../../atoms/Toast/Toast';
import Panel from '../../molecules/Panel/Panel';
import ProfileMenu from '../../molecules/ProfileMenu/ProfileMenu';

const Content = () => {
  const { isAwake } = useAlert();
  console.log('isAwake:', isAwake);

  return (
    <>
      {isAwake === true ? <Toast /> : <></>}
      <Panel />
      <ProfileMenu />
    </>
  );
};

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <AlertProvider>
        <Content />
      </AlertProvider>
      <Footer />
    </div>
  );
}

export default HomePage;
