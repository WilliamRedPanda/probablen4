'use client';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/style';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
