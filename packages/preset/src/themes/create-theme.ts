import { type ThemeVariant } from '@pandacss/types';

interface ThemeOptions {
  primaryColor: string;
  neutralColor: string;
  defaultPrimaryColor: string;
  defaultNeutralColor: string;
}

export const createTheme = (options: ThemeOptions): ThemeVariant => {
  const {
    primaryColor = 'indigo',
    neutralColor = 'shark',
    defaultPrimaryColor = '500',
    defaultNeutralColor = '500',
  } = options;

  return {
    semanticTokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: `{colors.${primaryColor}.${defaultPrimaryColor}}`,
          },
          50: {
            value: `{colors.${primaryColor}.50}`,
          },
          100: {
            value: `{colors.${primaryColor}.100}`,
          },
          200: {
            value: `{colors.${primaryColor}.200}`,
          },
          300: {
            value: `{colors.${primaryColor}.300}`,
          },
          400: {
            value: `{colors.${primaryColor}.400}`,
          },
          500: {
            value: `{colors.${primaryColor}.500}`,
          },
          600: {
            value: `{colors.${primaryColor}.600}`,
          },
          700: {
            value: `{colors.${primaryColor}.700}`,
          },
          800: {
            value: `{colors.${primaryColor}.800}`,
          },
          900: {
            value: `{colors.${primaryColor}.900}`,
          },
          950: {
            value: `{colors.${primaryColor}.950}`,
          },
        },
        neutral: {
          DEFAULT: {
            value: `{colors.${neutralColor}.${defaultNeutralColor}}`,
          },
          50: {
            value: `{colors.${neutralColor}.50}`,
          },
          100: {
            value: `{colors.${neutralColor}.100}`,
          },
          200: {
            value: `{colors.${neutralColor}.200}`,
          },
          300: {
            value: `{colors.${neutralColor}.300}`,
          },
          400: {
            value: `{colors.${neutralColor}.400}`,
          },
          500: {
            value: `{colors.${neutralColor}.500}`,
          },
          600: {
            value: `{colors.${neutralColor}.600}`,
          },
          700: {
            value: `{colors.${neutralColor}.700}`,
          },
          800: {
            value: `{colors.${neutralColor}.800}`,
          },
          900: {
            value: `{colors.${neutralColor}.900}`,
          },
          950: {
            value: `{colors.${neutralColor}.950}`,
          },
        },
      },
    },
  };
};
