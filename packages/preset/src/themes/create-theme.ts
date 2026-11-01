import { type ThemeVariant } from '@pandacss/types';
import { ColorRamp, createColorScale } from '../utils/create-color-scale';
import { createNeutralScale } from '../utils/create-neutral-scale';
import { colors } from '../semanticTokens/colors';
import { danger } from '../semanticTokens/tones';

export interface ThemeOptions {
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

/** Build a scoped Theme, rebinding danger roles where its palette is selected. */
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
        // CSS custom-property references resolve at their declaration scope.
        // Redeclare both role directions beside this Theme's palette so nested
        // Theme boundaries do not inherit values resolved against a parent.
        danger: {
          ...colors.danger,
          ...createColorScale(errorColor, defaultErrorColor),
        },
        fill: { danger: danger.fill },
        text: { danger: danger.text },
        stroke: { danger: danger.stroke },
        icon: { danger: danger.icon },
        // Retain the legacy ramp while danger owns the status palette.
        error: {
          ...createColorScale('danger', defaultErrorColor),
          DEFAULT: { value: '{colors.danger}' },
        },
        info: createColorScale(infoColor, defaultInfoColor),
        neutral: createNeutralScale(neutralColor, defaultNeutralColor),
      },
    },
  };

  return theme;
};
