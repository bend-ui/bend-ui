import { AppProps } from 'next/app';
import Head from 'next/head';
import { ParticlesProvider } from '@particles/emotion';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ParticlesProvider>
      <Head>
        <title>Welcome to dashboard-emotion!</title>
      </Head>
      <Component {...pageProps} />
    </ParticlesProvider>
  );
}

export default CustomApp;
