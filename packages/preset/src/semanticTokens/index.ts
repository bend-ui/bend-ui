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
    // xs: { value: '{sizes.2}' },
    // sm: { value: '{sizes.3}' },
    // md: { value: '{sizes.4}' },
  },
  shadows: {
    base: { value: '0 0 0 1px {colors.shadow}' },
    focus: { value: '0 0 0 2px {colors.focus}' },
    focusRing: { value: '0 0 0 2px {colors.focusRing}' },
  },
  zIndices: {
    base: { value: '0' },
    dropdown: { value: '10' },
    sticky: { value: '20' },
    fixed: { value: '30' },
    overlay: { value: '40' },
    modal: { value: '50' },
    popover: { value: '60' },
    skipLink: { value: '70' },
    toast: { value: '80' },
    alert: { value: '90' },
  },
  transitions: {
    base: { value: '0.2s ease-out' },
  },
  breakpoints: {
    sm: { value: '640px' },
    md: { value: '768px' },
    lg: { value: '1024px' },
    xl: { value: '1280px' },
    '2xl': { value: '1536px' },
  },
});
