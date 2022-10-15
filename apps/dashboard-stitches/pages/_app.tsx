import { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles, ThemeProvider } from '@particles/stitches';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider theme={{}}>
      <Head>
        <title>Welcome to dashboard!</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
