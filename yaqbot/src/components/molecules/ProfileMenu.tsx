import ProfileMenuOption from '../atoms/profileMenuOption';
import ProfileMenuHeader from './ProfileMenuHeader/ProfileMenuHeader';
import { useAppDispatch } from '../../hooks/hook';
import { useSettings } from '../context/SettingsContext';

import { logout } from '../../features/auth/authSlice';
import { clearState } from '../../features/user/userSlice';
import { clearCart } from '../../features/product/productSlice';
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
    dispatch(clearState());
    dispatch(clearCart());
    toggleMenuStatus();
  };

  return (
    <div className={menuHeader.className}>
      <div className="p-4 border-b border-green-100">
        <ProfileMenuHeader
          username={menuHeader.username}
          email={menuHeader.email}
          photo={menuHeader.photo}
        />
      </div>

      <section className="py-2">
        <ul>
          {menuOptions.map((option, index) => (
            <li key={index}>
              {option.type === 'logout' ? (
                <div onClick={handleLogout}>
                  <ProfileMenuOption
                    title={option.title}
                    icon={option.icon}
                    className={`${optionsClassName} px-4 py-3 flex items-center gap-3 cursor-pointer`}
                    onClick={() => {}}
                  />
                </div>
              ) : (
                <Link to={option.navigateTo || '#'} onClick={toggleMenuStatus}>
                  <ProfileMenuOption
                    title={option.title}
                    icon={option.icon}
                    className={`${optionsClassName} px-4 py-3 flex items-center gap-3`}
                    onClick={() => {}}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfileMenu;
