import { type ThemeVariant } from '@pandacss/types';
import { ColorRamp, createColorScale } from '../utils/create-color-scale';
import { createNeutralScale } from '../utils/create-neutral-scale';

interface ThemeOptions {
  primaryColor?: string;
  neutralColor?: string;
  successColor?: string;
  warningColor?: string;
  errorColor?: string;
  infoColor?: string;
  defaultPrimaryColor?: ColorRamp;
  defaultNeutralColor?: ColorRamp;
  defaultSuccessColor?: ColorRamp;
  defaultWarningColor?: ColorRamp;
  defaultErrorColor?: ColorRamp;
  defaultInfoColor?: ColorRamp;
}

export const createTheme = (options: ThemeOptions = {}): ThemeVariant => {
  const {
    primaryColor = 'indigo',
    neutralColor = 'dove-gray',
    successColor = 'green',
    warningColor = 'yellow',
    errorColor = 'red',
    infoColor = 'blue',
    defaultPrimaryColor = '500',
    defaultNeutralColor = '500',
    defaultSuccessColor = '500',
    defaultWarningColor = '500',
    defaultErrorColor = '500',
    defaultInfoColor = '500',
  } = options;

  const theme = {
    semanticTokens: {
      colors: {
        primary: createColorScale(primaryColor, defaultPrimaryColor),
        success: createColorScale(successColor, defaultSuccessColor),
        warning: createColorScale(warningColor, defaultWarningColor),
        error: createColorScale(errorColor, defaultErrorColor),
        info: createColorScale(infoColor, defaultInfoColor),
        neutral: createNeutralScale(neutralColor, defaultNeutralColor),
      },
    },
  };

  return theme;
};
