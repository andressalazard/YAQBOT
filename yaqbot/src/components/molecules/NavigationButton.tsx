import React from 'react';
import Button, { ButtonType } from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  buttonProps: {
    className?: string;
    label?: string;
    type?: ButtonType;
  };
  iconProps?: {
    className?: string;
    feature?: string;
  };
  navigateTo: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ buttonProps, iconProps, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <Button {...buttonProps} onClick={() => navigate(navigateTo)}>
      <Icon {...iconProps} />
      <h1>{buttonProps.label}</h1>
    </Button>
  );
};

export default NavigationButton;
