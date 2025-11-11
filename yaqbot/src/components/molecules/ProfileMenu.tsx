import ProfileMenuOption from '../atoms/profileMenuOption';
import ProfileMenuHeader from './ProfileMenuHeader/ProfileMenuHeader';
import { useAppDispatch } from '../../hooks/hook';
import { useSettings } from '../context/SettingsContext';

import { logout } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';

export type OptionsTypes = 'logout' | 'settings' | 'shopping';

interface ProfileMenuProps {
  menuHeader: {
    className: string;
    username: string;
    email: string;
    photo: string;
  };

  menuOptions: {
    title: string;
    icon: string;
    navigateTo?: string;
    type: OptionsTypes;
  }[];

  optionsClassName: string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ menuHeader, menuOptions, optionsClassName }) => {
  const { toggleMenuStatus } = useSettings();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toggleMenuStatus();
  };

  return (
    <div className={menuHeader.className}>
      <ProfileMenuHeader
        username={menuHeader.username}
        email={menuHeader.email}
        photo={menuHeader.photo}
      />

      <section>
        <ul>
          <>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <Link to={option.navigateTo || '#'}>
                  <ProfileMenuOption
                    title={option.title}
                    icon={option.icon}
                    className={optionsClassName}
                    onClick={option.type === 'logout' ? () => handleLogout() : () => {}}
                  />
                </Link>
              </li>
            ))}
          </>
        </ul>
      </section>
    </div>
  );
};

export default ProfileMenu;
