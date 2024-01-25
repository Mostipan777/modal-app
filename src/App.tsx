import React from 'react';

import { MainContainer } from './components';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
