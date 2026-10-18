import { createBendConfig } from '@bend-ui/config';

export default createBendConfig({
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/base-ui/src/**/*.{js,jsx,ts,tsx}',
  ],

  staticCss: {
    themes: ['*'],
    recipes: '*',
  },
});
