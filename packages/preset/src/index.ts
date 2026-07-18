import { definePreset } from '@pandacss/dev';
import type { Preset } from '@pandacss/types';
import basePreset from '@bend-ui/preset-base';
import * as patterns from './patterns';
import { tokens } from './tokens';
import { semanticTokens } from './semanticTokens';
import { recipes, slotRecipes } from './recipes';
import { textStyles } from './textStyles';
import { layerStyles } from './layerStyles';
import { keyframes } from './keyframes';
import { globalCss } from './globalCss';
import { createTheme } from './themes';
import { conditions } from './conditions';

const bendPreset = definePreset({
  name: 'bend-ui',
  presets: [basePreset],
  conditions: {
    extend: {
      ...conditions,
    },
  },
  patterns: {
    extend: patterns,
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      recipes,
      slotRecipes,
      textStyles,
      layerStyles,
      keyframes,
    },
  },
  globalCss,
  themes: {
    default: createTheme(),
    proton: createTheme({
      primaryColor: 'indigo',
      neutralColor: 'slate',
      defaultPrimaryColor: '500',
      defaultNeutralColor: '500',
    }),
    neutron: createTheme({
      primaryColor: 'amber',
      neutralColor: 'sand',
      defaultPrimaryColor: '500',
      defaultNeutralColor: '500',
    }),
    quark: createTheme({
      primaryColor: 'lime',
      neutralColor: 'olive',
      defaultPrimaryColor: '500',
      defaultNeutralColor: '500',
    }),
  },
});

/**
 * Composes the Bend UI structural preset (`@bend-ui/preset-base`) with the design
 * preset into a single Panda preset. There is no `library` option: recipes style
 * against the canonical, library-agnostic state-attribute contract (ADR-0002), so
 * the same preset works for every adapter (Base UI, Ark UI, React Aria) and lets
 * them be mixed in one app.
 *
 * Pass `extend` to layer consumer overrides on top; Panda merges it last so it
 * wins over Bend's defaults without clobbering them.
 */
export const createBendPreset = (extend?: Preset): Preset =>
  extend
    ? definePreset({ name: 'bend-ui', presets: [bendPreset, extend] })
    : bendPreset;

export { conditions };
