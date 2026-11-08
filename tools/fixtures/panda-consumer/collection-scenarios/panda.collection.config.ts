import { defineConfig } from '@pandacss/dev';
import { atelierRecipeCollection } from '@bend-ui/preset';
import base from './panda.config';

const collection = process.env.BEND_RECIPE_COLLECTION ?? 'default';
if (collection !== 'default' && collection !== 'atelier') {
  throw new Error(`Unknown recipe collection: ${collection}`);
}
export default defineConfig({
  ...base,
  theme: {
    ...base.theme,
    extend: {
      ...base.theme?.extend,
      layerStyles: {
        focus: { DEFAULT: { value: { outlineColor: 'stroke' } } },
      },
      semanticTokens: {
        ...base.theme?.extend?.semanticTokens,
        colors: {
          ...base.theme?.extend?.semanticTokens?.colors,
          stroke: {
            DEFAULT: { value: { base: '#26315c', _dark: '#f0eadf' } },
            weak: { value: { base: '#26315c', _dark: '#f0eadf' } },
          },
        },
      },
    },
  },
  presets: [
    ...(base.presets ?? []),
    ...(collection === 'atelier' ? [atelierRecipeCollection] : []),
  ],
});
