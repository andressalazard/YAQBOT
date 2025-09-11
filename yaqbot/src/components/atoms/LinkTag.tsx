import React from 'react';

interface LinkTagProps {
  id: number;
  className?: string;
  label?: string;
  href?: string;
  children?: React.ReactNode;
}

const LinkTag: React.FC<LinkTagProps> = ({ id, className, label, href, children }) => {
  return (
    <a id={id} className={className} href={href} target='_blank'>
      {children || label}
    </a>
  );
};

export default LinkTag;
