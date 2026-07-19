import RootLayout from '../../app/layout';
import pandaConfig from '../../panda.config';

jest.mock('@fontsource-variable/inter', () => ({}));
jest.mock('../../styles/globals.css', () => ({}));
jest.mock('./root-provider', () => ({
  RootProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('website color-mode theme contract', () => {
  it('generates and applies the default Panda theme', () => {
    const layout = RootLayout({ children: null });

    expect(pandaConfig.staticCss?.themes).toContain('default');
    expect(layout.props['data-panda-theme']).toBe('default');
  });
});
