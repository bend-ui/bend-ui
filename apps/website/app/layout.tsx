import '@fontsource-variable/inter';
import '../styles/globals.css';
import { RootProvider } from '../src/providers/root-provider';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <html lang="en" data-panda-theme="default" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
