import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource-variable/inter';
import { Button, Dialog } from '@particles/ark';

import type { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;

      if (event.metaKey && keyName === 'k') {
        setOpen(true);
      }
    });

    return () => {
      document.removeEventListener('keydown', () => ({}));
    };
  }, []);

  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      <Head>
        <title>Welcome to playground-panda!</title>
      </Head>
      <main>
        <Dialog.Root open={open}>
          <Dialog.Content>
            <Dialog.Title>Hello</Dialog.Title>
            <Dialog.Description>Hello</Dialog.Description>
            <Dialog.Content>
              <Button onClick={() => setOpen(false)}>Hello</Button>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Root>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
