import { defineSemanticTokens } from '@pandacss/dev';
import { colors } from './colors';
import { spacing } from './spacing';

export const semanticTokens = defineSemanticTokens({
  colors,
  spacing,
  fonts: {
    body: { value: '{fonts.sans}' },
    heading: { value: '{fonts.sans}' },
  },
  borders: {
    base: { value: '1px solid {colors.border}' },
    input: { value: '1px solid {colors.border.input}' },
    primary: { value: '1px solid {colors.border.primary}' },
    danger: { value: '1px solid {colors.border.danger}' },
    divider: { value: '1px solid {colors.border.divider}' },
  },
  radii: {
    base: { value: '8px' },
  },
  animations: {
    'accordion-down': { value: 'accordion-down 0.2s ease-out' },
    'accordion-up': { value: 'accordion-up 0.2s ease-out' },
  },
  sizes: {
    xs: { value: '{sizes.2}' },
    sm: { value: '{sizes.3}' },
    md: { value: '{sizes.4}' },
  },
});
