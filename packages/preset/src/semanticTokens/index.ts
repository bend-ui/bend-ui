import { defineSemanticTokens } from '@pandacss/dev';
import { animations } from './animations';
import { borders } from './borders';
import { colors } from './colors';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { spacing } from './spacing';
import { zIndex } from './zIndex';

export const semanticTokens = defineSemanticTokens({
  borders,
  borderWidths: {},
  colors,
  durations: {},
  easings: {},
  fonts,
  fontSizes,
  fontWeights,
  gradients: {},
  letterSpacings,
  lineHeights,
  opacity: {},
  radii,
  shadows,
  sizes,
  spacing,
  zIndex,
  transitions: {
    base: { value: '0.2s ease-out' },
  },
  animations,
});
