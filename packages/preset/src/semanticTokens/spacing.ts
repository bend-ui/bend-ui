import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const spacing = defineSemanticTokens.spacing({
  base: { value: stratusPersonality.density.spacing.md },
  xs: { value: stratusPersonality.density.spacing.xs },
  sm: { value: stratusPersonality.density.spacing.sm },
  md: { value: stratusPersonality.density.spacing.md },
  lg: { value: stratusPersonality.density.spacing.lg },
});
