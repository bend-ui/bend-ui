import Head from 'next/head';
import type { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dashboard-tailwind!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
