interface IconPros {
  className?: string;
  handleClick: () => void;
}

const UserIconProfile: React.FC<IconPros> = ({ className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      <i className={'fa-solid fa-user'}></i>
    </button>
  );
};

export default UserIconProfile;
