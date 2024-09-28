import { definePreset } from '@pandacss/dev';
import basePreset from '@particles/preset-base';
import * as patterns from './patterns';
import { tokens } from './tokens';
import { semanticTokens } from './semanticTokens';
import { recipes, slotRecipes } from './recipes';
import { textStyles } from './textStyles';
import { layerStyles } from './layerStyles';
import { keyframes } from './keyframes';
import { globalCss } from './globalCss';
import { createTheme } from './themes';

export const preset = definePreset({
  name: 'particles',
  presets: [basePreset],
  conditions: {
    extend: {
      light: '[data-color-mode=light] &, .light &',
      dark: '[data-color-mode=dark] &, .dark &',
      closed: '&:is([data-state=closed])',
      open: '&:is([open], [data-state=open])',
      selected: '&:is([data-selected], [data-state=selected])',
      active: '&:is(:active, [data-active], [data-state=active])',
      inactive: '&:is([data-inactive], [data-state=inactive])',
      hasIcon: '&:is([data-has-icon])',
      hasIconEnd: '&:is([data-has-icon-end])',
      hasAddonStart: '&:is([data-has-addon-start])',
      hasAddonEnd: '&:is([data-has-addon-end])',
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
