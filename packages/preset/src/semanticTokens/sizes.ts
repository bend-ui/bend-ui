import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const sizes = defineSemanticTokens.sizes({
  control: {
    sm: { value: stratusPersonality.density.controlHeights.sm },
    md: { value: stratusPersonality.density.controlHeights.md },
    lg: { value: stratusPersonality.density.controlHeights.lg },
  },
  indicator: {
    xs: { value: stratusPersonality.density.spacing.xs },
    sm: { value: stratusPersonality.density.spacing.sm },
    md: { value: stratusPersonality.density.spacing.md },
  },
  scrollbar: { value: stratusPersonality.density.spacing.md },
});
