'use client';

import { NextProvider } from 'fumadocs-core/framework/next';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export const RootProvider = ({ children }: { children: ReactNode }) => (
  <NextProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </NextProvider>
);
