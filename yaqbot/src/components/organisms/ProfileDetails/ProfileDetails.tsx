import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import BioDetail from '../../molecules/BioDetail';
import styles from './ProfileDetails.module.css';

interface DetailsBoardProps {
  bioDetails: {
    label: string;
    description: string;
  }[];
}

const ProfileDetails: React.FC<DetailsBoardProps> = ({ bioDetails }) => {
  return (
    <Card className={styles.dashboard_card}>
      <h1 className={styles.section_header}>Biografia del usuario</h1>
      <div className={styles.details_board}>
        {bioDetails.map((detail, index: number) => {
          return <BioDetail id={index} detailName={detail.label} description={detail.description} className={styles.detail} />;
        })}
      </div>
      <Icon feature='edit' className={`material-icons ${styles.edit_icon}`} />
    </Card>
  );
};

export default ProfileDetails;
