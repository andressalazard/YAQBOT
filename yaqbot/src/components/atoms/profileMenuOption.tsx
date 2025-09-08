interface MenuOptionProps {
  title: string;
  icon: string;
  className?: string;
}

const ProfileMenuOption: React.FC<MenuOptionProps> = ({ title, icon, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <span className='material-icons'>{icon}</span>
    </div>
  );
};

export default ProfileMenuOption;
