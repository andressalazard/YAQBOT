import NavItem from '../../atoms/NavItem/NavItem';

const NavMenu = () => {
  const navLinks = [
    { label: 'Inicio', href: '/home' },
    { label: 'Perfil', href: '/profile' },
    { label: 'Tienda', href: '/store' },
    { label: 'Inventario', href: '/inventory' },
  ];

  return (
    <div className=''>
      {navLinks.map((link, index) => (
        <NavItem key={index} href={link.href} label={link.label} />
      ))}
    </div>
  );
};

export default NavMenu;
