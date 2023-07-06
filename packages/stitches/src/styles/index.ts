import { createStitches } from '@stitches/react';
import { theme } from '@particles/theme';
import type * as Stitches from '@stitches/react';

const { fns, mediaQueries, ...restTheme } = theme;

export const { styled, css, config, globalCss, createTheme } = createStitches({
  theme: restTheme,
  media: mediaQueries,
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    focusRing: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),
  },
});

export const textStyles = {
  display: {
    fontSize: '$6xl',
    lineHeight: '$normal',
    fontWeight: '$extrabold',
    letterSpacing: '$tight',
  },
  title: {
    fontSize: '$4xl',
    lineHeight: '$normal',
    fontWeight: '$extrabold',
    letterSpacing: '$tight',
  },
  subtitle: {
    fontSize: '$xl',
    lineHeight: '$normal',
    fontWeight: '$normal',
    letterSpacing: '$normal',
  },
  lead: {
    fontSize: '$lg',
    lineHeight: '$normal',
    fontWeight: '$normal',
    letterSpacing: '$normal',
  },
  body: {
    fontSize: '$base',
    lineHeight: '$normal',
    fontWeight: '$normal',
    letterSpacing: '$normal',
  },
};

export type TextStyles = keyof typeof textStyles;

export const darkTheme = createTheme({
  colors: {
    background: '$colors$neutral900',
    text: '$colors$neutral50',
    canvas: '$colors$neutral900',
    surface: '$colors$neutral800',
    'on-surface': '$colors$white',
    outline: '$colors$neutral700',
    neutral: '$colors$neutral700',
    'neutral-hover': '$colors$neutral800',
    'on-neutral': '$colors$neutral50',
  },
});

const reset = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: '0',
  },
  'html, body': {
    height: '100%',
  },
  body: {
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  '#root, #__next': {
    isolation: 'isolate',
    display: 'contents',
  },
};

export const globalStyles = globalCss({
  ...reset,
  body: {
    fontFamily: '$base',
    fontSize: '$base',
    color: '$text',
    backgroundColor: '$canvas',
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSSProperties = Stitches.CSSProperties;
export type ScaleValue<T> = Stitches.ScaleValue<T>;

export interface DefaultComponentProps {
  sx?: CSS;
}

export * from './createStyles';

export * from './useDefaultProps';

export * from './ThemeProvider';
