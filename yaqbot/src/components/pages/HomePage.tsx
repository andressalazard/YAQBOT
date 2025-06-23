import Button from '../atoms/Button/Button';
import Toast from '../atoms/Toast/Toast';
import { AlertProvider, useAlert } from '../context/AlertContext';

const Content = () => {
  const { isAwake, toggleAlert } = useAlert();
  console.log('isAwake:', isAwake);

  return (
    <div className='width-full bg-blue-300'>
      <Button
        label='EXITO'
        type='submit'
        onClick={() =>
          toggleAlert('You can access all the files in this folder', 'success')
        }
      />
      <Button
        label='ALERTA'
        type='submit'
        onClick={() =>
          toggleAlert(
            'Viewers of this file can see comments and suggestions',
            'warning'
          )
        }
      />
      <Button
        label='ERROR'
        type='submit'
        onClick={() =>
          toggleAlert(
            `Sorry, but you're not authorized to look at this page`,
            'error'
          )
        }
      />
      <Button
        label='INFO'
        type='submit'
        onClick={() =>
          toggleAlert('Anyone on the Internet with this link can view', 'info')
        }
      />
    </div>
  );
};

function HomePage() {
  return (
    <div className='width-full bg-blue-300'>
      HOME PAGE
      <AlertProvider>
        <Content />
      </AlertProvider>
    </div>
  );
}

export default HomePage;
