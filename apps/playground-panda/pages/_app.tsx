import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource-variable/inter';
import { Button, Modal } from '@particles/ark';

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
        <Modal.Root open={open}>
          <Modal.Content>
            <Modal.Title>Hello</Modal.Title>
            <Modal.Description>Hello</Modal.Description>
            <Modal.Content>
              <Button onClick={() => setOpen(false)}>Hello</Button>
            </Modal.Content>
          </Modal.Content>
        </Modal.Root>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
