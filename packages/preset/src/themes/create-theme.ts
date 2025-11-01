import { type ThemeVariant } from '@pandacss/types';

interface ThemeOptions {
  primaryColor?: string;
  neutralColor?: string;
  successColor?: string;
  warningColor?: string;
  dangerColor?: string;
  infoColor?: string;
  defaultPrimaryColor?: string;
  defaultNeutralColor?: string;
  defaultSuccessColor?: string;
  defaultWarningColor?: string;
  defaultDangerColor?: string;
  defaultInfoColor?: string;
}

// Helper function to create color scale tokens
const createColorScale = (colorName: string, defaultShade: string) => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return {
    DEFAULT: {
      value: `{colors.${colorName}.${defaultShade}}`,
    },
    ...shades.reduce(
      (acc, shade) => {
        acc[shade] = {
          value: `{colors.${colorName}.${shade}}`,
        };
        return acc;
      },
      {} as Record<number, { value: string }>,
    ),
  };
};

export const createTheme = (options: ThemeOptions = {}): ThemeVariant => {
  const {
    primaryColor = 'indigo',
    neutralColor = 'gray',
    successColor = 'green',
    warningColor = 'yellow',
    dangerColor = 'red',
    infoColor = 'blue',
    defaultPrimaryColor = '500',
    defaultNeutralColor = '500',
    defaultSuccessColor = '500',
    defaultWarningColor = '500',
    defaultDangerColor = '500',
    defaultInfoColor = '500',
  } = options;

  const theme = {
    semanticTokens: {
      colors: {
        primary: createColorScale(primaryColor, defaultPrimaryColor),
        success: createColorScale(successColor, defaultSuccessColor),
        warning: createColorScale(warningColor, defaultWarningColor),
        danger: createColorScale(dangerColor, defaultDangerColor),
        info: createColorScale(infoColor, defaultInfoColor),
        neutral: {
          DEFAULT: {
            value: `{colors.neutral.${defaultNeutralColor}}`,
          },
          50: {
            value: {
              _light: `{colors.${neutralColor}.50}`,
              _dark: `{colors.${neutralColor}.950}`,
            },
          },
          100: {
            value: {
              _light: `{colors.${neutralColor}.100}`,
              _dark: `{colors.${neutralColor}.900}`,
            },
          },
          200: {
            value: {
              _light: `{colors.${neutralColor}.200}`,
              _dark: `{colors.${neutralColor}.800}`,
            },
          },
          300: {
            value: {
              _light: `{colors.${neutralColor}.300}`,
              _dark: `{colors.${neutralColor}.700}`,
            },
          },
          400: {
            value: {
              _light: `{colors.${neutralColor}.400}`,
              _dark: `{colors.${neutralColor}.600}`,
            },
          },
          500: {
            value: {
              _light: `{colors.${neutralColor}.500}`,
              _dark: `{colors.${neutralColor}.500}`,
            },
          },
          600: {
            value: {
              _light: `{colors.${neutralColor}.600}`,
              _dark: `{colors.${neutralColor}.400}`,
            },
          },
          700: {
            value: {
              _light: `{colors.${neutralColor}.700}`,
              _dark: `{colors.${neutralColor}.300}`,
            },
          },
          800: {
            value: {
              _light: `{colors.${neutralColor}.800}`,
              _dark: `{colors.${neutralColor}.200}`,
            },
          },
          900: {
            value: {
              _light: `{colors.${neutralColor}.900}`,
              _dark: `{colors.${neutralColor}.100}`,
            },
          },
          950: {
            value: {
              _light: `{colors.${neutralColor}.950}`,
              _dark: `{colors.${neutralColor}.50}`,
            },
          },
        },
      },
    },
  };

  return theme;
};
