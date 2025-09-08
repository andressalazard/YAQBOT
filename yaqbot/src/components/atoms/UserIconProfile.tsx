interface IconPros {
  className?: string;
}

const UserIconProfile: React.FC<IconPros> = ({ className }) => {
  return (
    <button className={className}>
      <i className={'fa-solid fa-user'}></i>
    </button>
  );
};

export default UserIconProfile;
