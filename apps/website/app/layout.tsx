import '@fontsource-variable/inter';
import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
