import { createBendConfig } from '@bend-ui/config';
import path from 'path';

export default createBendConfig({
  cwd: path.resolve(__dirname),

  include: [
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}'),
  ],

  staticCss: {
    themes: ['*'],
    recipes: '*',
  },
});
