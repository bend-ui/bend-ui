import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource-variable/inter';

import type { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" themes={['light', 'dark']}>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
