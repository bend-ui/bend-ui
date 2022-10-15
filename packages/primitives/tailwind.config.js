/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  content: [join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  darkMode: ['class', '.dark-mode'],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
      },
    },
  },
  plugins: [],
};
