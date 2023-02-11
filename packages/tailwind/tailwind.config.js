const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--particles-colors-primary)',
        secondary: 'var(--particles-colors-secondary)',
        neutral: 'var(--particles-colors-neutral)',
      },
    },
    variables: {
      DEFAULT: {
        colors: {
          primary: colors.indigo[500],
          secondary: colors.yellow[500],
          neutral: colors.slate[50],
        },
      },
    },
    darkVariables: {
      DEFAULT: {
        colors: {
          primary: colors.green[500],
          secondary: colors.red[500],
          neutral: colors.slate[500],
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      darkToRoot: false,
      variablePrefix: 'particles',
    }),
  ],
};
