import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';

export const borderWidths = defineSemanticTokens.borderWidths({
  base: { value: stratusPersonality.shape.borderWidth },
});
