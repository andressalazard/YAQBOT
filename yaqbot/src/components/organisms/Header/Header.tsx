import { useState } from 'react';
import Logo from '../../atoms/Logo';
import ProfileMenu, { OptionsTypes } from '../../molecules/ProfileMenu';
import { useSettings } from '../../context/SettingsContext';
import ProfilePhoto from '../../atoms/ProfilePhoto';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface HeaderProps {
  userAvatar: string;
  profileMenuHeader: {
    username: string;
    email: string;
    photo: string;
  };
}

const navMenu = [
  { icon: 'home', title: 'Inicio', navigateTo: '/home' },
  { icon: 'local_florist', title: 'Mis plantas', navigateTo: '/plant' },
  { icon: 'storefront', title: 'Tienda', navigateTo: '/marketplace' },
  { icon: 'notifications', title: 'Notificaciones' },
  { icon: 'account_circle', title: 'Perfil', navigateTo: '/profile' },
  { icon: 'shopping_cart', title: 'Carrito', navigateTo: '/cart' },
];

const userMenu: { title: string; icon: string; navigateTo?: string; type: OptionsTypes }[] = [
  { title: 'Mis Compras', icon: 'shopping_cart', navigateTo: '/cart', type: 'shopping' },
  { title: 'Configuración', icon: 'settings', navigateTo: '/settings', type: 'settings' },
  { title: 'Cerrar Sesión', icon: 'logout', type: 'logout' },
];

const Header: React.FC<HeaderProps> = ({ userAvatar, profileMenuHeader }) => {
  const cartItems = useSelector((state: any) => state.productCart.products);
  const itemCount = cartItems.length;

  const { menuStatus, toggleMenuStatus } = useSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/home">
            <Logo className="text-white text-2xl md:text-3xl font-bold flex items-center gap-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navMenu.map((link, index) => {
              const isCartLink = link.icon === 'shopping_cart';
              return (
                <Link
                  key={index}
                  to={link.navigateTo || '#'}
                  className="text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center gap-2 font-medium relative"
                >
                  <span className="material-icons text-xl">{link.icon}</span>
                  <span className="hidden xl:inline">{link.title}</span>
                  {isCartLink && itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Profile & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Cart Icon - Mobile */}
            <Link
              to="/cart"
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors duration-200 relative"
            >
              <span className="material-icons text-3xl">shopping_cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            {/* Profile Photo - Desktop */}
            <div className="hidden md:block relative">
              <ProfilePhoto
                src={userAvatar}
                className="w-12 h-12 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-200"
                handleClick={toggleMenuStatus}
              />
              {menuStatus === 'on' && (
                <ProfileMenu
                  menuHeader={{
                    className:
                      'absolute right-0 top-16 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[280px] border border-green-200',
                    username: profileMenuHeader.username,
                    email: profileMenuHeader.email,
                    photo: profileMenuHeader.photo,
                  }}
                  menuOptions={userMenu}
                  optionsClassName="text-gray-700 hover:bg-green-50 transition-colors duration-200"
                />
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              aria-label="Menu"
            >
              <span className="material-icons text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-green-800 border-t border-green-600">
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Profile Section */}
            <div className="flex items-center gap-3 p-3 bg-green-700 rounded-lg mb-3">
              <ProfilePhoto
                src={userAvatar}
                className="w-14 h-14 rounded-full border-2 border-white"
                handleClick={() => {}}
              />
              <div className="flex-1">
                <p className="text-white font-bold">{profileMenuHeader.username}</p>
                <p className="text-green-200 text-sm">{profileMenuHeader.email}</p>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navMenu.map((link, index) => {
              const isCartLink = link.icon === 'shopping_cart';
              return (
                <Link
                  key={index}
                  to={link.navigateTo || '#'}
                  className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200 relative"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-icons">{link.icon}</span>
                  <span className="font-medium">{link.title}</span>
                  {isCartLink && itemCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Mobile User Menu */}
            <div className="border-t border-green-600 pt-3 mt-3">
              {userMenu.map((option, index) => (
                <a
                  key={index}
                  href={option.navigateTo || '#'}
                  className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-icons">{option.icon}</span>
                  <span className="font-medium">{option.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
