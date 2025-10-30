import { useNavigate } from 'react-router-dom';
import ProfilePhoto from '../../atoms/ProfilePhoto';
import styles from './ProfileMenuHeader.module.css';
import { useSettings } from '../../context/SettingsContext';

interface ProfileHeaderProps {
  username: string;
  email: string;
  photo: string;
}

const ProfileMenuHeader: React.FC<ProfileHeaderProps> = ({ username, email, photo }) => {
  const navigate = useNavigate();
  const { toggleMenuStatus } = useSettings();

  const handleClick = () => {
    navigate('/profile');
    toggleMenuStatus();
  };

  return (
    <div className={styles.header} onClick={handleClick}>
      <ProfilePhoto src={photo} className={styles.profile_pic} />
      <div className={styles.user_information}>
        <h1>{username}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileMenuHeader;
