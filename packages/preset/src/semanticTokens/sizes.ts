import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const sizes = defineSemanticTokens.sizes({
  control: {
    sm: { value: stratusPersonality.density.controlHeights.sm },
    md: { value: stratusPersonality.density.controlHeights.md },
    lg: { value: stratusPersonality.density.controlHeights.lg },
  },
});
