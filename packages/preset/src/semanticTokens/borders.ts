import { defineSemanticTokens } from '@pandacss/dev';

export const borders = defineSemanticTokens.borders({
  base: { value: '{borderWidths.base} solid {colors.stroke}' },
  primary: {
    value: '{borderWidths.base} solid {colors.stroke.primary}',
  },
  danger: { value: '{borderWidths.base} solid {colors.stroke.danger}' },
  strong: { value: '{borderWidths.base} solid {colors.stroke.strong}' },
  weak: { value: '{borderWidths.base} solid {colors.stroke.weak}' },
  disabled: {
    value: '{borderWidths.base} solid {colors.stroke.disabled}',
  },
  input: { value: '{borderWidths.base} solid {colors.input.stroke}' },
  divider: {
    value: '{borderWidths.base} solid {colors.divider.stroke}',
  },
});
