import { definePreset } from '@pandacss/dev';
import * as patterns from './patterns';
import { tokens } from './tokens';
import { semanticTokens } from './semanticTokens';
import { recipes, slotRecipes } from './recipes';
import { textStyles } from './textStyles';
import { layerStyles } from './layerStyles';
import { keyframes } from './keyframes';
import { globalCss } from './globalCss';

export const particlesPreset = definePreset({
  conditions: {
    extend: {
      light: '[data-color-mode=light] &, .light &',
      dark: '[data-color-mode=dark] &, .dark &',
      closed: '&:is([data-state=closed])',
      open: '&:is([open], [data-state=open])',
      active: '&:is(:active, [data-active], [data-state=active])',
      inactive: '&:is([data-inactive], [data-state=inactive])',
    },
  },
  patterns: {
    extend: patterns,
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      recipes,
      slotRecipes,
      textStyles,
      layerStyles,
      keyframes,
    },
  },
  globalCss,
});
