import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const shadows = defineSemanticTokens.shadows({
  base: { value: stratusPersonality.elevation.surface },
  surface: { value: stratusPersonality.elevation.surface },
  focusRing: { value: '0 0 0 2px {colors.primary}' },
  interaction: {
    neutral: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.neutral.200}'],
      },
    },
    primary: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.primary.200}'],
      },
    },
    danger: {
      DEFAULT: {
        value: ['inset 0 1px 3px -1px {colors.danger.200}'],
      },
    },
  },
  raised: { value: stratusPersonality.elevation.raised },
  overlay: { value: stratusPersonality.elevation.overlay },
});
