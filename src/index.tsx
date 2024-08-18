import './index.css';
import React from 'react';
import App from './App';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
