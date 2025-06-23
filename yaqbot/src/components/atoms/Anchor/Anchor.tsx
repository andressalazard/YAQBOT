import React from 'react';
import styles from './Anchor.module.css';

interface AnchorStylesProps {
  color: string;
  txtDecoration: string;
  cursor?: string;
}

interface AnchorProps {
  styleProps: AnchorStylesProps;
  href: string;
  target?: string;
  children?: React.ReactNode;
}

const Anchor: React.FC<AnchorProps> = ({
  styleProps,
  href,
  target = '_blank',
  children,
}) => {
  const aStyles = {
    '--txt-decoration': styleProps.txtDecoration,
    '--color': styleProps.color,
    '--cursor': styleProps.cursor,
  } as React.CSSProperties;

  return (
    <a
      href={href}
      target={target}
      className={styles.baseAnchor}
      style={aStyles}
    >
      {children}
    </a>
  );
};

export default Anchor;
