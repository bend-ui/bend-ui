import { createBendConfig } from '@bend-ui/config';
import { level2DesignExtension } from './level2-design-extension';

export default createBendConfig({
  outdir: 'styled-system-level2',
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [level2DesignExtension],
  staticCss: { themes: ['*'], recipes: '*' },
});
