import type { ThemeVariant } from '@pandacss/types';
import {
  namedThemeColors,
  type NamedThemeColor,
} from '../tokens/theme-colors';
import {
  type ColorRamp,
  createColorScale,
} from '../utils/create-color-scale';
import { createDuotoneNeutralScale } from '../utils/create-duotone-neutral-scale';

interface ThemeTypography {
  heading: string;
  body: string;
  code: string;
  headingTracking: string;
}

interface ThemeShape {
  control: string;
  surface: string;
  overlay: string;
  borderWidth: string;
}

interface ThemeElevation {
  surface: string;
  raised: string;
  overlay: string;
}

interface ThemeDensity {
  controlHeight: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

interface ThemeMotion {
  character: string;
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    default: string;
    enter: string;
    exit: string;
  };
}

export interface ThemePersonality {
  name: string;
  description: string;
  primary: NamedThemeColor;
  secondary: NamedThemeColor;
  lightColor: NamedThemeColor;
  darkColor: NamedThemeColor;
  primaryStates: {
    default: ColorRamp;
    hover: ColorRamp;
    active: ColorRamp;
    focus: ColorRamp;
  };
  secondaryShade: ColorRamp;
  onPrimary: {
    color: NamedThemeColor;
    shade: ColorRamp;
  };
  typography: ThemeTypography;
  shape: ThemeShape;
  elevation: ThemeElevation;
  density: ThemeDensity;
  motion: ThemeMotion;
}

