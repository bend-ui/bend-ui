import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@fontsource-variable/inter';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to playground-panda!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
