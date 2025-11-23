import { defineSemanticTokens } from '@pandacss/dev';

export const borders = defineSemanticTokens.borders({
  base: { value: '1px solid {colors.stroke}' },
  primary: { value: '1px solid {colors.stroke.primary}' },
  error: { value: '1px solid {colors.stroke.error}' },
  strong: { value: '1px solid {colors.stroke.strong}' },
  weak: { value: '1px solid {colors.stroke.weak}' },
  disabled: { value: '1px solid {colors.stroke.disabled}' },
  input: { value: '1px solid {colors.input.stroke}' },
  divider: { value: '1px solid {colors.divider.stroke}' },
});
