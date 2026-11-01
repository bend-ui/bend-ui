import { type ThemeVariant } from '@pandacss/types';
import { ColorRamp, createColorScale } from '../utils/create-color-scale';
import { createNeutralScale } from '../utils/create-neutral-scale';
import {
  createOklchRamp,
  type OklchRampOptions,
} from '../utils/create-oklch-ramp';

export interface NeutralTintOptions {
  /** Omit to derive the neutral hue from the primary hue. */
  hue?: number;
  /** Neutral chroma ceiling (0–0.04), default 0.012. */
  chroma?: number;
}

export interface GeneratedColorsOptions {
  primary: OklchRampOptions;
  neutralTint?: NeutralTintOptions;
}

export interface ThemeOptions {
  /** Opt into generated colors; named-palette defaults remain unchanged. */
  generatedColors?: GeneratedColorsOptions;
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
    generatedColors,
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

  let generatedPrimary;
  let generatedNeutral;
  if (generatedColors) {
    const { primary, neutralTint = {} } = generatedColors;
    const neutralChroma = neutralTint.chroma ?? 0.012;
    if (
      !Number.isFinite(neutralChroma) ||
      neutralChroma < 0 ||
      neutralChroma > 0.04
    ) {
      throw new RangeError('neutralTint.chroma must be between 0 and 0.04');
    }
    generatedPrimary = createOklchRamp(primary);
    const neutralRamp = createOklchRamp({
      hue: neutralTint.hue ?? primary.hue,
      chroma: neutralChroma,
    });
    generatedNeutral = createNeutralScale(neutralRamp, defaultNeutralColor);
  }

  const theme = {
    semanticTokens: {
      colors: {
        primary: generatedPrimary
          ? {
              DEFAULT: { value: `{colors.primary.${defaultPrimaryColor}}` },
              ...generatedPrimary,
            }
          : createColorScale(primaryColor, defaultPrimaryColor),
        success: createColorScale(successColor, defaultSuccessColor),
        warning: createColorScale(warningColor, defaultWarningColor),
        danger: createColorScale(errorColor, defaultErrorColor),
        // Retain the legacy ramp while danger owns the status palette.
        error: createColorScale('danger', defaultErrorColor),
        info: createColorScale(infoColor, defaultInfoColor),
        neutral:
          generatedNeutral ??
          createNeutralScale(neutralColor, defaultNeutralColor),
      },
    },
  };

  return theme;
};
