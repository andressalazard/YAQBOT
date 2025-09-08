import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import { useAlert } from '../../context/AlertContext';
import styles from './Panel.module.css';

const Panel = () => {
  const { toggleAlert } = useAlert();

  return (
    <Card className={`${styles.card} ${styles.distribution}`}>
      <Button className={`${styles.btn_main} ${styles.btn_color_1}`} label='EXITO' type='submit' onClick={() => toggleAlert('You can access all the files in this folder', 'success')} />
      <Button className={`${styles.btn_main} ${styles.btn_color_2}`} label='ALERTA' type='submit' onClick={() => toggleAlert('Viewers of this file can see comments and suggestions', 'warning')} />
      <Button className={`${styles.btn_main} ${styles.btn_color_1}`} label='ERROR' type='submit' onClick={() => toggleAlert(`Sorry, but you're not authorized to look at this page`, 'error')} />
      <Button className={`${styles.btn_main} ${styles.btn_color_2}`} label='INFO' type='submit' onClick={() => toggleAlert('Anyone on the Internet with this link can view', 'info')} />
    </Card>
  );
};

export default Panel;
