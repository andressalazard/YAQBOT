import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import { UseProfile } from '../../context/ProfileContext';
import BioDetail from '../../molecules/BioDetail';
import styles from './ProfileDetails.module.css';

interface DetailsBoardProps {
  bioDetails: {
    label: string;
    description: string;
  }[];
}

const ProfileDetails: React.FC<DetailsBoardProps> = ({ bioDetails }) => {
  const { toggleEditing } = UseProfile();
  return (
    <Card className={styles.dashboard_card}>
      <h1 className={styles.section_header}>Perfil del Usuario</h1>
      <div className={styles.details_board}>
        {bioDetails.map((detail, index) => {
          return <BioDetail key={index} detailName={detail.label} description={detail.description} className={styles.detail} />;
        })}
      </div>
      <Icon
        feature='edit'
        className={`material-icons ${styles.edit_icon}`}
        onClick={() => {
          toggleEditing();
        }}
      />
    </Card>
  );
};

export default ProfileDetails;
