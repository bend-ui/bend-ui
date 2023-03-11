const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const twColors = require('tailwindcss/colors');

const colors = {
  ...twColors,
  shark: {
    50: '#f6f6f7',
    100: '#F5F7FB',
    200: '#B6BED4',
    300: '#9ba0ad',
    400: '#757b8c',
    500: '#5b6071',
    600: '#323741',
    700: '#2A2D35',
    800: '#23242A',
    900: '#1c1d21',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'var(--particles-colors-primary)',
        secondary: 'var(--particles-colors-secondary)',
        canvas: 'var(--particles-colors-canvas)',
        'canvas-accent': 'var(--particles-colors-canvas-accent)',
        surface: 'var(--particles-colors-surface)',
        'surface-accent': 'var(--particles-colors-surface-accent)',
        'surface-subtle': 'var(--particles-colors-surface-subtle)',
        shark: colors.shark,
      },
      variables: {
        DEFAULT: {
          colors: {
            primary: colors.indigo[500],
            secondary: colors.yellow[500],
            canvas: colors.zinc[50],
            surface: colors.white,
            'surface-accent': colors.zinc[100],
          },
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: {
            primary: colors.indigo[500],
            secondary: colors.red[500],
            canvas: '#23242A',
            'canvas-accent': colors.zinc[700],
            surface: '#323741',
            'surface-accent': '#484D5A',
            'surface-subtle': '#2A2E35',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@mertasan/tailwindcss-variables')({
      darkToRoot: false,
      variablePrefix: 'particles',
    }),
  ],
};
