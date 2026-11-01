import { defineSemanticTokens } from '@pandacss/dev';

export const radii = defineSemanticTokens.radii({
  base: { value: '{radii.md}' },
  control: { value: '{radii.base}' },
  surface: { value: '{radii.lg}' },
  overlay: { value: '{radii.xl}' },
  // For an inner surface inset by spacing.sm; clamp square themes at zero.
  inset: { value: 'max(0px, calc({radii.surface} - {spacing.sm}))' },
});
