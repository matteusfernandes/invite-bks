'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/theme';

export default function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
