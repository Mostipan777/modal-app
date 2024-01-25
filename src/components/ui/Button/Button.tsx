import React from 'react';

import { Spinner } from '../Spinner';
import { StyledButton } from './components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <StyledButton loading={loading} disabled={loading} {...props}>
      {children}
      {loading && <Spinner />}
    </StyledButton>
  );
};
