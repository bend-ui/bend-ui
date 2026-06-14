import { definePreset } from '@pandacss/dev';
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
import { arkUi, baseUi } from './librairies';
import { conditions } from './conditions';

interface PresetOptions {
  library: 'ark-ui' | 'base-ui';
}
const libraries = {
  'ark-ui': arkUi,
  'base-ui': baseUi,
};

export const preset = (options: PresetOptions = { library: 'base-ui' }) =>
  definePreset({
    name: 'bend-ui',
    presets: [basePreset],
    conditions: {
      extend: {
        ...conditions,
        ...libraries[options.library].conditions,
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

export const arkPreset = definePreset({
  name: 'ark',
  presets: [preset],
});
