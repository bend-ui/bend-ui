import RootLayout from '../../app/layout';
import pandaConfig from '../../panda.config';

vi.mock('@fontsource-variable/inter', () => ({}));
vi.mock('../../styles/globals.css', () => ({}));
vi.mock('./root-provider', () => ({
  RootProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('website color-mode theme contract', () => {
  it('generates and initially applies the Stratus Panda theme', () => {
    const layout = RootLayout({ children: null });

    expect(pandaConfig.staticCss?.themes).toContain('stratus');
    expect(layout.props['data-panda-theme']).toBe('stratus');
  });
});
