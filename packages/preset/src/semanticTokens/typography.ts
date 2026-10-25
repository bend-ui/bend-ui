import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const fonts = defineSemanticTokens.fonts({
  body: { value: stratusPersonality.typography.body },
  heading: { value: stratusPersonality.typography.heading },
  code: { value: stratusPersonality.typography.code },
});

export const fontSizes = defineSemanticTokens.fontSizes({});

export const fontWeights = defineSemanticTokens.fontWeights({});

export const lineHeights = defineSemanticTokens.lineHeights({});

export const letterSpacings = defineSemanticTokens.letterSpacings({
  heading: { value: stratusPersonality.typography.headingTracking },
});
