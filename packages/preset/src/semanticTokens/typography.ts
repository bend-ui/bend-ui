import { defineSemanticTokens } from '@pandacss/dev';

export const fonts = defineSemanticTokens.fonts({
  body: { value: '{fonts.sans}' },
  heading: { value: '{fonts.sans}' },
});

export const fontSizes = defineSemanticTokens.fontSizes({});

export const fontWeights = defineSemanticTokens.fontWeights({});

export const lineHeights = defineSemanticTokens.lineHeights({});

export const letterSpacings = defineSemanticTokens.letterSpacings({});
