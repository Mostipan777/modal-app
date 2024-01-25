import { Children, PropsWithChildren } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';

import { mainTheme } from './mainTheme';

export const ThemeProvider = (props: PropsWithChildren) => {
  return <OriginalThemeProvider theme={mainTheme}>{Children.only(props.children)}</OriginalThemeProvider>;
};
