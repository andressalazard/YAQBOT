import React from 'react';
import styles from './ProfileSocials.module.css';
import Card from '../../atoms/Card';
import SocialLinks from '../../molecules/SocialLinks';
import Icon from '../../atoms/Icon';

interface ProfileSocialsProps {
  socialLinks: {
    name?: 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'youtube';
    url?: string;
    username?: string;
  }[];
}

const ProfileSocials: React.FC<ProfileSocialsProps> = ({ socialLinks }) => {
  return (
    <Card className={styles.social_card}>
      <h1 className={styles.section_header}>Redes Sociales</h1>
      <SocialLinks className={styles.links_board} linkClassName={styles.link} socialLinks={socialLinks} />
      <Icon feature='edit' className={`material-icons ${styles.edit_icon}`} />
    </Card>
  );
};

export default ProfileSocials;
