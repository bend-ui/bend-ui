import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource/inter';

import type { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      <Head>
        <title>Welcome to playground-panda-radix!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
