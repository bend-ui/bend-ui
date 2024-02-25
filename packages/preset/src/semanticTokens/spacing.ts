import { defineSemanticTokens } from '@pandacss/dev';

export const spacing = defineSemanticTokens.spacing({
  base: { value: '{spacing.3}' },
  xs: { value: '{spacing.1}' },
  sm: { value: '{spacing.2}' },
  md: { value: '{spacing.3}' },
  lg: { value: '{spacing.5}' },
});
