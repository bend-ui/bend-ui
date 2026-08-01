import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const radii = defineSemanticTokens.radii({
  base: { value: stratusPersonality.shape.control },
  control: { value: stratusPersonality.shape.control },
  surface: { value: stratusPersonality.shape.surface },
  overlay: { value: stratusPersonality.shape.overlay },
});
