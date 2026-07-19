import { createBendConfig } from '@bend-ui/config';
import path from 'path';
import { level2DesignExtension } from './level2-design-extension';

export default createBendConfig({
  cwd: path.resolve(__dirname),
  outdir: 'styled-system-level2',
  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}'),
  ],
  presets: [level2DesignExtension],
  staticCss: { themes: ['*'], recipes: '*' },
});
