import React from 'react';

interface LinkTagProps {
  className?: string;
  label?: string;
  href?: string;
  children?: React.ReactNode;
}

const LinkTag: React.FC<LinkTagProps> = ({ className, label, href, children }) => {
  return (
    <a className={className} href={href} target='_blank'>
      {children || label}
    </a>
  );
};

export default LinkTag;
