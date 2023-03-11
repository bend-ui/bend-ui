import merge from 'deepmerge';
import {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  palette,
  radii,
  shadows,
  sizes,
  spacing,
} from './tokens';
import type { CSSObject } from '@emotion/react';

export const textStyles: Record<string, CSSObject> = {
  display: {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['none'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacings.tight,
  },
  headline: {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['none'],
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.tight,
  },
  title: {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['none'],
    fontWeight: fontWeights.bold,
  },
  subtitle: {
    fontSize: fontSizes['xl'],
    lineHeight: lineHeights[7],
  },
  lead: {
    fontSize: fontSizes['lg'],
    lineHeight: lineHeights[6],
  },
  body: {
    fontSize: fontSizes['md'],
    lineHeight: lineHeights[5],
  },
  small: {
    fontSize: fontSizes['sm'],
    lineHeight: lineHeights[4],
  },
  caption: {
    fontSize: fontSizes['xs'],
    lineHeight: lineHeights[5],
    textTransform: 'uppercase',
  },
};

export const theme = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space: spacing,
  colors: {
    ...palette,
    neutral: palette.zinc200,
    'neutral-hover': palette.zinc200,
    'neutral-subtle': palette.zinc50,
    'on-neutral': palette.zinc600,
    primary: palette.violet700,
    'primary-subtle': palette.violet50,
    'primary-hover': palette.violet800,
    'on-primary': palette.white,
    success: palette.green500,
    'success-hover': palette.green700,
    'success-subtle': palette.green50,
    'on-success': palette.white,
    warning: palette.yellow500,
    'warning-hover': palette.yellow700,
    'warning-subtle': palette.yellow50,
    'on-warning': palette.yellow800,
    danger: palette.red500,
    'danger-hover': palette.red700,
    'danger-subtle': palette.red50,
    'on-danger': palette.white,
    canvas: palette.neutral50,
    'on-canvas': palette.neutral900,
    surface: palette.white,
    'on-surface': palette.neutral900,
    outline: palette.zinc200,
    text: palette.neutral800,
    'text-muted': palette.neutral500,
  },
  shadows: {
    ...shadows,
    focusRing: `0 0 0 4px ${palette.violet100}`,
  },
  radii,
  zIndices: {},
  breakpoints,
  mediaQueries: {
    bp1: '(max-width: 40em)',
    bp2: '(max-width: 52em)',
  },
  sizes,
  components: {},
  fns: {
    textStyles: (value: keyof typeof textStyles) => textStyles[value],
    focusStyles: () => ({
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },
    }),
  },
};

export type Theme = typeof theme;

export const createTheme = (customTheme) => merge(theme, customTheme);
