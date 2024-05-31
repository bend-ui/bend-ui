import { Colors } from './components/token-docs/colors';
import { Fonts } from './components/token-docs/fonts';
import type { NextraThemeLayoutProps } from 'nextra';

export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <h1>My Theme</h1>
      <div>{children}</div>
      <Fonts />
      <Colors />
    </div>
  );
}
