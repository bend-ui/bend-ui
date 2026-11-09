'use client';

import { NextProvider } from 'fumadocs-core/framework/next';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export const RootProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  // Preview documents own their color mode and must not subscribe to the Docs theme.
  if (pathname?.startsWith('/component-preview/')) {
    return <NextProvider>{children}</NextProvider>;
  }
  return (
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
};
