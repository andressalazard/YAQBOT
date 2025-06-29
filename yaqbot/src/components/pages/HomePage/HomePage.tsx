import styles from '../HomePage/HomePage.module.css';
import Button from '../../atoms/Button/Button';
import { AlertProvider, useAlert } from '../../context/AlertContext';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import Toast from '../../atoms/Toast/Toast';

const Content = () => {
  const { isAwake, toggleAlert } = useAlert();
  console.log('isAwake:', isAwake);

  return (
    <>
      {isAwake === true ? <Toast /> : <></>}
      <div className='bg-blue-300'>
        <Button label='EXITO' type='submit' onClick={() => toggleAlert('You can access all the files in this folder', 'success')} />
        <Button label='ALERTA' type='submit' onClick={() => toggleAlert('Viewers of this file can see comments and suggestions', 'warning')} />
        <Button label='ERROR' type='submit' onClick={() => toggleAlert(`Sorry, but you're not authorized to look at this page`, 'error')} />
        <Button label='INFO' type='submit' onClick={() => toggleAlert('Anyone on the Internet with this link can view', 'info')} />
      </div>
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
