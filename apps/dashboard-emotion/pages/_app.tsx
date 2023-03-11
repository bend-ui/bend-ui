import Head from 'next/head';
import { ParticlesProvider } from '@particles/emotion';
import type { AppProps } from 'next/app';

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
