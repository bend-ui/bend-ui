import { defineSemanticTokens } from '@pandacss/dev';

export const borders = defineSemanticTokens.borders({
  base: { value: '1px solid {colors.border}' },
  input: { value: '1px solid {colors.border.input}' },
  primary: { value: '1px solid {colors.border.primary}' },
  error: { value: '1px solid {colors.border.error}' },
  divider: { value: '1px solid {colors.border.divider}' },
  strong: { value: '1px solid {colors.border.strong}' },
  subtle: { value: '1px solid {colors.border.subtle}' },
  disabled: { value: '1px solid {colors.border.disabled}' },
});
