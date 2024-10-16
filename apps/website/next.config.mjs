import { composePlugins, withNx } from '@nx/next';
import nextra from 'nextra';

const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextra,
];

export default composePlugins(...plugins)(nextConfig);
