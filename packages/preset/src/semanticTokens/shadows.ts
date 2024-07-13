import { defineSemanticTokens } from '@pandacss/dev';

export const shadows = defineSemanticTokens.shadows({
  base: { value: '0 0 0 1px {colors.shadow}' },
  focusRing: { value: '0 0 0 2px {colors.focusRing}' },
});
