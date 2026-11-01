import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource-variable/inter';
import { Button, Dialog } from '@bend-ui/ark-ui';

import type { AppProps } from 'next/app';
import './styles.css';
import '../styled-system/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const openCommandDialog = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', openCommandDialog);
    return () => document.removeEventListener('keydown', openCommandDialog);
  }, []);

  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      <Head>
        <title>Welcome to playground-panda!</title>
      </Head>
      <main>
        <Dialog.Root open={open} onOpenChange={({ open }) => setOpen(open)}>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Title>Quick actions</Dialog.Title>
              <Dialog.Description>
                Navigate the playground demos.
              </Dialog.Description>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