export const themePersonalities = {
  stratus: {
    name: 'Stratus',
    description: 'Clean, technical, calm, and trustworthy.',
    primary: 'signal-blue',
    secondary: 'porcelain',
    lightColor: 'porcelain',
    darkColor: 'signal-blue',
    primaryStates: {
      default: '500',
      hover: '600',
      active: '700',
      focus: '700',
    },
    secondaryShade: '50',
    onPrimary: { color: 'porcelain', shade: '50' },
    typography: {
      heading: 'var(--font-stratus-heading, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
      body: 'var(--font-stratus-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
      code: 'var(--font-stratus-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.025em',
    },
    shape: {
      control: '10px',
      surface: '16px',
      overlay: '20px',
      borderWidth: '1px',
    },
    elevation: {
      surface: '0 0 0 1px {colors.neutral.200}',
      raised:
        '0 0 0 1px {colors.neutral.200}, 0 8px 24px -12px {colors.neutral.800}',
      overlay:
        '0 0 0 1px {colors.neutral.200}, 0 24px 56px -20px {colors.neutral.900}',
    },
    density: {
      controlHeight: '40px',
      spacing: { xs: '4px', sm: '8px', md: '12px', lg: '20px' },
    },
    motion: {
      character: 'Precise and gently springy.',
      duration: { fast: '120ms', normal: '180ms', slow: '260ms' },
      easing: {
        default: 'cubic-bezier(0.2, 0, 0, 1)',
        enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  solstice: {
    name: 'Solstice',
    description: 'Playful, creative, optimistic, and bold.',
    primary: 'butter-yellow',
    secondary: 'royal-iris',
    lightColor: 'butter-yellow',
    darkColor: 'royal-iris',
    primaryStates: {
      default: '500',
      hover: '400',
      active: '300',
      focus: '400',
    },
    secondaryShade: '600',
    onPrimary: { color: 'royal-iris', shade: '900' },
    typography: {
      heading: 'var(--font-solstice-heading, "Trebuchet MS", ui-rounded, system-ui, sans-serif)',
      body: 'var(--font-solstice-body, "Trebuchet MS", ui-rounded, system-ui, sans-serif)',
      code: 'var(--font-solstice-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.02em',
    },
    shape: {
      control: '16px',
      surface: '24px',
      overlay: '28px',
      borderWidth: '2px',
    },
    elevation: {
      surface: '0 0 0 2px {colors.secondary.600}',
      raised: '4px 4px 0 {colors.secondary.600}',
      overlay: '8px 8px 0 {colors.secondary.700}',
    },
    density: {
      controlHeight: '44px',
      spacing: { xs: '6px', sm: '10px', md: '16px', lg: '24px' },
    },
    motion: {
      character: 'Buoyant with a controlled overshoot.',
      duration: { fast: '140ms', normal: '240ms', slow: '360ms' },
      easing: {
        default: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        enter: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  volt: {
    name: 'Volt',
    description: 'Hacker-minded, cybernetic, compact, and energetic.',
    primary: 'lime-spark',
    secondary: 'graphite',
    lightColor: 'lime-spark',
    darkColor: 'graphite',
    primaryStates: {
      default: '500',
      hover: '400',
      active: '300',
      focus: '400',
    },
    secondaryShade: '700',
    onPrimary: { color: 'graphite', shade: '950' },
    typography: {
      heading: 'var(--font-volt-heading, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      body: 'var(--font-volt-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
      code: 'var(--font-volt-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.04em',
    },
    shape: {
      control: '2px',
      surface: '4px',
      overlay: '6px',
      borderWidth: '1px',
    },
    elevation: {
      surface: '0 0 0 1px {colors.primary.700}',
      raised:
        '0 0 0 1px {colors.primary.600}, 0 0 20px oklch(0.918 0.23 128.271 / 0.18)',
      overlay:
        '0 0 0 1px {colors.primary.500}, 0 0 36px oklch(0.918 0.23 128.271 / 0.24)',
    },
    density: {
      controlHeight: '36px',
      spacing: { xs: '2px', sm: '6px', md: '10px', lg: '16px' },
    },
    motion: {
      character: 'Immediate, linear, and crisp.',
      duration: { fast: '80ms', normal: '120ms', slow: '180ms' },
      easing: {
        default: 'cubic-bezier(0.2, 0, 0, 1)',
        enter: 'cubic-bezier(0, 0, 0.2, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  nebula: {
    name: 'Nebula',
    description: 'Neon, expressive, nocturnal, and futuristic.',
    primary: 'dragonfruit',
    secondary: 'night-violet',
    lightColor: 'dragonfruit',
    darkColor: 'night-violet',
    primaryStates: {
      default: '200',
      hover: '100',
      active: '50',
      focus: '100',
    },
    secondaryShade: '700',
    onPrimary: { color: 'night-violet', shade: '950' },
    typography: {
      heading: 'var(--font-nebula-heading, "Arial Narrow", "Avenir Next Condensed", system-ui, sans-serif)',
      body: 'var(--font-nebula-body, "Avenir Next", system-ui, sans-serif)',
      code: 'var(--font-nebula-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.035em',
    },
    shape: {
      control: '999px',
      surface: '24px',
      overlay: '32px',
      borderWidth: '1px',
    },
    elevation: {
      surface: '0 0 0 1px {colors.primary.800}',
      raised:
        '0 12px 32px -14px oklch(0.683 0.228 358.991 / 0.45)',
      overlay:
        '0 24px 64px -20px oklch(0.683 0.228 358.991 / 0.58)',
    },
    density: {
      controlHeight: '44px',
      spacing: { xs: '4px', sm: '10px', md: '16px', lg: '28px' },
    },
    motion: {
      character: 'Dramatic, fluid, and elastic.',
      duration: { fast: '160ms', normal: '260ms', slow: '420ms' },
      easing: {
        default: 'cubic-bezier(0.2, 0, 0, 1)',
        enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  canopy: {
    name: 'Canopy',
    description: 'Premium, organic, editorial, and timeless.',
    primary: 'emerald-ink',
    secondary: 'champagne',
    lightColor: 'champagne',
    darkColor: 'emerald-ink',
    primaryStates: {
      default: '500',
      hover: '600',
      active: '700',
      focus: '700',
    },
    secondaryShade: '50',
    onPrimary: { color: 'champagne', shade: '50' },
    typography: {
      heading: 'var(--font-canopy-heading, Iowan Old Style, Baskerville, "Times New Roman", serif)',
      body: 'var(--font-canopy-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
      code: 'var(--font-canopy-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.015em',
    },
    shape: {
      control: '4px',
      surface: '8px',
      overlay: '12px',
      borderWidth: '1px',
    },
    elevation: {
      surface: '0 0 0 1px {colors.neutral.200}',
      raised:
        '0 1px 2px oklch(0.378 0.073 168.94 / 0.12), 0 12px 32px -20px oklch(0.378 0.073 168.94 / 0.28)',
      overlay:
        '0 2px 4px oklch(0.378 0.073 168.94 / 0.14), 0 28px 64px -24px oklch(0.378 0.073 168.94 / 0.34)',
    },
    density: {
      controlHeight: '42px',
      spacing: { xs: '4px', sm: '8px', md: '14px', lg: '24px' },
    },
    motion: {
      character: 'Restrained, calm, and deliberate.',
      duration: { fast: '180ms', normal: '280ms', slow: '420ms' },
      easing: {
        default: 'cubic-bezier(0.22, 1, 0.36, 1)',
        enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  aster: {
    name: 'Aster',
    description: 'Futuristic, artistic, warm, and sophisticated.',
    primary: 'ultra-violet',
    secondary: 'soft-apricot',
    lightColor: 'soft-apricot',
    darkColor: 'ultra-violet',
    primaryStates: {
      default: '500',
      hover: '600',
      active: '700',
      focus: '700',
    },
    secondaryShade: '100',
    onPrimary: { color: 'soft-apricot', shade: '50' },
    typography: {
      heading: 'var(--font-aster-heading, "Avenir Next", "Segoe UI", system-ui, sans-serif)',
      body: 'var(--font-aster-body, "Avenir Next", "Segoe UI", system-ui, sans-serif)',
      code: 'var(--font-aster-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
      headingTracking: '-0.03em',
    },
    shape: {
      control: '12px',
      surface: '20px',
      overlay: '28px',
      borderWidth: '1px',
    },
    elevation: {
      surface: '0 0 0 1px {colors.neutral.200}',
      raised:
        '0 10px 28px -16px oklch(0.496 0.283 288.375 / 0.34)',
      overlay:
        '0 28px 72px -24px oklch(0.496 0.283 288.375 / 0.46)',
    },
    density: {
      controlHeight: '42px',
      spacing: { xs: '4px', sm: '9px', md: '15px', lg: '25px' },
    },
    motion: {
      character: 'Fluid, graceful, and slightly asymmetric.',
      duration: { fast: '140ms', normal: '240ms', slow: '360ms' },
      easing: {
        default: 'cubic-bezier(0.2, 0, 0, 1)',
        enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
} as const satisfies Record<string, ThemePersonality>;

export type ThemePersonalityName = keyof typeof themePersonalities;

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
  };

  return {
    semanticTokens: {
      colors: {
        primary: {
          ...createColorScale(
            personality.primary,
            personality.primaryStates.default,
          ),
          fill: primaryFill,
          text: {
            inverse: {
              strong: { value: onPrimary },
              weak: { value: onPrimary },
            },
          },
          icon: {
            inverse: {
              strong: { value: onPrimary },
              weak: { value: onPrimary },
            },
          },
        },
        secondary: createColorScale(
          personality.secondary,
          personality.secondaryShade,
        ),
        neutral: createDuotoneNeutralScale(
          personality.lightColor,
          personality.darkColor,
        ),
        text: {
          primary: {
            inverse: {
              strong: { value: onPrimary },
              weak: { value: onPrimary },
            },
          },
        },
        fill: {
          primary: {
            ...primaryFill,
            fill: {
              hover: primaryFill.hover,
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
        control: { value: personality.density.controlHeight },
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
  Object.entries(themePersonalities).map(([name, personality]) => [
    name,
    createPersonalityTheme(personality),
  ]),
) as Record<ThemePersonalityName, ThemeVariant>;

export const themePersonalityCatalog = Object.fromEntries(
  Object.entries(themePersonalities).map(([id, personality]) => [
    id,
    {
      ...personality,
      colors: {
        primary: namedThemeColors[personality.primary],
        secondary: namedThemeColors[personality.secondary],
      },
    },
  ]),
);
