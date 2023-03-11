import Head from 'next/head';
import { globalStyles, ThemeProvider } from '@particles/stitches';
import type { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider>
      <Head>
        <title>Welcome to dashboard!</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
