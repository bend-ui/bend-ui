import path from 'path';
import { defineConfig } from '@pandacss/dev';
import { preset } from './packages/preset/src/preset';

export default defineConfig({
  preflight: true,

  jsxFramework: 'react',

  include: [
    path.resolve(__dirname, './packages/react/components/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, './packages/ark/components/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, './packages/radix/components/**/*.{js,jsx,ts,tsx}'),
    path.resolve(__dirname, './packages/aria/components/**/*.{js,jsx,ts,tsx}'),
    path.resolve(
      __dirname,
      './apps/playground-panda/pages/**/*.{js,jsx,ts,tsx}',
    ),
    path.resolve(
      __dirname,
      './apps/playground-panda-radix/pages/**/*.{js,jsx,ts,tsx}',
    ),
    path.resolve(
      __dirname,
      './apps/playground-panda-radix/components/**/*.{js,jsx,ts,tsx}',
    ),
    path.resolve(__dirname, './apps/website/pages/**/*.{js,jsx,ts,tsx}'),
  ],

  exclude: [],

  presets: ['@pandacss/dev/presets', preset],

  importMap: '@particles/styled-system',
});
