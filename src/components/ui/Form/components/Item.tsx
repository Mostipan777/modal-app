import React from 'react';

import { Label } from '../../Label';
import { Error } from '../../Error';
import { Box } from '../../Box';

export interface ItemProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  label: string;
  error?: string;
}

export const Item: React.FC<ItemProps> = ({ children, error, label, ...props }) => {
  return (
    <Box direction="column">
      <Label {...props}>{label}</Label>
      {children}
      <Error>{error || ''}</Error>
    </Box>
  );
};
