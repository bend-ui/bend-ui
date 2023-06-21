/** @type {import('tailwindcss').Config} */

const { join } = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [join(__dirname, './**/*.{js,ts,jsx,tsx}')],
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[500],
        'primary-emphasis': colors.indigo[800],
        secondary: colors.yellow[500],
        neutral: colors.gray[500],
        canvas: colors.slate[300],
        surface: colors.slate[600],
      },
    },
  },
  plugins: [],
};
