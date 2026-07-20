import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    fontFamily: 'body',
    color: 'text',
    bg: 'bg.page',
    minWidth: 'screen',
    minHeight: 'screen',
  },
  'body :where(h1, h2, h3, h4, h5, h6)': {
    fontFamily: 'heading',
    letterSpacing: 'heading',
  },
  'body :where(code, kbd, pre)': {
    fontFamily: 'code',
  },
});
