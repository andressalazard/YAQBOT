interface MenuOptionProps {
  title: string;
  icon: string;
  className?: string;
  onClick?: () => void;
}

const ProfileMenuOption: React.FC<MenuOptionProps> = ({ title, icon, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <h1>{title}</h1>
      <span className='material-icons'>{icon}</span>
    </div>
  );
};

export default ProfileMenuOption;
