import type { ThemeVariant } from '@pandacss/types';
import {
  themePersonalities,
  themePersonalityIds,
  type ThemePersonality,
  type ThemePersonalityName,
} from './personalities';
import { createColorScale } from '../utils/create-color-scale';
import { createDuotoneNeutralScale } from '../utils/create-duotone-neutral-scale';

const createPersonalityTheme = (
  personality: ThemePersonality,
): ThemeVariant => {
  const onPrimary = `{colors.${personality.onPrimary.color}.${personality.onPrimary.shade}}`;
  const primaryFill = {
    DEFAULT: {
      value: `{colors.primary.${personality.primaryStates.default}}`,
    },
    hover: {
      value: `{colors.primary.${personality.primaryStates.hover}}`,
    },
    active: {
      value: `{colors.primary.${personality.primaryStates.active}}`,
    },
    focus: {
      value: `{colors.primary.${personality.primaryStates.focus}}`,
    },
    selected: {
      value: `{colors.primary.${personality.primaryStates.default}}`,
    },
  };

  return {
    semanticTokens: {
      colors: {
        primary: createColorScale(
          personality.primary,
          personality.primaryStates.default,
        ),
        secondary: createColorScale(
          personality.secondary,
          personality.secondaryShade,
        ),
        neutral: createDuotoneNeutralScale(
          personality.lightColor,
          personality.darkColor,
        ),
        fill: {
          primary: primaryFill,
        },
        text: {
          primary: {
            inverse: {
              strong: { value: onPrimary },
              weak: { value: onPrimary },
            },
          },
        },
        icon: {
          primary: {
            inverse: {
              strong: { value: onPrimary },
              weak: { value: onPrimary },
            },
          },
        },
        stroke: {
          primary: {
            DEFAULT: {
              value: `{colors.primary.${personality.primaryStates.default}}`,
            },
            focus: {
              value: `{colors.primary.${personality.primaryStates.focus}}`,
            },
          },
        },
      },
      fonts: {
        body: { value: personality.typography.body },
        heading: { value: personality.typography.heading },
        code: { value: personality.typography.code },
      },
      letterSpacings: {
        heading: { value: personality.typography.headingTracking },
      },
      radii: {
        base: { value: personality.shape.control },
        control: { value: personality.shape.control },
        surface: { value: personality.shape.surface },
        overlay: { value: personality.shape.overlay },
      },
      borderWidths: {
        base: { value: personality.shape.borderWidth },
      },
      shadows: {
        base: { value: personality.elevation.surface },
        surface: { value: personality.elevation.surface },
        raised: { value: personality.elevation.raised },
        overlay: { value: personality.elevation.overlay },
      },
      sizes: {
        control: {
          sm: { value: personality.density.controlHeights.sm },
          md: { value: personality.density.controlHeights.md },
          lg: { value: personality.density.controlHeights.lg },
        },
      },
      spacing: {
        base: { value: personality.density.spacing.md },
        xs: { value: personality.density.spacing.xs },
        sm: { value: personality.density.spacing.sm },
        md: { value: personality.density.spacing.md },
        lg: { value: personality.density.spacing.lg },
      },
      durations: {
        fast: { value: personality.motion.duration.fast },
        normal: { value: personality.motion.duration.normal },
        slow: { value: personality.motion.duration.slow },
      },
      easings: {
        default: { value: personality.motion.easing.default },
        enter: { value: personality.motion.easing.enter },
        exit: { value: personality.motion.easing.exit },
      },
    },
  };
};

export const personalityThemes = Object.fromEntries(
  themePersonalityIds.map((id) => [
    id,
    createPersonalityTheme(themePersonalities[id]),
  ]),
) as Record<ThemePersonalityName, ThemeVariant>;
