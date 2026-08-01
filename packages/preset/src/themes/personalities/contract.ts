import type { NamedThemeColor } from '../../tokens/theme-colors';
import type { ColorRamp } from '../../utils/create-color-scale';

export interface ThemeTypography {
  heading: string;
  body: string;
  code: string;
  headingTracking: string;
}

export interface ThemeShape {
  control: string;
  surface: string;
  overlay: string;
  borderWidth: string;
}

export interface ThemeElevation {
  surface: string;
  raised: string;
  overlay: string;
}

export interface ThemeDensity {
  controlHeights: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface ThemeMotion {
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
  id: string;
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

export const defineThemePersonality = <
  const Personality extends ThemePersonality,
>(
  personality: Personality,
): Personality => personality;
