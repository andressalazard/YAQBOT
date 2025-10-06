import React from 'react';
import styles from './SigninTemplate.module.css';
import StepperContainer from '../../molecules/StepperContainer/StepperContainer';
import SigninForm from '../../organisms/SigninForm/SigninForm';

const SigninTemplate: React.FC = () => {
  return (
    <div className={styles.body}>
      <StepperContainer
        name='stepper'
        steppers={[
          { title: 'Usuario', value: 'user', type: 'first' },
          { title: 'Perfil', value: 'profile', type: 'middle' },
          { title: 'Avatar', value: 'avatar', type: 'end' },
        ]}
      />

      <div className={styles.tab_content}>
        <div className={styles.tab_content_user}>
          <SigninForm />
        </div>
        <div className={styles.tab_content_profile}>
          <h2>profile</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu condimentum libero, commodo porttitor ante. Cras eget lobortis erat. Duis
            eget aliquet nibh, ut egestas dolor.{' '}
          </p>
        </div>
        <div className={styles.tab_content_avatar}>
          <h2>avatar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu condimentum libero, commodo porttitor ante. Cras eget lobortis erat. Duis
            eget aliquet nibh, ut egestas dolor.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninTemplate;
