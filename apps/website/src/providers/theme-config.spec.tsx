import RootLayout from '../../app/layout';
import pandaConfig from '../../panda.config';

vi.mock('@fontsource-variable/inter', () => ({}));
vi.mock('../../styles/globals.css', () => ({}));
vi.mock('./root-provider', () => ({
  RootProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('website color-mode theme contract', () => {
  it('generates and applies the default Panda theme', () => {
    const layout = RootLayout({ children: null });

    expect(pandaConfig.staticCss?.themes).toContain('default');
    expect(layout.props['data-panda-theme']).toBe('default');
  });
});
