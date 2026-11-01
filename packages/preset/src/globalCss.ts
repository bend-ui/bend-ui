import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    textStyle: 'body',
    color: 'text',
    bg: 'bg.page',
    minWidth: 'screen',
    minHeight: 'screen',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
  'body :where(h1, h2, h3, h4, h5, h6)': {
    fontFamily: 'heading',
    letterSpacing: 'heading',
  },
  'body :where(code, kbd, pre)': {
    fontFamily: 'code',
  },
});
