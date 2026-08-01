import { defineSemanticTokens } from '@pandacss/dev';
import { stratusPersonality } from '../themes/personalities/stratus';
import { borderWidths } from './border-widths';
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
import { gradients } from './gradients';
import { opacity } from './opacity';

export const semanticTokens = defineSemanticTokens({
  borders,
  borderWidths,
  colors,
  durations: {
    fast: { value: stratusPersonality.motion.duration.fast },
    normal: { value: stratusPersonality.motion.duration.normal },
    slow: { value: stratusPersonality.motion.duration.slow },
  },
  easings: {
    default: { value: stratusPersonality.motion.easing.default },
    enter: { value: stratusPersonality.motion.easing.enter },
    exit: { value: stratusPersonality.motion.easing.exit },
  },
  fonts,
  fontSizes,
  fontWeights,
  gradients,
  letterSpacings,
  lineHeights,
  opacity,
  blurs: {},
  cursor: {
    disabled: { value: 'not-allowed' },
  },
  radii,
  shadows,
  sizes,
  spacing,
  zIndex,
  transitions: {
    base: { value: '{durations.normal} {easings.default}' },
  },
});
